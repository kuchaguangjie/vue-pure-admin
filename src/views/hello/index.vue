<script setup lang="ts">
defineOptions({
  // name 作为一种规范最好必须写上并且和路由的name保持一致
  name: "Hello"
});
</script>

<template>
  <h1>{{ $t("hello") }}</h1>
</template>
