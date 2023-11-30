<script >
import axios, { isCancel, AxiosError } from 'axios'
import appHeader from './components/appHeader.vue'

export default {
  components: {
    appHeader
  },
  data() {
    return {
      beerList: [],
    }
  },
  mounted() {
    axios.get("https://api.openbrewerydb.org/v1/breweries?by_country=ireland&per_page=10").then(resp => {
      this.beerList.push(...resp.data)

    })
  }
}
</script>

<template>
  <appHeader title="Breweries of Ireland" />
</template>

<style scoped></style>
