<template lang="pug">
  #app
    spinner(v-show="loading")
    img(src="https://kegovc.github.io/PlatziMusic/dist/logo.png")
    h1
     | {{msg}}
     a(:href="url" class="author" target="_blanck") {{ author }}
    select(v-model="selectedCountry")
      option(v-for="country in countries" :value="country.name.toLowerCase()" ) {{ country.name  }}
    ul
      artist(v-for="artist in artists" :artist="artist" :key="artist.name.replace(' ','_').toLowerCase()")
</template>

<script>
import api from './api'
import axios from 'axios'
import Artist from './components/Artist.vue'
import Spinner from './components/Spinner'
export default {
  name: 'app',
  components:{
    Artist,
    Spinner
  },
  methods: {
    refreshArtist() {
      this.loading = true
      api.getArtists(this.selectedCountry)
      .then(result => {
        this.artists = result
      })
      .finally(() => this.loading = false )
    }
  },
  watch: {
    selectedCountry(newValue, oldValue) {

      this.refreshArtist()
    },
  },
  data () {
    return {
      msg: 'PlatziMusic by ',
      author: "Kegovc",
      url: "https://github.com/Kegovc",
      artists: [],
      countries:[],
      selectedCountry: 'mexico',
      loading: true
    }
  },
  beforeCreate(){

  },
  created(){

  },
  beforeMount(){

  },
  mounted(){
    api.getCountries()
    .then(result=>{
      this.countries = result
    })
    this.refreshArtist()

  },
  beforeUpdate(){

  },
  updated(){

  },
  beforeDestroy(){

  },
  destroyed(){

  }
}
</script>

<style lang="stylus">

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: red !important
  margin-top: 60px

h1, h2
  font-weight: normal

ul
  list-style-type: none
  padding: 0

li
  display: inline-block
  margin: 0 10px

a
  color: #42b983

.author
  text-decoration: none
  &:hover
    color: #36485f
</style>
