<template>
    <div>
        <h1 class="large_header">HATS I WEAR</h1>
        <h2 class="desc_header">Tackling issues from different angles</h2>
        <HatsContainer :hats="hats" />
    </div>    
</template>

<script>
import HatsContainer from '@/components/HatsContainer';

export default {
    data() {
        return {
            hats: [
            {
                title: 'Co-worker',
                bullet1: 'Being curious and present',
                bullet2: 'Making allies not enemies',
                bullet3: 'Getting results as a group',
                bullet4: 'Helping, asking questions, honest communication',
            },
            {
                title: 'Developer',
                bullet1: 'Avoiding stagnation',
                bullet2: 'Being open to change',
                bullet3: 'Learning by doing',
                bullet4: 'Failure is a teacher',
            },
            {
                title: 'Designer',
                bullet1: 'User focused creating',
                bullet2: 'Eye for small details',
                bullet3: 'Trial and error toward best result',
            },
            {
                title: 'Gamer',
                bullet1: 'Helping others succeed',
                bullet2: 'Growth mindset',
                bullet3: 'Honing fundamentals',
                bullet4: 'Learning from others',
            },
            {
                title: 'Tester',
                bullet1: 'Systematic nature',
                bullet2: 'Problem solving capabilities',
                bullet3: 'Knowledge in development and design',
                bullet4: 'Communicating issues calmly',
            }
            ]
        }
    },
    components: {
        HatsContainer
    },

    head () {
        return {
            title: 'Roles ∙ MM',
            meta: [
                { 
                    hid: 'Miikka Mäkelä roles',
                    name: 'Miikka Mäkelä in different roles', 
                    content: 'Descriping how I am in different points of view'
                }
            ]
    }
  }
    
}
</script>

<style scoped>

.large_header {
  font-size: 3.8em;
  font-weight: 900;
  color: rgba(216, 216, 216, 0.788);
  text-align: center;
  margin-top: 112px;
}

.desc_header {
  font-size: 1.2em;
  font-weight: lighter;
  color: rgb(253, 253, 253);
  text-align: center;
  margin-bottom: 48px;
}

</style>