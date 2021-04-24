<template>
    <div class="container">
      
      <Navigation />

      <MobileNav v-show="isModalVisible" @close="closeModal" />
      
      <div class="outer_red">
        <div class="inner_red">
          <div class="mobile-btn-container">
            <button @click="showModal" class="show-mobile-nav">
              <span style="font-size: 48px;" class="material-icons-outlined">menu</span>
            </button>
          </div>
          <nuxt />
        </div>
      </div> 
    </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import MobileNav from '@/components/MobileNav'

export default {

  data() {
      return {
          activeClass: 'active',
          isModalVisible: false
      }
  },

  methods: {
     showModal() {
       this.isModalVisible = true;
       document.body.classList.add("nav-open");
     },
     closeModal() {
       this.isModalVisible = false;
       document.body.classList.remove("nav-open");
     }
  },
  
  components: {
    MobileNav,
    Navigation
  },
  
}
</script>

<style lang="scss">

html {
  font-family: 'Red Hat Display', sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: rgb(22, 22, 22);
  overflow-x: hidden;
}

.nav-open {
  overflow: hidden;
}

::-moz-selection { /* Code for Firefox */
  color: rgb(250, 250, 250);
  background: rgb(75, 21, 21);;
}

::selection {
  color: rgb(250, 250, 250);
  background: rgb(75, 21, 21);;
}

.mobile-btn-container {
  display: flex;
  justify-content: flex-end;

  .show-mobile-nav {
    color: white;
    margin: 16px;
    margin-top: 32px;
  }
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

@media screen and (max-width: 1050px) {

  .outer_red {
    width: 90vw;
  }

  .inner_red {
    max-width: 80vw;
  }

}

</style>
