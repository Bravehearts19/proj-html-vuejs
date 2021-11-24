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
                            <div class="d-flex">
                                <a href="#">Read more ></a>
                                <a class="ms-auto" href="#"><i class="fa fa-comments-o" aria-hidden="true"></i> 0</a>
                            </div>
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
                    <button type="button">LOAD MORE POSTS</button>
                </div>
                <div class="right_bottom_farm_to_table_container">
                    <div class="view_recipes_container">
                        <h3>VIEW OUR LATEST RECIPES</h3>
                    </div>
                    <div class="city_guides_container">
                        <img :src="require('../assets/singapore-featured-image.jpg')" alt="">
                        <div class="city_guide_info">
                            <h4>City Guide: Singapore</h4>
                        </div>
                        <div class="city_guide_bottom_tag">
                            <p><i class="fa fa-globe" aria-hidden="true"></i> View all city guides</p>
                        </div>
                        <div class="div_with_border"></div>
                    </div>
                    <div class="social_section_container">
                        <input type="text" placeholder="Search...">
                        <h6>Follow Us</h6>
                        <div class="social_icons_container_row">
                            <div class="social_icon_container" v-for="(icon, i) in socialIconClassesList" :key="'socialIcon' + i">
                                <a href="#">
                                    <i class="fa " :class="icon"></i>
                                </a>
                            </div>
                        </div>

                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                            <label class="btn btn-outline-primary" for="btnradio1">Popular</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btnradio2">Recent</label>
                        </div>

                        <div class="mini_article_posts_container">
                            <div class="mini_article_post" v-for="(miniArticle, i) in articlesList" :key="'miniArticle' + i">
                                <div class="image_container">
                                    <img :src="miniArticle.imageUrl" alt="">
                                </div>
                                <div class="mini_article_text_container">
                                    <h6>{{ miniArticle.title }}</h6>
                                    <p>{{ miniArticle.info }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="tweets_container">
                            <div class="title_container">
                                <h5><strong>Tweets</strong> by <a href="#">@Team_Fusion</a></h5>
                                <a class="ms-auto" href="#"><i class="fa fa-info-circle" aria-hidden="true"></i></a>
                            </div>
                            <div class="tweet_post_container">
                                <div class="image_container">
                                    <img src="../assets/3a74ce3d0532b7773b174c45ca3bd05a_bigger.png" alt="">
                                </div>
                                <div class="tweet_post_text_container">
                                    <div class="d-flex align-items-center">
                                        <div>
                                            <h6>Theme Fusion</h6>
                                            <a href="#">@Theme_Fusion</a>
                                        </div>
                                        <a class="ms-auto" href="#"><i class="fa fa-twitter"></i></a>
                                    </div>
                                    <p>
                                        Do you need sublime Wordpress hosting for your next website? Take advantage for exclusive partner offers that we have secured just for you, &amp; launch your site in seconds with <a href="#">#avada</a> on WP Engine hosting &amp; get 30% Off this Black Friday <br>
                                        <a href="#">brt.ly/3lqLLE2</a> <a href="#">#BlackFriday2021</a>
                                    </p>
                                    <div class="image_container">
                                        <img src="../assets/En2TRxLW4AEiWUN.jpeg" alt="">
                                    </div>
                                    <div class="tweet_post_options_container">
                                        <div>
                                            <a href="#"><i class="fa fa-heart-o"></i></a>
                                            <a href="#"><i class="fa fa-sign-out"></i></a>
                                        </div>
                                        <a class="ms-auto" href="#">21 <i class="fa fa-thumbs-o-up"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                    imageUrl: require('../assets/fi-roundup.jpg'),
                    title: "Roundup: My New Favourite Recipes For Healthy Living",
                    info: "By admin | March 25th, 2019",
                    text: "Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id.",
                },
                {
                    imageUrl: require('../assets/fi-korean-food.jpg'),
                    title: "Meal Prep: Korean Bibimbap with Kimchi",
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
                    imageUrl: require('../assets/fi-street-food.jpg'),
                    title: "Exploring Street Food in Bangkok",
                    info: "By admin | March 25th, 2019",
                    text: "Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id.",
                },
                {
                    imageUrl: require('../assets/fi-organic-breakfast.jpg'),
                    title: "Organic Choices For Healthier Living",
                    info: "By admin | March 25th, 2019",
                    text: "Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id.",
                },
                {
                    imageUrl: require('../assets/fi-water-side-rest.jpg'),
                    title: "5 Waterside Restaurants in Instanbul for Special Events",
                    info: "By admin | March 25th, 2019",
                    text: "Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id.",
                },
            ],
            selectedArticle: {
                imageUrl: require('../assets/single-post-img3.jpg'),
                title: "Food Corner: Top Japanese Restaurants for Sushi",
                info: "By admin | March 25th, 2019",
                text: "Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id.",
            },
            socialIconClassesList: [
                "fa-facebook",
                "fa-instagram",
                "fa-twitter",
                "fa-youtube-play",
                "fa-pinterest"
            ],
        }
    }
}
</script>

<style>

</style>