<template>
    <div class="page_container">
        <div class="list_container" v-for="(hat, index) in hats" :key="index">
            <h2 class="hats_title">{{hat.title}}</h2>
            <ul>
                <li v-if="hat.bullet1"><i class="icon-mgr-logo bullet_icon" />{{hat.bullet1}}</li>
                <li v-if="hat.bullet2"><i class="icon-mgr-logo bullet_icon" />{{hat.bullet2}}</li>
                <li v-if="hat.bullet3"><i class="icon-mgr-logo bullet_icon" />{{hat.bullet3}}</li>
                <li v-if="hat.bullet4"><i class="icon-mgr-logo bullet_icon" />{{hat.bullet4}}</li>
                <li v-if="hat.bullet5"><i class="icon-mgr-logo bullet_icon" />{{hat.bullet5}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        hats: {
            Type: Array
        }
    }
}
</script>

<style scoped>

.page_container {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-bottom: 10em;
    align-items: center;
}

.list_container {
    text-align: left;
    width: 35vw;
    margin-bottom: 1.5em;
}

.hats_title {
    color: white;
    font-size: 1.5em;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 24px;
}

.bullet_icon {
    color: rgb(68, 15, 15);
    font-size: 24px;
    margin-top: 8px;
    margin-right: -8px;
}

li {
    display: flex;
    color: white;
    font-size: 1.1em;
    margin-top: 8px;
    margin-bottom: 8px;
    font-weight: 300;
}

@media only screen and (max-width: 910px) {
    .list_container {
        width: 75vw;
    }
}

</style>