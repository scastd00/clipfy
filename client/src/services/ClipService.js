import Api from './Api';

export default {
  getAllClips() {
    return Api().get('getClips');
  }
};
