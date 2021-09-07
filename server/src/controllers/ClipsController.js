const { Clip } = require('../models');
const { StatusCodes } = require('http-status-codes');

module.exports = {
  async getAvailableClips(req, res) {
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
  },

  async getAllClips(req, res) {
    const clips = await Clip.findAll({
      attributes: ['clipKey', 'name', 'stock', 'price', 'description', 'imageURL']
    });

    if (!clips) {
      res.status(StatusCodes.NOT_FOUND).send({
        error: 'There are no available clips'
      });
    }

    return clips;
  }
};
