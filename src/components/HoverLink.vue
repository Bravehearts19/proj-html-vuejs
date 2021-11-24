<template>
    <div class="overlay">
        <div class="icon_container">
            <i class="fa fa-link" aria-hidden="true"></i>
        </div>
        <h5>{{ title }}</h5>
    </div>
</template>

<script>
export default {
    name: 'HoverLink',
    props: {
        title: String,
    }
}
</script>

<style>

</style>