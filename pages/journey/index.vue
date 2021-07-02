<template>
    <div class="page_container">
        <div class="age_cont">
            <h1 class="age_style">{{ currentAge }}</h1>
            <h2 class="birthdate_text">years old</h2>
        </div>

        <h2 class="quote">"I wish everyone could get rich and famous and everything they ever 
        dreamed of so they can see that's not the answer." ~ Jim Carrey</h2>

        <div class="email_and_cv">
        <h3 class="email_text">Reach me <i class="icon-mgr-logo bullet_icon" /> miikka.mla[at]gmail.com</h3>

        <div class="links_to_pages">
            <a class="page_linky" href="https://instagram.com/mgrutkast">Instagram</a>
            <a class="page_linky" href="https://github.com/mgrmjp">Github</a>
        </div>

        <a class="cv_link" href="/makela_miikka_cv_2021.pdf">
            <h2 class="cv_text">Click here to read <strong class="boldy">Finnish CV</strong> (pdf)</h2>
            <country-flag class="flaggy" country='fi' size='normal'/>
        </a>

        <a class="cv_link" href="/makela_miikka_cv_2021_english.pdf">
            <h2 class="cv_text">Click here to read <strong class="boldy">English CV</strong> (pdf)</h2>
            <country-flag class="flaggy" country='gb' size='normal'/>
        </a>

        </div>

        <div class="border_test">
            <JourneyRow year="2010" description="Got interested in graphic design and made my first creations for a CoD MW2 clan I was a part of. 
            Mainly old school YouTube background banners and profile pictures for Steam." />
            <div class="filler"></div>
            <JourneyRow year="2015" description="Graduated high school and had no idea where I would end up.
            Knew I wanted to design and hone my skills" />
            <div class="filler"></div>
            <JourneyRow year="2015 - 2016" description="Served a 6 month military service in Niinisalo." />
            <JourneyRow year="2016" season="Fall" description="Started media engineering (ICT) studies at Jyväskylä University of Applied Sciences." />
            <div class="filler"></div>
            <JourneyRow year="2019" season="Fall" description="Began internship at indie game dev company Zaibatsu Interactive Oy. 
            Worked in graphic design and programming duties. Made game objects, fleshed out game concept ideas, created user interfaces and worked
            with JavaScript, Vue, React and TypeScript. Also tested a bunch of games, gave feedback and looked for bugs." />
            <div class="filler"></div>
            <JourneyRow year="2020" season="Spring" description="Finished internship at Zaibatsu with valuable experiences gained.
            Improved massively at JS concepts, learned TypeScript, grasped OOP better and grew as a 3D-modeller. I value the fact I got to
            try on so many different types of hats and give my best shot at different types of work." />
            <div class="filler"></div>
            <JourneyRow year="2020" season="Summer" description="Graduated from Jyväskylä University of Applied Sciences as a media engineer. My dad passed away suddenly and
            life got confusing and shaken up. Meditated and read books to get perspective.
            I learned to value honesty and being more open." />
            <div class="filler"></div>
            <JourneyRow year="2021" season="Spring" description="Started work at Into-Digital doing web development with WordPress." />
            <div class="filler"></div>
            <JourneyRow year="2021" season="Summer" description="Self-improvement in good flow and reading as well as inquiry into the self bringing clarity into life.
            Grasping more about being a developer working in a team." />
        </div>
    </div>
</template>

<script>
import JourneyRow from '@/components/JourneyRow'
import CountryFlag from 'vue-country-flag'

export default {
    data() {
        return {
            currentAge: 0
        }
    },

    components: {
        JourneyRow,
        CountryFlag
    },

    head () {
        return {
            title: 'Journey ∙ MM',
            meta: [
                { 
                    hid: 'Miikka Mäkelä journey so far',
                    name: 'Opening the journey up until to this day',
                    content: 'Giving an overview about key areas of growth and accomplishments.'
                }
            ]
        }
    },

    mounted() {
        let currentDate = new Date()

        let age = currentDate.getMonth() > 8 ? currentDate.getFullYear() - 1996 : currentDate.getFullYear() - 1997

        this.currentAge = age
    }
}
</script>

<style lang="scss" scoped>

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

.quote {
  font-size: 1em;
  color: white;
  font-style: italic;
  margin-bottom: 4em;
  width: 90%;
  align-self: center;
}

.email_and_cv {
    display: flex;
    flex: 1;
    flex-direction: column;
}

.email_text {
    text-align: left;
    align-self: center;
    display: flex;
    flex: 1;
    margin-bottom: 2em;
    color: rgba(253, 253, 253, 0.938);
    font-weight: 100;
    font-size: 1em;
    letter-spacing: 1px;
}

.links_to_pages {
    color: white;
    text-align: center;
    font-size: 1.3em;
    margin-bottom: 1em;
}

.page_linky {
    margin: 1em;
    letter-spacing: 1px;
}

.page_linky:hover {
    text-shadow: 0px 0px 4px white;
}

.cv_link {
    display: flex;
    align-self: center; 
    border: 1px solid white;
    margin: 2em;
    padding: 0 16px;
}

.cv_link:hover {
    background-color: rgba(75, 18, 18, 0.787);
}

.boldy {
    margin-left: 12px;
    margin-right: 12px;
}

.flaggy {
    align-self: center;
}

.cv_text {
    display: flex;
    text-align: left;
    color: rgba(253, 253, 253, 1);
    font-weight: 400;
    font-size: 1.1em;
    letter-spacing: 1px;
    flex-direction: row;
    padding: 0.8em;
    align-self: center;
}

.border_test {
    width: 70vw;
    border-left: rgb(253, 253, 253) 2px solid;
    align-self: center;
    margin-top: 5em;

    @include sm {
        width: 50vw;
    }

    @include lg {
        width: 30vw;
    }
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
        font-weight: 500;
        font-size: 1.2em;
    }
}

</style>