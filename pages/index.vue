<template>
    <div>
        <h1 class="large_header">THINGS I KNOW</h1>
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
        <h1 class="large_header bottom">FOR NOW</h1>
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
        { hid: 'Personal portfolio', name: 'Personal portfolio', content: 'Miikka Mäkelä is a programmer with skills in design as well.' }
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

.large_header {
  font-size: 2.6em;
  font-weight: 900;
  color: rgba(216, 216, 216, 0.788);
  text-align: center;
  margin-top: 112px;
  margin-bottom: 48px;
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

.bottom {
  margin-top: 56px;
  margin-bottom: 64px;
  opacity: 60%;
}

</style>
