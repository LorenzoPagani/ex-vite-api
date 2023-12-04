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
    getData(page) {
      axios.get(`https://api.openbrewerydb.org/v1/breweries?by_country=ireland&by_type=${store.breweryType}&page=${page}&per_page=10`).then(resp => {
        if (resp.data.length) {
          store.beerList = []
          store.pageCounter = page;
          store.beerList.push(...resp.data)

        }
      })
    },
    getBreweries() {
      this.getData(1)
    },
    nextPage() {
      this.getData(store.pageCounter + 1)
    },
    prevPage() {
      this.getData(store.pageCounter - 1)
    }
  },
  mounted() {

  }
}
</script>

<template>
  <appHeader title="Breweries of Ireland" />
  <appMain :nextPage="nextPage" :prevPage="prevPage" :changeBrewery="getBreweries" :data="store.beerList"></appMain>
</template>

<style scoped></style>
