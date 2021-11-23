<template>
    <div class="collection_container_fluid">
        <div class="collection_container">
            <div class="collection_title_container">
                <h4>CULINARY COLLECTION</h4>
                <p>Aliquam erat voluptat. Ut quis ligula magna blandit finibus. Sunspendisse maximus lacus non nunc lacinia lobortis.</p>
            </div>
            <div class="collection_cards_container">
                <div class="collection_card" v-for="(collection, i) in collectionsList" :key="'collection' + i">
                    <img :src="collection.imgUrl" alt="">
                    <h6>{{ collection.title }}</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CulinaryCollection',
    data() {
        return {
            collectionsList: [
                {
                    imgUrl: require('../assets/baking-recipes.png'),
                    title: "BAKERY",
                },
                {
                    imgUrl: require('../assets/baking-recipes.png'),
                    title: "BAKERY",
                },
                {
                    imgUrl: require('../assets/baking-recipes.png'),
                    title: "BAKERY",
                },
                {
                    imgUrl: require('../assets/baking-recipes.png'),
                    title: "BAKERY",
                },
                {
                    imgUrl: require('../assets/baking-recipes.png'),
                    title: "BAKERY",
                },
                {
                    imgUrl: require('../assets/baking-recipes.png'),
                    title: "BAKERY",
                },
                {
                    imgUrl: require('../assets/baking-recipes.png'),
                    title: "BAKERY",
                },
                {
                    imgUrl: require('../assets/baking-recipes.png'),
                    title: "BAKERY",
                },
            ]
        }
    }
}
</script>

<style>

</style>