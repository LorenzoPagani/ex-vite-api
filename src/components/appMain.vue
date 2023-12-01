<script>
import brewerySelect from '../components/brewerySelect.vue'

export default {
    components: {
        brewerySelect

    },
    name: "appMain",
    props: ["data", "changeBrewery", "nextPage", "prevPage"],

}
</script>
<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <brewerySelect @nextPage="nextPage" @prevPage="prevPage" @choice="changeBrewery" />
                </div>
                <div class="col-12 d-flex flex-wrap">
                    <div v-for="brewery in data" class="card text-white">
                        <div class="card-body">
                            <h5 class="card-title">{{ brewery.name }}</h5>
                            <p class="card-text">{{ brewery.address_1 }}</p>
                            <h6 class="card-text">{{ brewery.city }}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
main {
    background-image: url(/Brewery-Page-Image.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 90vh;
    padding-top: 3rem;
}

.card {
    width: calc(100% / 5 - 2rem);
    aspect-ratio: 2 / 1;
    margin: 1rem;
    background-color: #00995E;
    border: 2px solid #F7843C;

}
</style>