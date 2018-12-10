<template>
  <div class="theirCards col-12 d-flex">
    <div v-for="card in game.opponent.hand">
      <!-- <v-if="opponent.visible" class="hideCards"> -->
      <div @click="theirCard()" class="card bg-light mb-3" style="max-width: 20rem;">
        <div class="card-body">


          <img :src="card.img" height="150" width="150"><!-- v-if="theirCard.visible" -->
          <!-- <img :src="https://www.bgdf.com/sites/default/files/images/AAAADEnelREAAAAAAM6-JASMALL.preview.jpg" height="250"
            width="150" v-else-if="!theirCard.visible"> -->

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