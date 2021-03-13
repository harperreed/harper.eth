<template>
  <div v-if="showAssets">
    <h1 class="title is-1" v-if="showAssets">NFTs</h1>
    <b-carousel
      v-if="showAssets"
      animated="slide"
      :arrow="true"
      :repeat="false"
      :indicator="false"
    >
      <b-carousel-item v-for="(asset, i) in assets" :key="i">
        <div class="card nftbox">
          <div class="card-image" v-if="asset.image_url">
            <figure class="image">
              <img :src="asset.image_url" v-if="asset.image_url" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ asset.name }}</p>
              </div>
            </div>

            <div class="content">
              {{ asset.description }}
              <br />
              <a :href="asset.permalink" target="_blank">
                <b-icon icon="open-in-new" size="is-small"></b-icon
              ></a>
            </div>
          </div>
        </div>
      </b-carousel-item>
    </b-carousel>
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
    }),
    showAssets() {
      if (this.assets.length > 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    // this.getAssets();
    this.$store.dispatch("nifty/getAssets", { owner: this.ethAddress });
  },
  methods: {},
};
</script>
<style scoped>
.nftbox {
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}

.nftbox:before,
.nftbox:after {
  content: "";
  position: absolute;
  z-index: -1;
  -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  top: 10px;
  bottom: 10px;
  left: 0;
  right: 0;
  -moz-border-radius: 100px / 10px;
  border-radius: 100px / 10px;
}

.nftbox:after {
  right: 10px;
  left: auto;
  -webkit-transform: skew(8deg) rotate(3deg);
  -moz-transform: skew(8deg) rotate(3deg);
  -ms-transform: skew(8deg) rotate(3deg);
  -o-transform: skew(8deg) rotate(3deg);
  transform: skew(8deg) rotate(3deg);
}
</style>
