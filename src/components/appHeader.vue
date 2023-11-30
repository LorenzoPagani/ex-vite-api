<script>
export default {
    props: ["title"]
}
</script>
<template>
    <header class="d-flex justify-content-center align-items-center p-3 bg-warning">
        <h1>{{ title }}</h1>
    </header>
</template>
<style scoped>
header {
    height: 10vh;
}
</style>