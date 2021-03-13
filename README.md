# harper.eth

this powers my ens domain ipfs page. It shows off my NFTs and a bit of my metadata!

You can easily use it yourself. 


## Use it for your page.

First, fork this repo. Then edit the  `nuxt.config.js`:


### Title
```json
  title: "harper.eth - Harper's IPFS website", // change me
```

### Ethereum address
```json
 env: {
    ethAddress: "0xe7e84204b7e180454e5c40d0e04d346214a83f85" // change me
  },
```

Then you can build it and upload it to IPFS

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev


# generate static project
$ yarn generate
```

## Hosting

There is also a `pinata` workflow to deploy the app to IPFS via pinata. You can them update your ENS domain to point to that hash. 
