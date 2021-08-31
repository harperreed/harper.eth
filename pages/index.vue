<template>
  <div class=" mx-auto ">

        <Identity :ethAddress="ethAddress" />


        <Nifty :ethAddress="ethAddress" />


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
