<template>
    <div class="page_container">
        <h1 id="page_insight">Design is not only about putting stuff in—but it is also about leaving stuff out.</h1>
        <div class="images_cont">
            <div>
                <gallery :images="images" :index="index" @close="index = null"></gallery>
                <div
                    class="image"
                    v-for="(image, imageIndex) in images"
                    :key="imageIndex"
                    @click="index = imageIndex"
                    :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
import VueGallery from 'vue-gallery'

export default {

    data() {
        return {
            images: [
                'https://dummyimage.com/800/ffffff/000000',
                'https://dummyimage.com/1600/ffffff/000000',
                'https://dummyimage.com/1280/000000/ffffff',
                'https://dummyimage.com/400/000000/ffffff',
            ],
            index: null
        }
    },

    components: {
      'gallery': VueGallery
    },

    mounted() {
     
    },
    head () {
        return {
            title: 'Gallery ∙ MM',
            meta: [
                { 
                    hid: 'Miikka Mäkelä gallery',
                    name: 'Gallery page for designs',
                    content: 'Showcasing my design expertise.'
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
        margin-top: 4em;
    }
}

#page_insight {
    color: white;
    width: 600px;
    text-align: center;
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