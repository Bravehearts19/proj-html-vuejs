<template>
    <footer>
        <div class="container">
            <div class="d-flex w-100 justify-content-center py-5">
                <div class="logo_and_social_container">
                    <img src="@/assets/avada-food-logo-mob-2x.png" alt="">
                    <ul>
                        <li v-for="(footerIcon, i) in socialIconClassesList" :key="'footerIcon' + i">
                            <a href="#">
                                <i class="fa " :class="footerIcon" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="footer_links_container">
                    <ul>
                        <li v-for="(link, i) in footerLinksList" :key="'link' + i">
                            <a href="#">{{ link }}</a>
                        </li>
                    </ul>
                </div>
                <div class="contact_container">
                    <h4>Contact</h4>
                    <ul>
                        <li v-for="(contact, i) in contactsList" :key="'contact' + i" class="d-flex">
                            <div>
                                <i class="fa " aria-hidden="true" :class="contact.icon"></i>
                            </div>
                            <span>
                                {{ contact.text }}
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="get_your_app_container">
                    <h4>Get your app!</h4>
                    <a href="">
                        <img src="@/assets/download-android.png" alt="">
                    </a>
                    <a href="">
                        <img src="@/assets/download-app-store.png" alt="">
                    </a>
                    
                </div>
            </div>
        </div>
        <div class="container-fluid d-flex position-relative justify-content-center ">
            <a href="#">
                <i class="fa fa-chevron-circle-up" aria-hidden="true"></i>
            </a>
            <span>© Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All rights reserved | Powered by Wordpress</span>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        socialIconClassesList: Array,
    },
    data() {
        return {
            footerLinksList: [
                "Recipes",
                "Places",
                "Blog",
                "About",
                "Contact"
            ],
            contactsList: [
                {
                    icon: "fa-map-marker",
                    text: "775 New York Ave, Brooklyn, Kings, New York 11203"
                },
                {
                    icon: "fa-phone",
                    text: "+ 0100-505-0000"
                },
                {
                    icon: "fa-envelope",
                    text: "info@your-domain.com"
                }
            ],
        }
    }
}
</script>

<style>

</style>