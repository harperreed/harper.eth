<template>
  <div>
    <div class="columns is-8 is-variable">
      <div class="column has-text-left">
        <Identity :ethAddress="ethAddress" />
      </div>

      <div class="column is-one-third has-text-left">
        <Nifty :ethAddress="ethAddress" />
      </div>
    </div>
  </div>
</template>

<script>
import Nifty from "~/components/Nifty";
import Identity from "~/components/Identity";

export default {
  name: "HomePage",
  components: {
    Nifty,
    Identity,
  },
  computed: {
    ethAddress() {
      return process.env.ethAddress;
    },
  },
};
</script>

<style scoped>
a {
  color: #777;
  text-decoration: underline;
}
</style>
