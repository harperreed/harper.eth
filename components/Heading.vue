<template>
  <div id="text" class="text-center" @click="randomMessage" >
    <h1>{{heading}}</h1>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heading: 'welcome to the future',
      message: '',
      messages: [
        'we are all going to die',
        'please help. seriously, i am dying',
        'send eth to harper.eth',
        'don\'t worry, be happy',
        'don\'t fuck it up',
        'never give an inch',
        'happiness is fleeting',
        'seriously, focus on happiness',
        'build things',
        'ship product',
        'fuck art, let\'s kill',
        'fuck art, let\'s dance',
        'fuck art, let\'s party',
        'make jpegs not war',
        'don\'t confuse brains with a bull market',
        'never give up',
        'sell early sell often',
        'HODL',
        'Crypto is stupid',
        'Website was made with GPT3',
        'No future',
        'Read about fluxus',
        'Go read a book',
        'Pave the earth',
        'Where are you?',
        '🧑‍🎤',

      ]

    }
  },
  methods: {
    randomMessage() {
      this.message = this.messages[Math.floor(Math.random() * this.messages.length)];
    },
  },
  mounted() {
    this.randomMessage();

  },
};
</script>


<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Russo+One&family=Yellowtail&display=swap");

#text {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
}

h1 {
  @apply sm:text-6xl md:text-7xl lg:text-8xl text-5xl font-medium;
  color: transparent;
  font-family: "Russo One", sans-serif;
  text-transform: uppercase;
  /* font-size: 5em; */
  transform: translatey(25px);
  background: linear-gradient(
    cornflowerblue 30%,
    white,
    darkmagenta 60%,
    cornflowerblue 100%
  );
  background-size: contain;
  -webkit-background-clip: text;
  -webkit-text-stroke: 1px silver;
  filter: drop-shadow(5px 5px 1px black) drop-shadow(1px 1px 1px magenta);
  animation: bg-shift 0.5s ease-in-out infinite alternate;
}
h2 {
  /* color: white; */
  text-transform: capitalize;
  @apply sm:text-6xl text-5xl font-thin text-white;
  font-family: "Yellowtail", cursive;
  /* font-weight: 100; */
  /* font-size: 4em; */
  transform: translatey(-10px) rotatez(-5deg);
  text-shadow: 0 0 3px magenta, 0 0 7px magenta, 0 0 15px black, 0 0 15px black;
  animation: hover 1s ease-in-out infinite;
}
@keyframes move {
  to {
    background-position-y: 2000px;
  }
}
@keyframes bg-shift {
  0% {
    background-position: 0 -25px;
  }
  100% {
    background-position: 0 25px;
  }
}

@keyframes hover {
  0% {
    transform: translatey(-10px) rotatez(-5deg) perspective(200px) translatez(0);
  }
  50% {
    transform: translatey(-10px) rotatez(-5deg) perspective(200px)
      translatez(50px);
  }
  100% {
    transform: translatey(-10px) rotatez(-5deg) perspective(200px) translatez(0);
  }
}
</style>
