<template lang="pug">
  li
    h2: a(:href="artist.url" target="_blank") {{artist.name}}
    img(:src="artist.image[2]['#text']")

</template>

<script>
  export default {
    name: "artist",
    created(){
    },
    props: {
      artist: {
        type: Object,
        default: {}
      },
    },
  }
</script>

<style lang="stylus" scoped>
  li
    width: 25%;
    margin 10px 0
    img
      width: 50%
      object-fit: cover
      background-color: transparent
</style>
