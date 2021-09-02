import Vuetify from 'vuetify';

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg'
  },

  theme: {
    dark: true,

    themes: {
      dark: {
        primary: '#21cff3',
        accent: '#da3eb2',
        secondary: '#ffd663',
        success: '#4caf50',
        info: '#2196f3',
        warning: '#fb8c00',
        error: '#ff5252',
        _credentials: '#202020',
        _userCard: '#2a2a2a',
        _clipCard: '#1e1e1e'
      },

      light: {
        primary: '#1976d2',
        accent: '#c22b9d',
        secondary: '#30b1dc',
        success: '#4caf50',
        info: '#2196f3',
        warning: '#fb8c00',
        error: '#ff5252',
        _credentials: '#fff',
        _userCard: '#fff',
        _clipCard: '#fff'
      }
    }
  }
});
