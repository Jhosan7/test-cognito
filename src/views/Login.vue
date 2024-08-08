<template>
  <div>
    <button @click="signIn">Sign In</button>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { signInWithRedirect } from "aws-amplify/auth"

import { useRouter } from "vue-router";
const Router = useRouter();

const signIn = async () => {
  try {
    await signInWithRedirect();
  } catch (error) {
    if (error.name === "UserAlreadyAuthenticatedException") {
      console.log("User is already authenticated");
      Router.push({ name: "Dashboard" });
    } else {
      console.error(error);
    }
  }
};


onMounted(async() => {
});
</script>

<style scoped>
</style>
