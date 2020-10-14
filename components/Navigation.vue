<template>
    <nav class="navigation">
    <div class="name_plus_logo">
        <img class="page_logo" src="@/assets/logos/mgr.png" />
        <h3 class="nav_name">Miikka Mäkelä</h3>
    </div>
    <div class="page_links">
        <nuxt-link exact :class="currentPage.length === 1 ? activeClass : ''" class="nav_item" to="/">HOME</nuxt-link>
        <nuxt-link exact :class="currentPage.includes('roles') ? activeClass : ''" class="nav_item" to="/roles">ROLES</nuxt-link>
        <nuxt-link exact :class="currentPage.includes('journey') ? activeClass : ''" class="nav_item" to="/journey">JOURNEY</nuxt-link>
        <nuxt-link exact :class="currentPage.includes('gallery') ? activeClass : ''" class="nav_item" to="/gallery">GALLERY</nuxt-link>
        <nuxt-link exact :class="currentPage.includes('misc') ? activeClass : ''" class="nav_item" to="/misc">MISC</nuxt-link>
    </div>
    <div class="filler">
    </div>
</nav>
</template>

<script>
export default {

    data() {
        return {
            activeClass: 'active'
        }
    },

    computed: {
        currentPage() {
            return this.$route.path;
        }
    }

}
</script>

<style scoped>

.navigation {
    display: none;
}

@media screen and (max-width: 1050px) {
    .navigation {
        flex-direction: column;
    }
}

@media screen and (min-width: 621px) {

    .page_logo {
        width: 32px;
        margin-right: 16px;
        object-fit: contain;
    }

    .active {
        color: white;
        margin: 0 2em 0 2em;
        opacity: 1;
        transition: all 0.25;
        border-bottom: 1px solid white;
    }

    .outer_red {
        margin-top: 5em;
    }

    .navigation {
        display: flex;
        font-size: 1.3em;
        background-color: rgb(26, 26, 26);
        position: absolute;
        top: 0;
        justify-content: space-between;
        min-width: 99vw;
        padding-top: 1em;
        padding-bottom: 1em;
        z-index: 100;
        flex-direction: row;
        box-shadow: 0px 5px 10px rgba(47, 47, 47, 0.466);
    }

    .filler {
        flex: 1;
    }

    .name_plus_logo {
        display: flex;
        flex: 1;
        align-self: center;
        margin-left: 1em;
    }

    .page_links {
        display: flex;
        flex: 1;
        align-self: center;
        justify-self: center;
        text-align: center;
        justify-content: center;
        flex-direction: row;
        letter-spacing: 1px;
    }

    .nav_name {
        color: white;
        font-weight: 500;
        letter-spacing: 1px;
        font-size: 1.2em;
    }

    .nav_item {
        color: white;
        margin: 0 2em 0 2em;
    }

}

</style>
