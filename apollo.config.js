module.exports = {
  client: {
    service: {
      name: "harper.eth",
      // URL to the GraphQL API
      url: "https://api.thegraph.com/subgraphs/name/wighawag/eip721-subgraph"
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"]
  }
};
