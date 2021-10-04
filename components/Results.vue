<template>
<div class="container">
  <p>Reaction time: {{ score }} ms</p>
  <p class="rank">{{ rank }}</p>

</div>
</template>

<script>
export default {
  props: ['score'],
  data() {
    return {
      rank: null
    };
  },
  mounted() {
    if (this.score < 260) {
      this.rank = '超一流';
    } else if (this.score < 400) {
      this.rank = '一流';
    } else {
      this.rank = '二流';
    }
  }
};
</script>

<style scoped>
.rank {
  font-size: 1.8em;
  color: #31b0c7;
  font-weight: bold;
}
</style>