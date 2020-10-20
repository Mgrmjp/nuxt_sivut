<template>
    <div class="page_container">
        <div class="list_container" v-for="(hat, index) in hats" :key="index">
            <h2 class="hats_title">{{hat.title}}</h2>
            <ul>
                <li><i class="icon-mgr-logo bullet_icon" />{{hat.bullet1}}</li>
                <li><i class="icon-mgr-logo bullet_icon" />{{hat.bullet2}}</li>
                <li><i class="icon-mgr-logo bullet_icon" />{{hat.bullet3}}</li>
                <li v-if="hat.bullet4"><i class="icon-mgr-logo bullet_icon" />{{hat.bullet4}}</li>
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
    margin-bottom: 4em;
}

.hats_title {
    color: white;
    font-size: 2em;
    font-weight: 600;
    letter-spacing: 1px;
}

.bullet_icon {
    color: white;
    font-size: 10px;
    align-self: center;
    margin: 10px;
    line-height: 8px;
}

li {
    display: flex;
    color: white;
    align-items: center;
    font-size: 1.2em;
    margin-top: 8px;
    margin-bottom: 8px;
}

@media only screen and (max-width: 910px) {
    .list_container {
        width: 55vw;
    }
}

</style>