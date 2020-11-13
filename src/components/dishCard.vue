<template>
  <b-card
      :title="cardTitle"
      :img-src="cardImg"
      :img-alt="cardTitle"
      img-top
      v-on:click="emitOnClick()"
  >
    <b-card-text>
      {{ cardDesc }}
    </b-card-text>
    <b-card-text class="small text-muted">{{ cardPrice }}</b-card-text>
    <slot></slot>
  </b-card>
</template>

<script>
export default {
  name: "dishCard",
  props: {
    cardTitle: String,
    cardImg: String,
    cardDesc: String,
    cardPrice: Number
  },
  methods: {
    emitOnClick(){
      this.$emit('cardClick');
    }
  }
}
</script>

<style scoped>

</style>
