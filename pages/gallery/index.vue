<template>
    <div class="page_container">
        <div class="images_cont">
            <h1 class="header">Some examples of what I am able to produce</h1>
            <img class="image" v-for="(image, i) in images" :src="image" :key="i" @click="index = i" />
        </div>
        <VueGallerySlideshow :images="images" :index="index" @close="index = null" />
    </div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow';

export default {
    data() {
        return {
            images: [
            require('../../assets/img/mindsofmedia.jpg'),
            require('../../assets/img/teo.jpg'),
            require('../../assets/img/counterpoints.jpg'),
            require('../../assets/img/steam.jpg'),
            require('../../assets/img/imperial.jpg'),
            require('../../assets/img/defendix.jpg'),
            require('../../assets/img/havu_avi.jpg')
            ],
            index: null
        }
    },
    components: {
        VueGallerySlideshow
    },
    head () {
        return {
            title: 'Miikka Mäkelä ∙ 2020',
            meta: [
                { hid: 'Personal portfolio', name: 'Personal portfolio', content: 'Miikka Mäkelä is a programmer with skills in design as well.' }
            ]
        }
    }
}
</script>

<style scoped>

.page_container {
    margin-top: 10em;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 6em;
}

.header {
    margin-bottom: 3em;
    color: rgba(253, 253, 253, 0.938);
    font-weight: 100;
    font-size: 1em;
}

.images_cont {
    display: flex;
    width: 400px;
    justify-content: center;
    flex-direction: column;
}

.image {
    flex-wrap: wrap;
    flex-basis: 50%;
    max-height: 200px;
    width: auto;
    height: auto;
    cursor: pointer;
    object-fit: cover;
    box-shadow: 0px 5px 5px rgba(29, 29, 29, 0.479);
    margin: 1em;
    object-position: top;
}

</style>