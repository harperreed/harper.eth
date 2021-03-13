const ethers = require("ethers");

const provider = new ethers.providers.CloudflareProvider();

export const state = () => ({
  ensName: "",
  ensData: {}
});

export const actions = {
  async getENSName({ commit }, { ethAddress }) {
    console.log(ethAddress);
    const name = await provider.lookupAddress(ethAddress);

    await commit("updateENSName", name);
  },

  async getENSData({ commit }, { ensName }) {
    const records = [
      "avatar",
      "email",
      "url",
      "vnd.twitter",
      "vnd.github",
      "description"
    ];
    const data = {};
    try {
      const resolver = await provider.getResolver(ensName);

      if (resolver) {
        for (const key of records) {
          const result = await resolver.getText(key);
          if (result) {
            data[key] = result;
          }
        }
        await commit("updateENSData", data);
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export const mutations = {
  updateENSName: (state, data) => {
    state.ensName = data;
  },
  updateENSData: (state, data) => {
    state.ensData = data;
  }
};
