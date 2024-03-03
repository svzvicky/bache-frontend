<template>
<div class="px-20 pb-20">
    <div class="flex justify-center mb-10">
      <p>Login</p>
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
      <button
        class="py-2 px-5 shadow-inner bg-yellow-300 rounded hover:bg-yellow-400"
      >
        Login
      </button>
    </div>
  </div>
</template>
<script setup>

</script>