import Vuetify from 'vuetify';

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
  },

  theme: {
    dark: false,

    themes: {
      dark: {
        primary: '#21CFF3',
        accent: '#da3eb2',
        secondary: '#FFD663',
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#FF5252',
        _credentials: '#202020'
      },

      light: {
        primary: '#1976D2',
        accent: '#c22b9d',
        secondary: '#30B1DC',
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#FF5252',
        _credentials: '#ffffff'
      }
    }
  }
});
