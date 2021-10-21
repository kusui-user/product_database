<template>
  <div class="container">
    <form>
      <AppControlInput type="email">Eメール</AppControlInput>
      <AppControlInput type="password">パスワード</AppControlInput>
    </form>
    <AppControlInput v-model="author">投稿者</AppControlInput>
    <P>{{author}}</P>

    <AppControlInput v-model="title">タイトル</AppControlInput>

    <AppControlInput v-model="thumbnailLink">サムネイル</AppControlInput>
 
    <div class="box">
      <img :src="img" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      author: 'kusui',
      img:this.$store.getters.user.photoURL,
    }
  }
};
</script>


<style lang="scss" scoped>
.box{
  width: 300px;
  height: 300px;
  background-color: burlywood;

  img{
    width: 100%;
  }
}
</style>
