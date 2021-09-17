<template>
<div>
  <div>
  <Heading />
  <Space />

  </div>
  <div class="body">
      <nuxt />
  </div>
</div>
</template>

<script>
import Heading from "~/components/Heading";
import Space from "~/components/Space";
export default {
  components: {
    Space,
    Heading
  },
};
</script>

<style>
  .body{
    @apply mx-auto container sm:my-4;
  }

</style>
