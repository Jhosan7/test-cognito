
import router from '../../router';
<template>
  <div>
    <div>
      <button @click="handleSignOut">Sign Out</button>
    </div>
    <router-view />
  </div>
</template>

<script setup>
import { signOut } from "aws-amplify/auth"

const handleSignOut = async () => {
  await signOut();
};
</script>
