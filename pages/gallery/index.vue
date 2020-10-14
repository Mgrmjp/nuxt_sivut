<template>
    <div class="page_container">
        <div class="images_cont">
            <img class="image" v-for="(image, i) in images" :src="image" :key="i" @click="index = i" />
        </div>
        <client-only placeholder="loading...">
        <VueGallerySlideshow :images="images" :index="index" @close="index = null" />
        </client-only>
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
            require('../../assets/img/havu_avi.jpg'),
            require('../../assets/img/voo_avi.jpg'),
            require('../../assets/img/worlds_ingame.jpg'),
            require('../../assets/img/worlds_champselect.jpg')
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
                { hid: 'Personal portfolio', name: 'Personal portfolio', content: 'Miikka Mäkelä is a developer companied with solid skills in design.' }
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

.images_cont {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100vw;
}

.image {
    max-width: 300px;
    cursor: pointer;
    object-fit: cover;
    box-shadow: 0px 5px 5px rgba(29, 29, 29, 0.479);
    object-position: top;
    flex: 0 50%;
    margin: 2em;
}

</style>