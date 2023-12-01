<script>
import { store } from "../store.js";
export default {
    name: "BrewerySelect",
    data() {
        return {
            store
        }
    },

}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <select @change="$emit('choice')" v-model="store.breweryType">
                    <option disabled value="micro">Select the type of brewery</option>
                    <option value="micro">micro</option>
                    <option value="regional">regional</option>
                    <option value="brewpub">brewpub</option>
                    <option value="large">large</option>
                </select>
                <button @click="$emit('prevPage')">previous</button>
                <button @click="$emit('nextPage')">next</button>
            </div>
        </div>
    </div>
</template>
<style scoped></style>