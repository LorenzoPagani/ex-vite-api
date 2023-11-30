<script>
export default {
    name: "appMain",
    props: ["data"]
}
</script>
<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex flex-wrap">
                    <div v-for="brewery in data" class="card text-white">
                        <div class="card-body">
                            <h5 class="card-title">{{ brewery.name }}</h5>
                            <p class="card-text">{{ brewery.address_1 }}, {{ brewery.city }}</p>
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
    height: 110vh;
    padding-top: 3rem;
}

.card {
    width: calc(100% / 5 - 2rem);
    margin: 1rem;
    background-color: #00995E;
    border: 2px solid #F7843C;

}
</style>