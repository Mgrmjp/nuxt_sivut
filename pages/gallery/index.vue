<template>
    <div class="page_container">

        <h1 id="page_insight">I heard somewhere that design is not only about putting stuff in—but it is also about leaving stuff out.
            That has become my design philosophy quite heavily; as I look and ponder about that very idea when thinking about solutions.</h1>

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
                require('../../assets/img/summoning_insight_redesign.jpg'),
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
            title: 'Gallery ∙ MM',
            htmlAttrs: {
              lang: 'en'
            },
            meta: [
                { 
                    hid: 'Miikka Mäkelä gallery',
                    name: 'Gallery page for designs',
                    content: 'Showcasing my design expertise.',
                    charset: 'utf-8'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

.page_container {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 6em;

    @include md {
        margin-top: 10em;
    }
}

#page_insight {
    color: white;
    width: 600px;
    text-align: left;
    margin-bottom: 2em;
    font-size: 1.2em;
    padding: 40px;

    @include md {
        padding: 0px;
    }
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