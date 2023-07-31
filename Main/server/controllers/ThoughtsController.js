const {Thought, User} = require('../models');

    module.exports = {

        async getThought(req, res) {
            try {
              const Thoughtss = await Thought.find();
              res.json(Thoughtss);
            } catch (err) {
              res.status(500).json(err);
            }
          },
          
          async getSingleThought(req, res) {
            try {
              const Thoughts = await Thoughts.findOne({ _id: req.params.ThoughtsId });
        
              if (!Thoughts) {
                return res.status(404).json({ message: 'No Thoughts with that ID' });
              }
        
              res.json(Thought);
            } catch (err) {
              res.status(500).json(err);
            }
          },
          
          async createThought(req, res) {
            try {
              const thoughtData = await Thought.create(req.body);
              const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thoughtData._id } },
                { new: true }
              );
        
              if (!user) {
                return res.status(404).json({
                  message: 'Thought created, but found no user with that ID',
                })
              }
        
              res.json(thoughtData);
            } catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },
          
          async updateThought(req, res) {
            try {
              console.log(req.params);
              const thoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
              );
        
              if (!thoughtData) {
                return res.status(404).json({ message: 'No Thoughts with this id!' });
              }
        
              res.json(thoughtData);
            } catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },
          
          async deleteThought(req, res) {
            try {
              const thoughtData = await Thought.findOneAndRemove({ _id: req.params.thoughtId });
        
              if (!thoughtData) {
                return res.status(404).json({ message: 'No Thoughts with this id!' });
              }
        
              const user = await User.findOneAndUpdate(
                { thoughts: req.params.thoughtId },
                { $pull: { Thought: req.params.thoughtId } },
                { new: true }
              );
        
              if (!user) {
                return res.status(404).json({
                  message: 'Thought Deleted but no user with this id!',
                });
              }
        
              res.json({ message: 'Thought successfully deleted!' });
            } catch (err) {
              res.status(500).json(err);
            }
          },
        };
