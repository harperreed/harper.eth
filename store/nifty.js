import gql from "graphql-tag";

export const state = () => ({
  tokens: []
});

export const actions = {
  async getTokens({ commit, dispatch }) {
    const nftQuery = gql`
      {
        tokens(where: { owner: "0x1010595F96Ab62b31BfeAc411Ec5f8f60DB5DC23" }) {
          tokenID
          contract {
            id
          }
        }
      }
    `;
    console.log(nftQuery);

    const owner = "0xe7e84204b7e180454e5c40d0e04d346214a83f85";

    let response = await this.app.apolloProvider.defaultClient.query({
      query: nftQuery,
      variables() {
        // Use vue reactive properties here
        return {
          owner
        };
      }
    });
    const tokensResponse = response.data.tokens;

    const tokens = await dispatch("getAssets", { tokens: tokensResponse });

    await commit("updateTokens", tokens);
  },
  async getAssets(context, { tokens }) {
    const requestLength = 10;
    try {
      let tokenParams = "";

      let assets = [];
      while (tokens.length) {
        const requestTokens = tokens.splice(0, requestLength);
        const limit = requestTokens.length;
        requestTokens.forEach(async token => {
          tokenParams = `${tokenParams}&asset_contract_addresses=${token.contract.id}&token_ids=${token.tokenID}`;
        });
        const assetsUrl = `https://api.opensea.io/api/v1/assets?limit=${limit}&order_direction=desc&offset=0${tokenParams}`;
        console.log(assetsUrl);
        const assetResponse = await this.$axios.$get(assetsUrl);
        assets = [...assetResponse.assets];
      }
      console.log(assets);

      // const assetResponse = await this.$axios.$get(assetsUrl);

      // return assetResponse.assets;
    } catch (error) {
      console.error(error);
      return undefined;
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
  }
};

export const mutations = {
  updateTokens: (state, data) => {
    state.tokens = data;
  }
};
