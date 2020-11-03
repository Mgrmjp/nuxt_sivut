<template>
    <div class="index_container">
        <p class="self_intro">
          Miikka Mäkelä is a front-end developer 👓, graphic designer 💻 and much more—once you get to know him.
          This portfolio site was created with <a id="nuxt_link" href="https://nuxtjs.org/">Nuxt.js</a> and brought online with 
          GitHub Pages and Netlify. My goal is to one day be good enough so I can help others in their journey through life. 🌟
        </p>
        <h1 class="large_header">THINGS I KNOW</h1>
        <h2 class="quote">"Learn More, Know Less" ~ Neil Strauss</h2>
        <div class="skills">
          <div class="skill_box">

            <h1 class="skill_header">FRONT-END</h1>

            <SkillContainer skill="Vue + Native" iconPath="vue.png" />
            <SkillContainer skill="React + Native" iconPath="react.png" />
            <SkillContainer skill="HTML5" iconPath="html5.png" />
            <SkillContainer skill="CSS" iconPath="css.png" />

          </div>
          <div class="skill_box">

            <h1 class="skill_header">DESIGN</h1>

            <SkillContainer skill="Affinity" iconPath="affinity.png" />
            <SkillContainer skill="Adobe" iconPath="adobe.png" />
            <SkillContainer skill="Blender" iconPath="blender.png" />

          </div>
          <div class="skill_box">

            <h1 class="skill_header">BACK-END</h1>

            <SkillContainer skill="Nodejs" iconPath="node.png" />
            <SkillContainer skill="MongoDB" iconPath="mongo.png" />
            <SkillContainer skill="MySQL" iconPath="mysql.png" />
            <SkillContainer skill="PHP" iconPath="php.png" />

          </div>
          <div class="skill_box">

            <h1 class="skill_header">OTHER</h1>

            <SkillContainer skill="Wordpress" iconPath="wordpress.png" />
            <SkillContainer skill="Linux env" iconPath="terminal.png" />
            <SkillContainer skill="Git" iconPath="git.png" />

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
    return {
      title: 'Miikka Mäkelä ∙ 2020',
      meta: [
        { 
          hid: 'Miikka Mäkelä portfolio',
          name: 'Miikka Mäkelä portfolio landing page', 
          content: 'Miikka Mäkelä is a frontend developer with skills in design as well.'
        }
      ]
    }
  }
}

</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.index_container {
  display: flex;
  justify-items: center;
  flex-direction: column;
}

.self_intro {
  margin-top: 10em;
  color: white;
  text-align: left;
  width: 500px;
  align-self: center;
  font-size: 1.1em;
  margin-bottom: 4em;
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
  font-size: 2.6em;
  font-weight: 900;
  color: rgba(216, 216, 216, 0.788);
  text-align: center;
  margin-bottom: 48px;
}

.quote {
  font-size: 1.2em;
  color: white;
  font-style: italic;
  margin-bottom: 2em;
}

.skills {
  color: white;
  text-align: left;
  font-size: 1.4em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 1.5em;
  padding-right: 1.5em;
}

.skill_box {
  margin: 0.5em;
  padding-left: 3em;
  padding-right: 3em;
  margin-bottom: 2em;
  flex: 1;
  flex-basis: 40%;
}

.skill_header {
  font-weight: 900;
  font-size: 1.2em;
  letter-spacing: 1px;
}

</style>
