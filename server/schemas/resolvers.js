const { AuthenticationError } = require('apollo-server-express');
const { User, Thought, Drink } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
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
          const DrinkData = await Drink.create(args);
          const user = await User.findOneAndUpdate(
              { _id: context.user._id },
              { $addToSet: { drinks: DrinkData.idDrink } },
              { new: true }
          );
          if (!user) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
          }
          res.json(DrinkData);
      } catch (err) {
          console.log(err);
          res.status(400).json(err);
      }
  },

  async deleteDrink({ params }, res) {
    try {
        const DrinkData = await Drink.findOneAndDelete({ idDrink: params.idDrink });
        if (!DrinkData) {
            res.status(404).json({ message: 'No drink found with this id!' });
            
        }
        const user = await User.findOneAndUpdate(
            { drinks: req.params.idDrink },
            { $pull: { drinks: req.params.idDrink } },
            { new: true }
        );
        if (!user) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        res.json(DrinkData);
    } catch (err) {
        res.status(400).json(err);
    }
}
};


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
