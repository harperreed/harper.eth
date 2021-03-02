<template>
  <div>
    <div class="columns is-8 is-variable">
      <div class="column has-text-left">
        <h1 class="title is-1">Harper Reed</h1>
        <p class="is-size-3">{{ ensName }}</p>
        <p class="is-size-5 block">
          {{ ethAddress }}
        </p>
        <p class="is-size-4 block">
          {{ bio }}
        </p>
        <p class="is-size-4 block">
          Send them an email at
          <a :href="`mailto:${email}`">{{ email }}</a
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

      <div class="column is-one-third has-text-left">
        <Nifty :ethAddress="ethAddress" />
      </div>
    </div>
  </div>
</template>

<script>
import Nifty from "~/components/Nifty";

export default {
  name: "HomePage",
  components: {
    Nifty,
  },
  data() {
    return {
      ethAddress: "0xe7e84204b7e180454e5c40d0e04d346214a83f85",
      ensName: "harper.eth",
      email: "harper@modest.com",
      bio: "Harper Reed is an entrepreneur and hacker based in Chicago, il.",
      links: [
        {
          title: "harper.lol",
          icon: "vhs",
          href: "https://harper.lol",
        },
        {
          title: "harper.blog",
          icon: "lead-pencil",
          href: "https://harper.blog",
        },
        {
          title: "reading.lol",
          icon: "book-open-variant",
          href: "https://reading.lol",
        },
        {
          title: "harper.photos",
          icon: "film",
          href: "https://harper.photos",
        },

        {
          title: "@harper",
          icon: "twitter",
          href: "https://twitter.com/harper",
        },
        {
          title: "@harperreed",
          icon: "instagram",
          href: "https://instagram.com/harperreed",
        },
      ],
    };
  },
};
</script>

<style scoped>
a {
  color: #777;
  text-decoration: underline;
}
</style>
