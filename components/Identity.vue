<template>
  <div>
    <h1 class="title is-1" v-if="ensName">{{ ensName }}</h1>

    <p class="is-size-5 block">
      {{ ethAddress }}
    </p>
    <p class="is-size-4 block" v-if="ensData.description">
      {{ ensData.description }}
    </p>
    <p class="is-size-4 block" v-if="ensData.email">
      Send them an email at
      <a :href="`mailto:${ensData.email}`">{{ ensData.email }}</a
      >.
    </p>

    <div class="social-media block buttons">
      <a
        v-for="(item, key) of links"
        :key="key"
        :href="item.href"
        target="_blank"
        class="button is-light is-large"
        :text="item.title"
        ><b-icon :icon="item.icon" size="is-small"> </b-icon>
      </a>
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
      ensName: (state) => state.identity.ensName,
      ensData: (state) => state.identity.ensData,
    }),
    links() {
      const links = [];
      if (this.ensData) {
        if (this.ensData["url"]) {
          links.push({
            title: "URL",
            icon: "home",
            href: `http://${this.ensData["url"]}`,
          });
        }
        if (this.ensData["vnd.twitter"]) {
          links.push({
            title: `@${this.ensData["vnd.twitter"]}`,
            icon: "twitter",
            href: `https://twitter.com/${this.ensData["vnd.twitter"]}`,
          });
        }
        if (this.ensData["vnd.github"]) {
          links.push({
            title: `github/${this.ensData["vnd.github"]}`,
            icon: "github",
            href: `https://github.com/${this.ensData["vnd.github"]}`,
          });
        }
      }
      return links;
    },
  },
  watch: {
    ensName: function (ensName) {
      console.log(ensName);
      this.$store.dispatch("identity/getENSData", {
        ensName,
      });
    },
  },
  mounted() {
    // this.getAssets();
    this.$store.dispatch("identity/getENSName", {
      ethAddress: this.ethAddress,
    });
  },
  methods: {},
};
</script>
