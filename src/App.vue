<script >
import axios, { isCancel, AxiosError } from 'axios'
import appHeader from './components/appHeader.vue'
import appMain from './components/appMain.vue'

export default {
  components: {
    appHeader,
    appMain
  },
  data() {
    return {
      beerList: [],
    }
  },
  mounted() {
    axios.get("https://api.openbrewerydb.org/v1/breweries?by_country=ireland&per_page=10").then(resp => {
      this.beerList.push(...resp.data)
      console.log(this.beerList.data)

    })
  }
}
</script>

<template>
  <appHeader title="Breweries of Ireland" />
  <appMain :data="beerList"></appMain>
</template>

<style scoped></style>
