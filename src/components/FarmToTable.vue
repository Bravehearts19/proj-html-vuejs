<template>
    <div class="farm_to_table_container_fluid">
        <div class="farm_to_table_container">
            <div class="upper_farm_to_table_container">
                <div class="farm_to_table_title_container">
                    <h4>FARM TO TABLE</h4>
                    <p>Aliquam erat voluptat. Ut quis ligula magna blandit finibus. Sunspendisse maximus lacus non nunc lacinia lobortis.</p>
                </div>
                <div class="button_container">
                    <button type="button">READ OUR BLOG <i class="fa fa-archive" aria-hidden="true"></i></button>
                </div>
            </div>
            <div class="bottom_farm_to_table_container">
                <div class="left_bottom_farm_to_table_container">
                    <div class="farm_to_table_card">
                        <img :src="selectedArticle.imageUrl" alt="">
                        <div class="farm_to_table_card_text_container">
                            <h5>{{ selectedArticle.title }}</h5>
                            <span>{{ selectedArticle.info }}</span>
                            <p>
                                {{ selectedArticle.text }}
                            </p>
                            <button type="button">LEARN MORE</button>
                        </div>
                    </div>
                    
                    <div class="article_card_container">
                        <div class="article_card" v-for="(article, i) in articlesList" :key="'farm_article' + i">
                            <div class="image_container">
                                <img :src="article.imageUrl" alt="">
                            </div>
                            <h5>{{ article.title }}</h5>
                            <p>{{ article.info }}</p>
                        </div>
                    </div>
                </div>
                <div class="right_bottom_farm_to_table_container">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FarmToTable',
    data () {
        return {
             articlesList: [
                {
                    imageUrl: require('../assets/single-post-img3.jpg'),
                    title: "Food Corner: Top Japanese Restaurants for Sushi",
                    info: "By admin | March 25th, 2019",
                    text: "Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id.",
                },
                {
                    imageUrl: require('../assets/fi-roundup.jpg'),
                    title: "Roundup: My New Favourite Recipes For Healthy Living",
                    info: "By admin | March 25th, 2019",
                    text: "Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id.",
                },
                {
                    imageUrl: require('../assets/fi-toasts.jpg'),
                    title: "Why These Toasts with Tea are My New Favourite",
                    info: "By admin | March 25th, 2019",
                    text: "Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id.",
                },
                {
                    imageUrl: require('../assets/fi-toasts.jpg'),
                    title: "Why These Toasts with Tea are My New Favourite",
                    info: "By admin | March 25th, 2019",
                    text: "Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id.",
                },
                {
                    imageUrl: require('../assets/fi-toasts.jpg'),
                    title: "Why These Toasts with Tea are My New Favourite",
                    info: "By admin | March 25th, 2019",
                    text: "Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id.",
                },
                {
                    imageUrl: require('../assets/fi-toasts.jpg'),
                    title: "Why These Toasts with Tea are My New Favourite",
                    info: "By admin | March 25th, 2019",
                    text: "Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id.",
                },
                {
                    imageUrl: require('../assets/fi-toasts.jpg'),
                    title: "Why These Toasts with Tea are My New Favourite",
                    info: "By admin | March 25th, 2019",
                    text: "Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id.",
                },
                {
                    imageUrl: require('../assets/fi-toasts.jpg'),
                    title: "Why These Toasts with Tea are My New Favourite",
                    info: "By admin | March 25th, 2019",
                    text: "Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id.",
                }
            ],
            selectedArticle: {
                imageUrl: require('../assets/single-post-img3.jpg'),
                title: "Food Corner: Top Japanese Restaurants for Sushi",
                info: "By admin | March 25th, 2019",
                text: "Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id.",
            },
        }
    }
}
</script>

<style>

</style>