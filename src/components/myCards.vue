<template>
  <div class="myCards d-flex col-12">
    <div v-for="card in game.player.hand">
      <div @click="myCard(card)" :key="card.id" class="card bg-light mb-3" style="max-width: 20rem;">
        <div class="card-body">
          <img :src="card.img" height="150" width="150">
          <h4 class="card-title">{{card.name}}</h4>
          <h5>ATK: {{card.attack}}</h5>
          <h5>DEF: {{card.defense}}</h5>
          <h5>HEALTH: {{card.health}}</h5>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'myCards',
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
      // myCard return
    },
    mounted() {

    },
    methods: {
      // pickMyCard
    }
  }

</script>

<style>


</style>