<script>
export default {
  data() {
    return {
      linkedinlink: '',
      show: true
    }
  }
}
</script>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import GreetingHello from './components/GreetingHello.vue';
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <GreetingHello visitor="Adhi"/>
    </div>
  </header>

  <main>
    <input v-model="linkedinlink" type="text">
    <h1>{{ linkedinlink }}</h1>
    <button @click="show = !show">Toggle</button>
    <Transition name="bounce">
      <p v-if="show" style="text-align: center;">
        Hello here is some bouncy text!
      </p>
    </Transition>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
