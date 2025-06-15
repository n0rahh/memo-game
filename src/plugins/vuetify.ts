import 'vuetify/styles/main.css'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'defaultTheme',
    themes: {
      defaultTheme: {
        colors: {
          primary: '#FF69B4',
          secondary: '#C47EC1',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
  },
})
