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

<style lang="scss" scoped>

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
    position: relative;
    height: 16px;  
    width: 16px;
    background-color: white;
    border-radius: 8px;
    align-self: flex-start;
    margin: 4px;
    margin-left: -9px;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background: transparent;
        border-radius: 50%;
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
        height: 16px;
        width: 16px;
        transform: scale(1) translateX(-3px);
        animation: pulse-white 2s infinite;
    }
}

@keyframes pulse-white {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
	}
	
	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
	}
	
	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
	}
}

.desc_style {
    position: relative;
    display: flex;
    font-weight: 300;
    padding-top: 12px;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 80px;
        height: 1px;
        background: white;;
    }
}

</style>