<template>
  <div v-if="showAssets" class="sm:mx-0 mx-2 mt-4">
      <h1 class="text-2xl my-4">
      Domains and Names
    </h1>

    <table class="table-auto  w-full ">
      <thead class=" align-right ">
        <tr>
          <th class="px-6 py-3 text-left text-xs  text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th class="px-6 py-3 text-left text-xs  text-gray-500 uppercase tracking-wider">
            Type
          </th>

        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(asset,i) in names"
          :key="i"
          class="hover:bg-gray-100 border-b border-t"
        >
          <td class="px-6 py-4 whitespace-nowrap">
            {{ asset.name }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            {{ asset.asset_contract.name }}
          </td>

        </tr>
      </tbody>
    </table>


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
