<!-- 1)The functions I need to run @click in my components (myCard, theirCard) only exist in the components, not in the
view. How do I get the functions onto my components so I can use them?

ERR: vue.runtime.esm.js?2b0e:587 [Vue warn]: Property or method "myCard" is not defined on the instance but referenced
during render. Make sure that this property is reactive, either in the data option, or for class-based components, by
initializing the property.
ERR:Uncaught TypeError: _vm.myCard is not a function
at click (eval at

2)The @click I need to run, why would I run just pickMyCard instead of myCard, where myCard is
the result of the pickMyCard function?

3)The flow from pickMyCard to the state back to the return in computed as myCard, nowhere am I setting the ID so
actually
set my card. How do I do that?

4)Where should my functions originate and return? Should both myCard functions go into myCards.vue? Same with theirs?
Shouldn't the startGame functionsbe in the Home.vue file, since that's where the function originate by clicking the
start button? -->


<template>
  <div class="container">
    <div class="row">

      <theirCards></theirCards>

    </div>
    <div class="row">

      <myCards></myCards>

    </div>

  </div>

</template>

<script>
  import myCards from "@/components/myCards.vue"
  import theirCards from "@/components/theirCards.vue"

  export default {
    name: 'game',
    data() {
      return {

      }
    },
    components: {
      myCards,
      theirCards
    },
    computed: {
      myCard() {
        return this.$store.state.myCard
      },
      theirCard() {
        return this.$store.state.theirCard
      },
      attack() {
        return this.$store.state.attack
      }
    },
    mounted() {

    },
    methods: {
      //check if correct
      fight(payload) {
        let myGameDetails = {
          myGameId: this.$route.params.id,
          cards: {
            theirGameId: this.$store.state.game.player.cardId,
            myGameId: this.$store.state.game.opponent.cardId
          }

        }
        this.$store.dispatch(payload)
      },
      pickMyCard(card) {
        this.$store.dispatch("pickMyCard", card)
      },

      pickTheirCard(card) {
        this.$store.dispatch("pickTheirCard", card)
      },
    }
  }

</script>

<style>


</style>