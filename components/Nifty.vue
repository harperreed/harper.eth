<template>
  <div v-if="showAssets" class="sm:mx-0 mx-2 mt-4">
    <h1 class="text-3xl" v-if="showAssets">NFTs</h1>

    <div class="md:masonry md:before:box-inherit md:after:box-inherit mb-8">
      <div v-for="(asset, i) in assets" :key="i" class="md:break-inside">
        <div
          class="border my-2 shadow-xl rounded-lg p-2 mb-6 mx-0 hover:shadow-lg"
        >
          <img
            :src="asset.image_url"
            v-if="asset.image_url"
            class="w-auto h-auto mx-auto rounded-t w-full"
          />

          <p class="font-semibold my-2">
            <span class="font-semibold">{{ asset.asset_contract.name }}:</span>

            <span class="font-normal">{{ asset.name }}</span>

          </p>
          <p class="text-ellipsis overflow-hidden"> {{ asset.description }}</p>

          <div class="flex flex-row justify-around mt-5">

            <!-- <pre>
            {{asset}}
            </pre> -->


            <!-- <br /> -->
            <a :href="`https://search.fancy.art/token/${asset.asset_contract.address}/${asset.token_id}`" target="_blank" class="text-gray-400 hover:text-blue-400"
              ><IconFancy /></a
            >
            <a :href="`https://opensea.io/assets/${asset.asset_contract.address}/${asset.token_id}`" target="_blank" class="text-gray-400 hover:text-blue-400"
              ><IconOpensea /></a
            >
            <a :href="`https://looksrare.org/collections/${asset.asset_contract.address}/${asset.token_id}`" target="_blank" class="text-gray-400 hover:text-blue-400"
              ><IconLooksRare /></a
            >
            <a :href="`https://rarible.com/token/${asset.asset_contract.address}:${asset.token_id}?tab=details`" target="_blank" class="text-gray-400 hover:text-blue-400"
              ><IconRarible /></a
            >
            <a :href="`https://pro.nansen.ai/nft-item-profiler?nft_address=${asset.asset_contract.address}&nft_id=${asset.token_id}`" target="_blank" class="text-gray-400 hover:text-blue-400"
              ><IconNansen /></a
            >
            <a :href="`https://etherscan.io/token/${asset.asset_contract.address}?a=${asset.token_id}`" target="_blank" class="text-gray-400 hover:text-blue-400"
              ><IconEtherscan /></a
            >
            <a v-if="asset.external_link" :href="asset.external_link" target="_blank" class="text-gray-400 hover:text-blue-400"
              ><IconLink /></a
            >
          </div>
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
