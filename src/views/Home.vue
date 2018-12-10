<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>Battle Cardz</h1>
      </div>
    </div>
    <div class="row">
      <button type="button" @click="startGame" class="btn btn-outline-primary">Start Game</button>
    </div>
  </div>
</template>
<script>



  export default {
    name: 'home',
    data() {
      return {
        gameConfig: {
          playerName: "",
          set: ""
        }
      }
    },
    components: {

    },
    computed: {
      //game
    },
    mounted() {

    },
    methods: {
      startGame() {
        this.$store.dispatch("startGame")
      }
    }
  }
</script>

<style>
</style>