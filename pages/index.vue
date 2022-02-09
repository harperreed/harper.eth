<template>
  <div class="mx-auto">
    <Identity :ethAddress="ethAddress" />

    <Nifty :ethAddress="ethAddress" />
    <Names :ethAddress="ethAddress" />
  </div>
</template>

<script>
import Nifty from "~/components/Nifty";
import Names from "~/components/Names";
import Identity from "~/components/Identity";

export default {
  name: "HomePage",
  components: {
    Nifty,
    Identity,
    Names,
  },
  mounted() {
    // this.getAssets();

    this.ethAddresses.forEach(address => {
       this.$store.dispatch("nifty/getAssets", { owner:address });
    });
  },
  computed: {
    ethAddresses() {
      return process.env.ethAddresses;
    },
    ethAddress() {
      return process.env.ethAddresses[0];
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
