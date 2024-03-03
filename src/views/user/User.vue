<template>
  <div class="">
    <div
      class="container mx-auto flex flex-col lg:w-1/4 lg:my-44 shadow-lg shadow-black-100 border-2 border-black-100 border-solid"
    >
      <div class="flex pb-5">
        <div class="grow text-center py-5 shadow-inner cursor-pointer" :class="{'bg-yellow-300':newUser}" @click="newUser=true">Register</div>
        <div class="grow text-center py-5 shadow-inner cursor-pointer" :class="{'bg-yellow-300':!newUser}" @click="newUser=false">Login</div>
      </div>
      <Register v-if="newUser" />
      <Login v-else/>
    </div>
  </div>
</template>

<script setup>
import Register from "./Register.vue";
import Login from "./Login.vue";
import {ref} from 'vue';
const newUser= ref(true)
</script>
<style></style>
