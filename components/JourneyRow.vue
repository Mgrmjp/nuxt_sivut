<template>
    <div class="journey_row">
        <div class="circle_container">
            <span class="circle"></span>
        </div>
        <div class="info">
            <h3 class="year_header">{{ year }}</h3>
            <h4 class="season_text">{{ season }}</h4>
            <p class="desc_style">{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        year: {
            type: String
        },
        description: {
            type: String
        },
        season: {
            type: String
        }
    }
}
</script>

<style scoped>

.circle_container {
    display: flex;
}

.journey_row {
    display: flex;
    flex: 1;
    margin-top: -8px;
    margin-bottom: 60px
}

.info {
    color: white;
    margin-left: 16px;
}

.year_header {
    font-weight: 600;
    display: inline;
}

.season_text {
    font-size: 0.8em;
    color: white;
    font-style: italic;
    display: inline;
}

.circle {
    height: 16px;  
    width: 16px;
    background-color: white;
    border-radius: 8px;
    align-self: flex-start;
    margin: 4px;
    margin-left: -9px;
}

.desc_style {
    display: flex;
}

</style>