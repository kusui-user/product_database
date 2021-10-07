<template>
  <div class="background">
    <p class="txt">アカウントの作成</p>
    <div class="fill-space">
      <form @submit.prevent>
        <label>
          <span> email </span>
          <input v-model="email" type="text" />
        </label>
        <label>
          <span> password </span>
          <input v-model="password" type="password" />
        </label>
        <button type="submit" @click="createAccount">createAccount</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async createAccount() {
      try {
        await this.$fire.auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            console.log("done!"); //eslint-disable-line
          });
      } catch (e) {
        console.log(e); //eslint-disable-line
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.background {
  width: 100%;
  height: 100vh;
  background-color: rgb(248, 247, 247);
  

  .txt {
    text-align: center;
    font-size: 1.5em;
  }
  .fill-space{
    margin: 0 auto;
    width: 60%;
    height: 450px;
    background-color: white;

    form{
      display: flex;
      flex-flow: column;
    }
  }
}
</style>
