import Vuetify from 'vuetify';
import colors from 'vuetify/lib/util/colors';
import '@mdi/font/css/materialdesignicons.css';

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },

    theme: {
        dark: false,

        themes: {
            light: {},

            dark: {
                background: '#121212',
                primary: colors.green.lighten1,
                secondary: colors.blue.lighten1,
                accent: '#1f4c96',
                error: '#ff5252',
                info: '#2196f3',
                success: '#4caf50',
                warning: '#ffc107'
            }
        }
    }
});
