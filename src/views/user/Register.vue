<template>
  <div class="px-20 pb-20">
    <div class="flex justify-center mb-10">
      <p>Registration</p>
    </div>
    <div class="flex flex-col mb-2">
      <label for="name" class="mb-2">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        v-model.trim="name"
        class="border-2 border-black-100 border-solid rounded"
      />
      <span v-if="v$.name.$invalid" class="text-red-400"
        >oops! invalid name</span
      >
    </div>
    <div class="flex flex-col mb-2">
      <label for="mail" class="mb-2">Email</label>
      <input
        type="mail"
        id="mail"
        name="mail"
        v-model.trim="mail"
        class="border-2 border-black-100 border-solid rounded"
      />
      <span v-if="v$.mail.$invalid" class="text-red-400"
        >oops! invalid mail</span
      >
    </div>
    <div class="flex flex-col mb-10">
      <label for="password" class="mb-2">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        v-model.trim="password"
        class="border-2 border-black-100 border-solid rounded"
      />
      <span v-if="v$.password.$invalid" class="text-red-400"
        >oops! invalid format</span
      >
    </div>
    <div class="flex justify-center">
      <button
        class="py-2 px-5 shadow-inner bg-yellow-300 rounded hover:bg-yellow-400"
      >
        Register
      </button>
    </div>
  </div>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { ref, computed } from "vue";
import { alpha, email, helpers } from "@vuelidate/validators";

const name = ref("");
const mail = ref("");
const password = ref("");
const passwordValidator= helpers.regex(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/);
const validations = computed(() => ({
  name: {
    alpha,
  },
  mail: {
    email,
  },
  password: {
    passwordValidator
  },
}));
const v$ = useVuelidate(validations, { name, mail,password });
</script>
<style></style>
