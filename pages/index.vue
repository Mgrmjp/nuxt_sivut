<template>
    <div class="index_container">
        <p class="self_intro">
          Miikka Mäkelä is a front-end developer 👓, graphic designer 💻 and much more.
          This portfolio site was created with <a id="nuxt_link" href="https://nuxtjs.org/">Nuxt.js</a> and brought online with 
          GitHub Pages and Netlify. My goal is to grow so I can be of use to others and create. 🌟
        </p>
        <h2 class="quote">"Learn More, Know Less" ~ Neil Strauss</h2>
        <h1 class="large_header">VARYING LEVELS OF USAGE <br /> WITH THESE</h1>
        <div class="skills">
          <div class="skill_box">
            <div class="skill_wrapper">
            <h1 class="skill_header">FRONT-END</h1>

            <SkillContainer skill="Vue + Native" iconPath="vue.png" />
            <SkillContainer skill="React + Native" iconPath="react.png" />
            <SkillContainer skill="HTML5" iconPath="html5.png" />
            <SkillContainer skill="CSS" iconPath="css.png" />
            </div>
          </div>
          <div class="skill_box">
            <div class="skill_wrapper">
            <h1 class="skill_header">DESIGN</h1>

            <SkillContainer skill="Affinity" iconPath="affinity.png" />
            <SkillContainer skill="Adobe" iconPath="adobe.png" />
            <SkillContainer skill="Blender" iconPath="blender.png" />
            </div>
          </div>
          <div class="skill_box">
            <div class="skill_wrapper">
            <h1 class="skill_header">BACK-END</h1>

            <SkillContainer skill="Nodejs" iconPath="node.png" />
            <SkillContainer skill="MongoDB" iconPath="mongo.png" />
            <SkillContainer skill="MySQL" iconPath="mysql.png" />
            <SkillContainer skill="PHP" iconPath="php.png" />
            </div>
          </div>
          <div class="skill_box">
            <div class="skill_wrapper">
            <h1 class="skill_header">OTHER</h1>

            <SkillContainer skill="Wordpress" iconPath="wordpress.png" />
            <SkillContainer skill="Linux env" iconPath="terminal.png" />
            <SkillContainer skill="Git" iconPath="git.png" />
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import SkillContainer from "../components/SkillContainer.vue"

export default {
  components: {
    SkillContainer
  },
  head () {
    const d = new Date();
    let year = d.getFullYear();
    return {
      title: 'Miikka Mäkelä ∙ ' + year,
      meta: [
        { 
          hid: 'Miikka Mäkelä portfolio',
          name: 'Miikka Mäkelä portfolio landing page', 
          content: 'Miikka Mäkelä is a mainly a web developer with skills in design and UX.'
        }
      ]
    }
  }
}

</script>

<style lang="scss">

.index_container {
  display: flex;
  justify-items: center;
  flex-direction: column;
}

.self_intro {
  margin-top: 2em;
  color: white;
  text-align: left;
  width: 70%;
  align-self: center;
  font-size: 1.1em;
  margin-bottom: 2em;
}

#nuxt_link {
  color: #00c58e;
  font-weight: bold;
  letter-spacing: 1px;
}

#nuxt_link:hover {
  color: #0a7c5c;
  font-weight: bold;
  letter-spacing: 1px;
}

.large_header {
  font-size: 2em;
  font-weight: 900;
  color: rgb(253, 253, 253);
  text-align: center;
  text-shadow: 0px 0px 4px rgb(253, 253, 253);
  margin-bottom: 32px;
  line-height: 1;
  animation: textfloat 4s infinite ease-in-out;
}

.quote {
  font-size: 1.2em;
  color: white;
  font-style: italic;
  margin-bottom: 2em;
  padding: 16px;
}

.skills {
  color: white;
  text-align: left;
  font-size: 1.4em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 56px;
}

.skill_box {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-basis: 100%;
  padding: 0 40px;
  margin-bottom: 24px;

  @include md {
    justify-content: space-around;
    flex-basis: 50%;
    padding: 0;
  }

  .skill_wrapper {
    width: 200px;
    @include lg {
      justify-content: space-between;
    }
  }
}

.skill_header {
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 1px;
  text-align: center;
  margin-top: 32px;
  font-style: italic;

  @include md {
    text-align: left;
    margin-top: 0px;
  }
}

@keyframes textfloat {
  0% {
    transform: translateY(0);
  }

  25% {
    transform: translateY(4px);
  }

  100% {
    transform: translateY(0);
  }
}

</style>
