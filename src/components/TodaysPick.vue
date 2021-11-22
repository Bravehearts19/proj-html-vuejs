<template>
    <div class="todays_pick_container">
        <div class="todays_pick_background_container">
            <div class="article">
                <h3>Food Corner: Top Japanese Restaurants for Sushi</h3>
                <p>March 25, 2019</p>
                <div class="article_tag">
                    <span>TODAY'S PICK</span>
                </div>
            </div>
        </div>
        <div class="articles_choices_container">
            <h5>FOODIE JOURNAL</h5>
            <div class="d-flex">
                <div class="article_card_container" v-for="(article, i) in articlesList" :key="'article' + i">
                    <div class="image_container">
                        <img :src="article.imageUrl" alt="">
                    </div>
                    <h5>{{ article.title }}</h5>
                    <p>{{ article.info }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodaysPick',
    data() {
        return {
            articlesList: [
                {
                    imageUrl: require('../assets/single-post-img3.jpg'),
                    title: "Food Corner: Top Japanese Restaurants for Sushi",
                    info: "By admin | March 25th, 2019",
                },
                {
                    imageUrl: require('../assets/fi-roundup.jpg'),
                    title: "Roundup: My New Favourite Recipes For Healthy Living",
                    info: "By admin | March 25th, 2019",
                },
                {
                    imageUrl: require('../assets/fi-toasts.jpg'),
                    title: "Why These Toasts with Tea are My New Favourite",
                    info: "By admin | March 25th, 2019",
                }
            ]
        }
    }
}
</script>

<style>

</style>