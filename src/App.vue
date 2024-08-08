
import router from './router';
<template>
  <div>
    <router-view />
  </div>
</template>

<script setup>
import { Hub } from 'aws-amplify/utils';
import { useRouter } from 'vue-router';

const Router = useRouter();

Hub.listen('auth', ({ payload }) => {
  switch (payload.event) {
    case 'signedIn':
      console.log('user have been signedIn successfully.');
      Router.push({ name: 'Dashboard' });
      break;
    case 'signedOut':
      console.log('user have been signedOut successfully.');
      break;
    case 'tokenRefresh':
      console.log('auth tokens have been refreshed.');
      break;
    case 'tokenRefresh_failure':
      console.log('failure while refreshing auth tokens.');
      break;
    case 'signInWithRedirect':
      console.log('signInWithRedirect API has successfully been resolved.');
      break;
    case 'signInWithRedirect_failure':
      console.log('failure while trying to resolve signInWithRedirect API.');
      break;
    case 'customOAuthState':
      logger.info('custom state returned from CognitoHosted UI');
      break;
  }
});
</script>
