<template>
    <div class="container-fluid recipes_container_fluid">
        <!-- <div class="container d-flex justify-content-center h-100"> -->
            <div class="recipes_container">
                <div class="recipe_title_container">
                    <h4>POPULAR RECIPES</h4>
                    <p>Aliquam erat voluptat. Ut quis ligula magna blandit finibus. Sunspendisse maximus lacus non nunc lacinia lobortis.</p>
                </div>

                <div class="container recipe_cards_container">
                    <div class="recipe_card">
                        <img :src="selectedRecipe.poster" alt="">
                        <div class="recipe_card_text_container">
                            <h5>{{ selectedRecipe.title }}</h5>
                            <span>{{ selectedRecipe.subtitle }}</span>
                            <p>
                                {{ selectedRecipe.text }}
                            </p>
                            <button type="button">LEARN MORE</button>
                        </div>
                    </div>

                    <div class="recipe_posters_container">
                        <img :src="recipe.poster" alt="" v-for="(recipe, i) in recipesList" :key="'recipe' + i">
                    </div>
                </div>
            </div>
        <!-- </div> -->
    </div>
</template>

<script>
export default {
    name: 'Recipes',
    data() {
        return {
            recipesList: [
                {
                    poster: require('../assets/Yogurt-Nan.jpg'),
                    title: "Lunch Favourite with Salad, Naan and Beans",
                    subtitle: "Bakery, Featured, Healthy, Latest recipes, Staff Picks",
                    text: "Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id.",
                },
                {
                    poster: require('../assets/Yogurt-Nan.jpg'),
                    title: "Lunch Favourite with Salad, Naan and Beans",
                    subtitle: "Bakery, Featured, Healthy, Latest recipes, Staff Picks",
                    text: "Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id.",
                },
                {
                    poster: require('../assets/Yogurt-Nan.jpg'),
                    title: "Lunch Favourite with Salad, Naan and Beans",
                    subtitle: "Bakery, Featured, Healthy, Latest recipes, Staff Picks",
                    text: "Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id.",
                },
                {
                    poster: require('../assets/Yogurt-Nan.jpg'),
                    title: "Lunch Favourite with Salad, Naan and Beans",
                    subtitle: "Bakery, Featured, Healthy, Latest recipes, Staff Picks",
                    text: "Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id.",
                },
                {
                    poster: require('../assets/Yogurt-Nan.jpg'),
                    title: "Lunch Favourite with Salad, Naan and Beans",
                    subtitle: "Bakery, Featured, Healthy, Latest recipes, Staff Picks",
                    text: "Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id.",
                },
                {
                    poster: require('../assets/Yogurt-Nan.jpg'),
                    title: "Lunch Favourite with Salad, Naan and Beans",
                    subtitle: "Bakery, Featured, Healthy, Latest recipes, Staff Picks",
                    text: "Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id.",
                },
                {
                    poster: require('../assets/Yogurt-Nan.jpg'),
                    title: "Lunch Favourite with Salad, Naan and Beans",
                    subtitle: "Bakery, Featured, Healthy, Latest recipes, Staff Picks",
                    text: "Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id.",
                },
                {
                    poster: require('../assets/Yogurt-Nan.jpg'),
                    title: "Lunch Favourite with Salad, Naan and Beans",
                    subtitle: "Bakery, Featured, Healthy, Latest recipes, Staff Picks",
                    text: "Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id.",
                },
            ],
            selectedRecipe: {
                poster: require('../assets/Yogurt-Nan.jpg'),
                title: "Lunch Favourite with Salad, Naan and Beans",
                subtitle: "Bakery, Featured, Healthy, Latest recipes, Staff Picks",
                text: "Suspendisse at semper odio. Nam fringilia scelerisque tincidunt. Orci varius natoque penattibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odi non feugiat sollicitudin. Integer vitae elementum ex. Sed portitor, diam eget convallis voluptat, arcu tellus facilisis nulla, id dignissim oro leo id.",
            },
        }
    }
}
</script>

<style>

</style>