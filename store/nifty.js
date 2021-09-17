export const state = () => ({
  assets: [],
  nameAssets: []
});

export const actions = {
  async getAssets({ commit, dispatch }, { owner }) {
    console.log("Let's get the assets");
    let done = false;
    const limit = 50;
    let offset = 0;
    let assets = [];
    while (!done) {
      const assetsUrl = `https://api.opensea.io/api/v1/assets?limit=${limit}&offset=${offset}&order_direction=desc&owner=${owner}`;
      const assetResponse = await this.$axios.$get(assetsUrl);
      assets = [...assets, ...assetResponse.assets];

      if (assetResponse.assets.length === 0) {
        done = true;
        console.log("done");
      } else {
        offset += limit;
      }
    }
    const newAssets = [];
    const ensAssets = [];
    assets.forEach((asset) => {
      console.log(asset.asset_contract);
      if (asset.asset_contract.symbol === 'ENS'
        || asset.asset_contract.name === '.crypto'
        || asset.asset_contract.symbol === 'NAME'
        || asset.asset_contract.name === 'DCL Registrar') {
        ensAssets.push(asset);
      } else {
        newAssets.push(asset);
      }
    });
    if (newAssets.length > 0) {
      this.assets = newAssets;
      await commit("appendAssets", newAssets);
    }
    if (ensAssets.length > 0) {

      await commit("appendNameAssets", ensAssets);
    }

  },

  async getAsset(context, { token }) {
    try {
      const assetUrl = `https://api.opensea.io/api/v1/asset/${token.contract.id}/${token.tokenID}/`;
      const assetResponse = await this.$axios.$get(assetUrl);
      return assetResponse;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  },
};

export const mutations = {
  updateAssets: (state, data) => {
    state.assets = data;
  },
  appendAssets: (state, data) => {
    state.assets = [...state.assets, ...data];

  },
  updateNameAssets: (state, data) => {
    state.nameAssets = data;
  },
  appendNameAssets: (state, data) => {
    state.nameAssets = [...state.nameAssets, ...data];

  }
};
