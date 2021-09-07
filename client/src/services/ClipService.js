import Api from './Api';

export default {
  addClip(clip) {
    return Api().post('clips', clip);
  },

  getAllClips() {
    return Api().get('clips/getAll');
  }
};
