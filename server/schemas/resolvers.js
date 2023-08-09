const { AuthenticationError } = require('apollo-server-express');
const { User, Thought, Drink } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userdata = await User.findOne({ _id: context.user._id }).populate('savedDrinks');
        console.log(userdata)
        return userdata;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    users: async (parent, args, context) => {
      return User.findById(context.user._id).populate('savedDrinks');
    },
    // user: async (parent, { username }) => {
    //   return User.findOne({ username }).populate('thoughts');
    // },
    // thoughts: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Thought.find(params).sort({ createdAt: -1 });
    // },
    // thought: async (parent, { thoughtId }) => {
    //   return Thought.findOne({ _id: thoughtId });
    // },
    getDrinks: async (parent, args) => {
      const DrinkData = await Drink.find();
      console.log(DrinkData)
      return DrinkData
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    async createDrink(parent, args, context) {
      try {
          if(!context.user) {
            throw new AuthenticationError('You need to be logged in!');
          }
          const drinkData = await Drink.create(args);
          const user = await User.findOneAndUpdate(
              { _id: context.user._id },
              { $addToSet: { savedDrinks: drinkData._id} },
              { new: true }
          );
          if (!user) {
              throw new AuthenticationError('No user found with this id!');
          }
          return user;
      } catch (err) {
          console.log(err);
          throw new AuthenticationError('Error creating drink');
      }
  },

  async deleteDrink(parent, args, context) {
    try {
      if(!context.user) { 
        throw new AuthenticationError('You need to be logged in!');
      }
      // _id or idDrink? before colon
        const DrinkData = await Drink.findOneAndDelete({ _id: args.idDrink });
        if (!DrinkData) {
            throw  new AuthenticationError('No drink found with this id!');
            
        }
        const user = await User.findOneAndUpdate(
            { drinks: args.idDrink },
            { $pull: { drinks: args.idDrink } },
            { new: true }
        );
        if (!user) {
            throw new AuthenticationError('No user found with this id!');
        }
        return user;
    } catch (err) {
        throw new AuthenticationError('Error deleting drink');
    }
  },


    // addThought: async (parent, { thoughtText, username }, context) => {
    //   const thought = await Thought.create({ thoughtText, username });

    //   await User.findOneAndUpdate(
    //     { _id: context.user._id  },
    //     { $addToSet: { thoughts: thought._id } }
    //   );

    //   return thought;
    // },
    // addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
    //   return Thought.findOneAndUpdate(
    //     { _id: thoughtId },
    //     {
    //       $addToSet: { comments: { commentText, commentAuthor } },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
    // removeThought: async (parent, { thoughtId }) => {
    //   return Thought.findOneAndDelete({ _id: thoughtId });
    // },
    // removeComment: async (parent, { thoughtId, commentId }) => {
    //   return Thought.findOneAndUpdate(
    //     { _id: thoughtId },
    //     { $pull: { comments: { _id: commentId } } },
    //     { new: true }
    //   );
    // },

    
  },
};

module.exports = resolvers;
