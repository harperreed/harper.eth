<template>
  <div v-if="showAssets" class="sm:mx-0 mx-2 mt-4">
    <h1 class="text-3xl" v-if="showAssets">NFTs</h1>

    <div  class="md:masonry md:before:box-inherit md:after:box-inherit mb-8">


      <div v-for="(asset, i) in assets" :key="i" class="md:break-inside">
        <div

          class="border my-2 shadow-xl rounded-lg p-2 mb-6 mx-0  hover:shadow-lg"
        >
          <img
            :src="asset.image_url"
            v-if="asset.image_url"
            class="w-auto h-auto mx-auto"
          />

          <p class="font-semibold mb-2">
            <span class="font-medium">{{asset.asset_contract.name }}:</span>
            <span class="font-normal">{{ asset.name }}</span>
            </p>

          <p>
            <!-- {{ asset.description }} -->
            <!-- <pre>
            {{asset}}
            </pre> -->

            <!-- <br /> -->
            <a :href="asset.permalink" target="_blank" class="text-blue-400"
              >view on Opensea</a
            >
          </p>
        </div>
      </div>
</div>


  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    ethAddress: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      assets: (state) => state.nifty.assets,
      names: (state) => state.nifty.nameAssets,
    }),
    showAssets() {
      if (this.assets.length > 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {},
};
</script>
<style scoped>
</style>
