import config from './config'
import axios from 'axios'
const { apiKey } = config
const URL = `https://ws.audioscrobbler.com/2.0/?api_key=${apiKey}&format=json`

export default {
  getArtists: (country="mexico")=>{
    return fetch(`${URL}&country=${country}&method=geo.gettopartists`)
    .then(res=>res.json())
    .then(json=>json.topartists.artist)
  },

  url: URL,
  getCountries: ()=>{
    return axios.get("https://restcountries.eu/rest/v2/all")
    .then(res=>res.data.map(item=>{return{name: item.name, value: item.name.toLowerCase()}}))
  }
}
