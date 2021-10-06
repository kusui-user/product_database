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
 
    >
  </div>
</template>

<script>
export default {
  data(){
    return{
      author: 'kusui',
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
