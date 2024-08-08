import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolClientId: '74eogljoq0drovq120ntqh4sgt',
      userPoolId: 'eu-west-1_e69qF9GHM',
      loginWith: {
        oauth: {
          domain: 'josetest.auth.eu-west-1.amazoncognito.com',
          scopes: ['email', 'openid', 'profile'],
          redirectSignIn: ['http://localhost:3000/'],
          redirectSignOut: ['http://localhost:3000/'],
          responseType: 'code'
        },
      }
    }
  }
});

createApp(App)
  .use(router)
  .mount('#app')
