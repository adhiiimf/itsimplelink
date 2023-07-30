<script>
export default {
  data() {
    return {
      profileName: '',
      linkedinlink: '',
      wanumber: '',
      ig: '',
      fb: '',
      yt: '',
      github: '',
      email: '',
      show: true
    }
  }
}
</script>

<script setup>
import GreetingHello from './components/GreetingHello.vue';
</script>

<template>
  <section>
    <header>
      <div class="wrapper">
        <GreetingHello :visitor="profileName"/>
      </div>
    </header>
    <main class="w-1/2 pr-12 mt-10">
      <div class="bg-gray-100  shadow-inner rounded-xl font-semibold items-center flex">
        <font-awesome-icon icon="fas fa-user-astronaut" class="ml-4 text-gray-600" />
        <input v-model="profileName" class="w-full bg-transparent rounded-xl py-2 mx-3 outline-none" type="text" placeholder="Adhi ..." required>
      </div>
      <div class="bg-gray-100 shadow-inner rounded-xl font-semibold items-center flex mt-4">
        <font-awesome-icon icon="fa-solid fa-envelope" class="ml-4 text-gray-600" />
        <input v-model="email" class="w-full bg-transparent rounded-xl py-2 mx-3 outline-none" type="text" placeholder="email@gmail.com" required>
      </div>
      <button class="w-full py-2 mt-4 bg-gradient-to-tr from-emerald-500 to-green-300 shadow-inner rounded-xl font-semibold items-center flex justify-center text-white text-xl">
        +
      </button>
    </main>
    <aside class="md:fixed flex top-0 right-0 z-40 md:w-1/2 w-full max-md:rounded-2xl h-screen transition-transform translate-x-full sm:translate-x-0 bg-gradient-to-t from-cyan-300 to-green-200 shadow-inner justify-center pt-8">
        <div class="p-5 flex justify-center">
          <ul class=" flex flex-col items-center">
            <li v-show="profileName.length > 0" class="flex justify-center items-center mb-2">
              <font-awesome-icon icon="fas fa-user-astronaut" class="text-gray-600 text-5xl" />
            </li>
            <li v-show="profileName.length > 0" class="flex item-center mb-2">
              <h3 class="font-semibold text-center text-3xl"> <span class="text-2xl font-semibold">Hi!</span> <br> I'm {{ profileName }}</h3>
            </li>
            <li v-show="email.length > 0" class="flex item-center my-2">
              <a :href="'mailto:' + email" class="flex items-center justify-center w-96 h-12 rounded-xl bg-gradient-to-tr from-green-500 to-emerald-500 ">
                <font-awesome-icon icon="fa-solid fa-envelope" class="text-gray-100 text-xl mr-2" />
                <h3 class="font-semibold text-gray-100">{{ email }}</h3>
              </a>
            </li>
            <li v-show="email.length > 0" class="flex item-center my-2">
              <a :href="'mailto:' + email" class="flex items-center justify-center w-96 h-12 rounded-xl bg-gradient-to-tr from-green-500 to-emerald-500 ">
                <font-awesome-icon icon="fa-solid fa-envelope" class="text-gray-100 text-xl mr-2" />
                <h3 class="font-semibold text-gray-100">{{ email }}</h3>
              </a>
            </li>
          </ul>
        </div>
    </aside>
  </section>
</template>
