import Vuetify from 'vuetify';

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
  },

  theme: {
    dark: true,

    themes: {
      dark: {
        primary: '#21CFF3',
        accent: '#DB4276',
        secondary: '#FFD663',
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#FF5252'
      },

      light: {
        primary: '#1976D2',
        accent: '#E91E63',
        secondary: '#30B1DC',
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#FF5252'
      }
    }
  }
});
