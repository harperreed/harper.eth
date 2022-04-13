<template>
  <div class="sm:mx-0 mx-2">
    <img
      class="
        inline-block
        lg:h-48 lg:w-48
        md:h-24 md:w-24
        hidden
        sm:inline-block
        h-10
        w-10
        rounded-full
        ring-2 ring-white
        float-right
      "
      :src="ensData.avatar"
    />
    <h1 class="text-4xl uppercase" v-if="ensName">{{ ensName }}</h1>

    <p
      class="
        sm:text-xl
        md:text-2xl
        font-extralight
        text-gray-400
        mb-4
        overflow-hidden
      "
    >
      {{ ethAddress }}
    </p>
    <p class="text-xl mb-4" v-if="ensData.description">
      {{ ensData.description }}
    </p>
    <p class="text-xl" v-if="ensData.email">
      Send them an email at
      <a :href="`mailto:${ensData.email}`">{{ ensData.email }}</a
      >.
    </p>

    <div class="mt-2 flex sm:flex-row flex-wrap">
      <a
        v-for="(item, key) of links"
        :key="key"
        :href="item.href"
        target="_blank"
        class="
          py-2
          capitalize
          px-4
          border
          rounded-xl
          mr-2
          my-2
          hover:bg-fuchsia-400
          flex
          max-w-min
        "
        :text="item.title"
        >{{ item.icon }}
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
            icon: "homepage",
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
        links.push({
          title: `art.pizza`,
          icon: "art.pizza",
          href: `https://art.pizza/#/${this.ensName}`,
        });
        links.push({
          title: `@${this.ensData["vnd.twitter"]}`,
          icon: "opensea",
          href: `https://opensea.io/${this.ensName}`,
        });
      }

      // Extra goodies
      links.push({
        title: `etherscan`,
        icon: "etherscan",
        href: `https://etherscan.io/address/${this.ethAddress}`,
      });


      links.push({
        title: `fancy.art`,
        icon: "fancy",
        href: `https://search.fancy.art/owner/${this.ethAddress}`,
      });

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
