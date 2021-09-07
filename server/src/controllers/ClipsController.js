const { Clip } = require('../models');
const { StatusCodes } = require('http-status-codes');

module.exports = {
  async addClip(req, res) {
    try {
      const clip = await Clip.create(req.body);

      res.send({
        clip: clip.toJSON()
      });
    } catch (e) {
      res.status(StatusCodes.BAD_REQUEST).send({
        error: 'Invalid clip format'
      });
    }
  },

  async getAllClips(req, res) {
    try {
      const clips = await Clip.findAll();

      if (!clips) {
        res.status(StatusCodes.NOT_FOUND).send({
          error: 'There are no available clips'
        });
      }

      let results = [];
      let i = 0;

      while (clips.length) {
        results.push({ id: i, value: clips.splice(0, 4)});
        i++;
      }

      res.send(results);
    } catch (e) {
      console.log(e);
    }
  },

  async getAvailableClips(req, res) {
    try {
      const clips = await Clip.findAll({
        where: {
          stock: {
            gt: 0
          }
        }
      });

      if (!clips) {
        res.status(StatusCodes.NOT_FOUND).send({
          error: 'There are no available clips'
        });
      }

      return clips;
    } catch (e) {
      console.log(e);
    }
  }
};
