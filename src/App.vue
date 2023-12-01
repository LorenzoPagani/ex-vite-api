<script >
import { store } from "./store.js"
import axios, { isCancel, AxiosError } from 'axios'
import appHeader from './components/appHeader.vue'
import appMain from './components/appMain.vue'

export default {
  components: {
    appHeader,
    appMain,
  },
  data() {
    return {
      store,
    }
  },
  methods: {

    getBreweries() {
      store.beerList = []
      axios.get(`https://api.openbrewerydb.org/v1/breweries?by_country=ireland&by_type=${store.breweryType}&page=${store.pageCounter}&per_page=10`).then(resp => {
        store.beerList.push(...resp.data)
        console.log(resp)
      })
    },
    nextPage() {
      store.pageCounter++;
      this.getBreweries()
      console.log(store.beerList)
      console.log(store.pageCounter)

    },
    prevPage() {
      if (store.pageCounter > 1) {
        store.pageCounter--;
        this.getBreweries()
        console.log(store.pageCounter)
      }
    }
  },
  mounted() {
    this.getBreweries()
  }
}
</script>

<template>
  <appHeader title="Breweries of Ireland" />

  <appMain :nextPage="nextPage" :prevPage="prevPage" :changeBrewery="getBreweries" :data="store.beerList"></appMain>
</template>

<style scoped></style>
