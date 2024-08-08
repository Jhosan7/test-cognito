const awsconfig = {
  Auth: {
      region: 'eu-west-1',
      userPoolId: 'eu-west-1_e69qF9GHM',
      userPoolWebClientId: '74eogljoq0drovq120ntqh4sgt',
      oauth: {
          domain: 'josetest.auth.eu-west-1.amazoncognito.comm',
          scope: ['email', 'openid', 'profile'],
          redirectSignIn: 'http://localhost:3000/',
          redirectSignOut: 'http://localhost:3000/',
          responseType: 'token'
      }
  }
};

export default awsconfig;
