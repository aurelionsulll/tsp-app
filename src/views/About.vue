<template>
  <div class="flex h-screen">
    <div class="w-2/3 h-full">
      <img src="../assets/bg.jpg" alt="">
    </div>
    <div class="w-full">
      <div class="flex flex-col justify-center min-h-screen py-6 bg-gray-50 sm:py-12">
      <div class="relative w-11/12 max-w-xl py-3 sm:mx-auto">
        <div class="relative p-8 bg-white shadow-lg sm:rounded-xl">
          <form @submit.prevent="postData()" class="w-full">
            <div class="flex gap-x-2">
              <div class="relative w-1/2 mb-5">
                <input type="text" name="num_pop" v-model="form.num_pop"  class="w-full h-16 p-3 pt-8 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm" placeholder="name@example.com" autocomplete="off" />
                <label for="email" class="absolute top-0 left-0 h-full px-3 py-5 transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">Nombre de populations</label>
              </div>
              <div class="relative w-1/2 mb-5">
                <input type="text" name="num_gen" v-model="form.num_gen"  class="w-full h-16 p-3 pt-8 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm" placeholder="name@example.com" autocomplete="off" />
                <label for="email" class="absolute top-0 left-0 h-full px-3 py-5 transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">Nombre de Generations</label>
              </div>
            </div>
            <div class="flex gap-x-2">
              <div class="relative w-1/2 mb-5">
                <input type="text" name="num_sel" v-model="form.num_sel"  class="w-full h-16 p-3 pt-8 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm" placeholder="name@example.com" autocomplete="off" />
                <label for="email" class="absolute top-0 left-0 h-full px-3 py-5 transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">Nombre de Selections</label>
              </div>
              <div class="relative w-1/2 mb-5">
                <input type="text" name="eliteSize" v-model="form.eliteSize" class="w-full h-16 p-3 pt-8 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm" placeholder="name@example.com" autocomplete="off" />
                <label for="email" class="absolute top-0 left-0 h-full px-3 py-5 transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">Nombre de Elitiseme</label>
              </div>
            </div>
            <div class="relative mb-5">
              <label for="email" class="text-left">Probality de Roulette</label>
              <div class="flex gap-x-4">
                <p class="font-bold text-gray-600">0</p>
                <input class="w-full" name="PR" v-model="form.PR"  type="text" min="0" max="1" step="0.01" value="0"  />
                <p class="font-bold text-gray-600">{{form.PR}}</p>
              </div>
            </div>
            <div class="relative mb-5">
              <label for="email" class="text-left">Probality de OX</label>
              <div class="flex gap-x-4">
                <p class="font-bold text-gray-600">0</p>
                <input class="w-full" type="text" min="0" max="1" step="0.01" value="0"  v-model="form.range"/>
                <p class="font-bold text-gray-600">{{form.range}}</p>
              </div>
            </div>
            <div class="relative mb-5">
              <label for="email" class="text-left">Probality de Mutation</label>
              <div class="flex gap-x-4">
                <p class="font-bold text-gray-600">0</p>
                <input class="w-full" name="Pm" v-model="form.Pm"  type="text" min="0" max="1" step="0.01" value="0"  />
                <p class="font-bold text-gray-600">{{form.Pm}}</p>
              </div>
            </div>
            <div class="relative mb-5">
              <input type="text" name="T" v-model="form.T"  class="w-full h-16 p-3 pt-8 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm" placeholder="name@example.com" autocomplete="off" />
              <label for="email" class="absolute top-0 left-0 h-full px-3 py-5 transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">La Taille de Tournoi</label>
            </div>
            <div class="relative mb-5">
              <input type="text" v-model="form.file"  class="w-full h-16 p-3 pt-8 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm" placeholder="name@example.com" autocomplete="off" />
              <label for="email" class="absolute top-0 left-0 h-full px-3 py-5 transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">La Liste des Villes</label>
            </div>
            <button onclick="javascript:void(0);" class="w-full p-3 text-white bg-green-600 rounded-md">Envoyer</button>
          </form>
          {{bestChemin}}
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Form from 'vform'
export default {
  data() {
    return {
      form: new Form({
        range:"",
        num_pop:"",
        num_gen:"",
        num_sel:"",
        eliteSize:"",
        PR:"",
        Pm:"",
        T:"",
        file: "",
      }),
      bestChemin:{},

    }
  },

  methods: {
    postData(){
      this.form.post('http://127.0.0.1:8000/Simulation').then((response) => {
        this.bestChemin = response.data
        this.$store.bestChemin = this.bestChemin
      })
    }
  },
}

</script>
