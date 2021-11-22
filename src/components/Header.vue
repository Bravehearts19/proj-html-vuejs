<template>
    <header class="container">
        <div class="d-flex">
           <ul>
                <li>
                    <a href="#">Download App</a> 
                    <button type="button">iOS</button>
                </li>
                <li>
                    <a href="#">Advertise with us</a>
                </li>
           </ul>
            <ul class="ms-auto">
                <li v-for="(icon, i) in socialIconClassesList" :key="'icon' + i">
                    <a href="#">
                        <i class="fa " :class="icon" aria-hidden="true"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="text-center">
            <img src="@/assets/avada-food-logo.png" alt="">
        </div>
        <div class="d-flex justify-content-center mt-3">
            <ul>
                <li v-for="(navbarLink, i) in navbarLinksList" :key="'navbarLink' + i">
                    <a href="#" :class="i === currentNavbarLinkId ? 'active' : ''">{{ navbarLink }}</a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        socialIconClassesList: Array,
    },
    data() {
        return {
            navbarLinksList: [
                "Home",
                "Recipes",
                "Places",
                "Blog",
                "About",
                "Contact"
            ],
            currentNavbarLinkId: 0,
        }
    },
    computed: {

    }
}
</script>

<style>

</style>