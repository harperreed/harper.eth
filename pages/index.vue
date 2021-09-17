<template>


  <div class=" mx-auto ">



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
    Names

  },
  mounted() {
    // this.getAssets();
    this.$store.dispatch("nifty/getAssets", { owner: this.ethAddress });
    this.$store.dispatch("nifty/getAssets", { owner: "0xE6683e6aAE795a8B71015d955CE0248d684dC2e3" });
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
