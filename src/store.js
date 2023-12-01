import { reactive } from 'vue'

export const store = reactive({
  breweryType: 'micro',
  beerList: [],
  pageCounter: 1
})
