<template>
    <div class="page_container">
        <div class="age_cont">
            <h1 class="age_style">{{ currentAge }}</h1>
            <h2 class="birthdate_text">years old</h2>
        </div>

        <h3 class="email_text">Reach me <i class="icon-mgr-logo bullet_icon" /> miikka.mla[at]gmail.com</h3>

        <a class="cv_link" href="../../assets/files/cv_2020.pdf"><h2 class="cv_text">Click here to read <strong>CV</strong> (pdf)</h2></a>

        <div class="border_test">
            <JourneyRow year="2015" description="Graduated high school and had no idea where I would end up" />
            <div class="filler"></div>
            <JourneyRow year="2015 - 2016" description="Served a 6 month military service in Niinisalo" />
            <JourneyRow year="2016" season="Fall" description="Started media engineering studies at JAMK" />
            <div class="filler"></div>
            <JourneyRow year="2019" season="Fall" description="Began internship at indie game dev company Zaibatsu Interactive Oy. 
            Worked in graphic design and programming duties." />
            <div class="filler"></div>
            <JourneyRow year="2020" season="Spring" description="Finished internship at Zaibatsu with valuable experiences gained.
            Improved massively at JS concepts, learned TypeScript, grasped OOP better and grew as a 3D-modeller. 
            Graduated from JAMK as a media engineer." />
        </div>
    </div>
</template>

<script>
import JourneyRow from '@/components/JourneyRow'

export default {
    data() {
        return {
            currentAge: 0
        }
    },

    components: {
        JourneyRow
    },

    head () {
        return {
            title: 'Miikka Mäkelä ∙ 2020',
            meta: [
                { hid: 'Personal portfolio', name: 'Personal portfolio', content: 'Miikka Mäkelä is a programmer with skills in design as well.' }
            ]
        }
    },

    mounted() {
        let currentDate = new Date()

        let age = currentDate.getMonth() > 10 ? currentDate.getFullYear() - 1996 : currentDate.getFullYear() - 1997

        this.currentAge = age
    }
}
</script>

<style scoped>

.filler {
    margin-top: 3em;
}

.page_container {
    display: flex;
    margin-top: 7em;
    text-align: left;
    min-width: 30vw;
    justify-content: center;
    flex-direction: column;
}

.age_cont {
    display: flex;
    min-width: 30vw;
    flex-direction: row;
    align-self: center;
    padding-top: 3em;
    padding-bottom: 5em;
}

.age_style {
    color: white;
    font-size: 5em;
    font-weight: 900;
    align-self: flex-end;
    line-height: 0.8em;
}

.birthdate_text {
    color: white;
    font-size: 1em;
    align-self: flex-end;
    margin-left: 1em;
}

.email_text {
    text-align: left;
    align-self: center;
    display: flex;
    flex: 1;
    width: 30vw;
    margin-bottom: 1em;
    color: rgba(253, 253, 253, 0.938);
    font-weight: 100;
    font-size: 1.5em;
    letter-spacing: 1px;
}

.cv_link {
    align-self: center; 
}

.cv_text {
    text-align: left;
    color: rgba(253, 253, 253, 1);
    font-weight: 400;
    font-size: 1.1em;
    width: 30vw;
    letter-spacing: 1px;
    flex-direction: column;
    margin-bottom: 3em;
}

.border_test {
    width: 30vw;
    height: 100vh;
    border-left: rgb(253, 253, 253) 2px solid;
    align-self: center;
}

.bullet_icon {
    color: rgba(75, 21, 21, 0.938);
    font-size: 24px;
    align-self: center;
    margin-left: 8px;
    margin-right: 8px;
}

@media only screen and (max-width: 660px) {
    .age_cont {
        display: flex;
        min-width: 50vw;
        flex-direction: row;
        align-self: center;
        padding-top: 1em;
        padding-bottom: 2em;
    }

    .email_text {
        text-align: center;
        align-self: center;
        width: 70vw;
        margin-bottom: 3em;
        color: rgba(75, 21, 21, 0.938);
        font-weight: 500;
        font-size: 1.2em;
    }
}

</style>