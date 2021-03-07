import gql from "graphql-tag";

export const state = () => ({
  tokens: []
});

export const actions = {
  async getTokens({ commit, dispatch }) {
    const gqlQuery = gql`
      {
        tokens(where: { owner: "0xe7e84204b7e180454e5c40d0e04d346214a83f85" }) {
          tokenURI
          tokenID
          contract {
            id
          }
          owner {
            id
          }
        }
      }
    `;

    let response = await this.app.apolloProvider.defaultClient.query({
      query: gqlQuery,
      variables: {
        owner: "0xe7e84204b7e180454e5c40d0e04d346214a83f85"
      }
    });
    const tokensResponse = response.data.tokens;
    const tokens = [];
    tokensResponse.forEach(async token => {
      const tokenInfo = await dispatch("getAsset", { token });
      if (tokenInfo) {
        tokens.push({ ...token, ...tokenInfo });
      }
    });

    await commit("updateTokens", tokens);
  },
  async getAsset(context, { token }) {
    try {
      const assetUrl = `https://api.opensea.io/api/v1/asset/${token.contract.id}/${token.tokenID}/`;
      const assetResponse = await this.$axios.$get(assetUrl, {
        headers: {
          "X-API-KEY": "b35560019b6b42f4876238177f6ee73b" //the token is a variable which holds the token
        }
      });
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
