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
                    imgUrl: require('../assets/drinks-recipes.png'),
                    title: "DRINKS",
                },
                {
                    imgUrl: require('../assets/soups-recipes.png'),
                    title: "SOUPS",
                },
                {
                    imgUrl: require('../assets/baking-recipes.png'),
                    title: "BAKERY",
                },
                {
                    imgUrl: require('../assets/dinner-recipes.png'),
                    title: "DINNER",
                },
                {
                    imgUrl: require('../assets/healthy-recipes.png'),
                    title: "HEALTHY",
                },
                {
                    imgUrl: require('../assets/staff-picks.png'),
                    title: "STAFF PICKS",
                },
                {
                    imgUrl: require('../assets/premium-recipes.png'),
                    title: "APPETISERS",
                },
                {
                    imgUrl: require('../assets/quick-easy-recipes.png'),
                    title: "QUICK & EASY",
                },
            ]
        }
    }
}
</script>

<style>

</style>