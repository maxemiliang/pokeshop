<template>
  <li class="nav-link">
    <router-link :to="link">{{ title }}</router-link>
  </li>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
