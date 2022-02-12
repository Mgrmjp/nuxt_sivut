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
  font-family: 'Hind Siliguri', sans-serif;
  font-size: 16px;
  box-sizing: border-box;
}

body {
  background-color: rgb(22, 22, 22);
  overflow-x: hidden;
}

a {
  transition: all 0.1s ease-in-out;
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
  position: relative;
  z-index: 0;
  display: flex;
  flex: 1;
  min-height: 100vh;
  background-color: rgba(75, 21, 21, 0.692);
  background: linear-gradient(rgba(75, 21, 21, 0.692) 0%, rgba(75, 21, 21, 0) 1000px);
  justify-content: center;
  width: 65vw;

  &:before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    border-top: 1000px solid #161616;
    border-right: 120px solid transparent;
    transform: scaleY(-1);
  }

  &:after {
    position: absolute;
    content: '';
    right: 0;
    top: 0;
    width: 0;
    height: 0;
    border-top: 1000px solid #161616;
    border-left: 120px solid transparent;
    transform: scaleY(-1);
  }
}

$innertriangesize: 40px;

.inner_red {
  position: relative;
  z-index: 1;
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 100vh;
  max-width: 50vw;
  background-color: rgba(126, 28, 28, 0.787);

  &:before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-top: $innertriangesize solid #161616;
    border-right: $innertriangesize solid transparent;
    transform: scaleY(-1);
  }

  &:after {
    position: absolute;
    content: '';
    right: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-top: $innertriangesize solid #161616;
    border-left: $innertriangesize solid transparent;
    transform: scaleY(-1);
  }
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
