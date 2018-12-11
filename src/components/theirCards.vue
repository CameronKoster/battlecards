<template>
  <div class="theirCards col-12 d-flex" v-if="game.opponent">
    <div v-for="card in game.opponent.hand">

      <div @click="theirCard()" v-if="card.visible" class="card bg-light mb-3" style="max-width: 20rem;">
        <div class="card-body">


          <img :src="card.img" height="150" width="150">

          <h4 class="card-title">{{card.name}}</h4>
          <h5>ATK: {{card.attack}}</h5>
          <h5>DEF: {{card.defense}}</h5>
          <h5>HEALTH: {{card.health}}</h5>
        </div>
      </div>
      <div @click="theirCard()" v-else-if="!card.visible" class="card bg-light mb-3" style="max-width: 20rem;">
        <img src="../assets/robot-cards.jpg" height="250" width="150">
      </div>
    </div>
  </div>
</template>




<script>
  export default {
    name: 'theirCards',
    data() {
      return {

      }
    },
    components: {

    },
    computed: {
      game() {
        return this.$store.state.game
      }
      //theirCard
    },
    mounted() {

    },
    methods: {
      //pickTheirCard
    }
  }

</script>

<style>


</style>