<template>
  <div class="">
    <div
      class="container mx-auto flex flex-col md:w-1/2 lg:w-1/4 p-20 lg:my-44 sm:my-28 shadow-lg shadow-black-100 border-2 border-black-100 border-solid"
    >
      <div class="flex justify-center mb-10">
        <p>Registration</p>
      </div>
      <div class="flex flex-col mb-2">
        <label for="email" class="mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          class="border-2 border-black-100 border-solid rounded"
        />
      </div>
      <div class="flex flex-col mb-10">
        <label for="password" class="mb-2">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          class="border-2 border-black-100 border-solid rounded"
        />
      </div>
      <div class="flex justify-center">
        <button class="py-2 px-5 shadow-inner bg-yellow-300 rounded hover:bg-yellow-400">Register</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
