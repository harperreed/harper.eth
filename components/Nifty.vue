<template>
  <div>
    <h1 class="title is-1" v-if="assets">NFTs</h1>

    <b-carousel
      v-if="tokens"
      animated="slide"
      :arrow="true"
      :repeat="false"
      :indicator="false"
    >
      <b-carousel-item v-for="(asset, i) in tokens" :key="i">
        <div class="card">
          <div class="card-image" v-if="asset.image_url">
            <figure class="image is-4by3">
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
  data() {
    return {
      assets: undefined,
    };
  },
  computed: {
    ...mapState({
      tokens: (state) => state.nifty.tokens,
    }),
  },
  mounted() {
    // this.getAssets();
    this.$store.dispatch("nifty/getTokens");
  },
  methods: {},
};
</script>
