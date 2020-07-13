<template>
    <div class="skill_container">
        <div class="image_container">
            <img class="tech_logo" :src="require(`@/assets/logos/${iconPath}`)" />
        </div>
        <h2 class="skill_title">{{ skill }}</h2>
    </div>
</template>

<script>

export default {
    props: {
        skill: {
            type: String
        },
        iconPath: {
            type: String
        }
    },
}

</script>

<style scoped>

.skill_container {
    display: flex;
    flex: 1;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 8px;
}

.image_container {
    display: flex;
    width: 64px;
    height: 64px;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
}

.skill_title {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    font-weight: 400;
}

.tech_logo {
    display: block;
    max-height: 32px;
    width: auto;
    height: auto;
    align-self: center;
}


</style>