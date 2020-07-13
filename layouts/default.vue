<template>
    <div class="container">
      
      <Navigation />

      <MobileNav />
      
      <div class="outer_red">
        <div class="inner_red">
          <nuxt />
        </div>
      </div>
      <Gradient />
    </div>
</template>

<script>
import Gradient from '@/components/Gradient'
import Navigation from '@/components/Navigation'
import MobileNav from '@/components/MobileNav'

export default {

  components: {
    Gradient,
    MobileNav,
    Navigation
  },
  
}
</script>

<style>

html {
  font-family: 'Red Hat Display', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

::-moz-selection { /* Code for Firefox */
  color: rgb(180, 180, 180);
  background: rgb(75, 21, 21);;
}

::selection {
  color: rgb(180, 180, 180);
  background: rgb(75, 21, 21);;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  background-color: rgb(22, 22, 22);
  align-items: center;
  position: relative;
}

.outer_red {
  display: flex;
  flex: 1;
  min-height: 100vh;
  background-color: rgba(75, 21, 21, 0.692);
  justify-content: center;
  width: 65vw;
}

.inner_red {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 100vh;
  max-width: 50vw;
  background-color: rgba(126, 28, 28, 0.787);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: rgb(22, 22, 22);
}

@media screen and (max-width: 1050px) {

  .outer_red {
    width: 90vw;
  }

  .inner_red {
    max-width: 80vw;
  }

}

@media screen and (max-width: 620px) {

  .inner_red {
    padding-top: 12em;
  }

}

</style>
