<template>
    <div class="page_container">
        <h1 id="page_insight">Design is not only about putting stuff in—but it is also about leaving stuff out.</h1>
        <viewer class="images" :images="images">
            <div v-for="src in images" :key="src" class="image-wrapper">
                <img alt="" :src="require(`~/assets/img/${src}.jpg`)">
            </div>
        </viewer>
    </div>
</template>

<script>
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import Vue from 'vue'

Vue.use(VueViewer)

export default {
    data() {
        return {
            images: [
                "counterpoints",
                "defendix",
                "havu_avi",
                "imperial",
                "mindsofmedia",
                "steam",
                "summoning_insight_redesign",
                "teo",
                "voo_avi",
                "worlds_champselect",
                "worlds_ingame"
            ]
        }
    },
    head () {
        return {
            title: 'Gallery ∙ MM',
            meta: [
                { 
                    hid: 'Miikka Mäkelä gallery',
                    name: 'Gallery page for designs',
                    content: 'Showcasing my designs.'
                }
            ]
        }
    },
    methods: {
      show() {
        this.$viewerApi({
          images: this.images,
        })
      },
    },
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

.images {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .image-wrapper {
        display: flex;
        flex-basis: 40%;
        margin-bottom: 1em;
        box-shadow: 0 4px 24px rgba(10, 10, 10, 0.25);
        max-height: 120px;

        @include md {
            flex-basis: 30%;
        }

        img {
            object-fit: cover;
            cursor: pointer;
        }
    }
}


</style>