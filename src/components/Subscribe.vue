<template>
    <div class="subscribe_container">
        <div class="container text-center">
            <h3>Subscribe &amp; Receive A Free eBook</h3>
            <p>Aliquam erat voluptat. Ut quis ligula a magna blandit finibus. Suspendisse maximus locus non nunc lacinia lobortis.</p>

            <div class="mail_subscribtion_container">
                <input type="email" name="" id="" placeholder="Insert your email...*">
                <button type="submit">SUBSCRIBE</button>
            </div>

            <p>Cras porlititur pelleritesque sem eu pretium.</p>
        </div>
        <div>
            <img :src="url" alt="" v-for="(url, i) in imagesUrlList" :key="'subscribtionImageUrl' + i">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Subscribe',
    data() {
        return {
            imagesUrlList: [
                require('../assets/Yogurt-Nan.jpg'),
                require('@/assets/Mixed-fruits.jpg'),
                require('@/assets/r-rachel-park-366508-unsplash-min.jpg'),
                require('@/assets/r-michelle-tsang-500721-unsplash-min.jpg')
            ]
        }
    }
}
</script>

<style>

</style>