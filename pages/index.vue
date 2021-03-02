<template>
  <section class="section">
    <h1 class="title">Hello!</h1>
    <p class="block">My name is Harper Reed</p>
    <p class="block">
      This site is hosted on IPFS and powered by information stored on the ethereum blockchain
      transactions.
    </p>
    <h1 class="title">About Harper Reed</h1>

    <p class="block">
      I am a computer operator who likes to make things. Also pranks.
    </p>

    <p class="block">
      You can learn more about me at my website harperreed.com.
    </p>

    <p class="block">Follow me on:
      <ul>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>My blog</li>
      </ul>
    </p>
    <p class="block">
      Feel free to reach out via Twitter or send me an email @
      harper@modest.com.
    </p>
  </section>
</template>

<script>
import Card from "~/components/Card";

export default {
  name: "HomePage",
  components: {
    Card
  }
};
</script>
