<template>
  <div class="background">
    <p class="txt">アカウントの作成</p>
    <div class="fill-space">
      <form @submit.prevent class="form-space">
        <label class="label-space">
          <div class="span-space">
            <span> email </span>
          </div><div class="input-space">
            <input v-model="email" type="text" />
          </div>
        </label>
        <label class="label-space">
          <div class="span-space">
            <span> password </span>
          </div><div class="input-space">
            <input v-model="password" type="password" />
          </div>
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
  .fill-space {
    margin: 0 auto;
    width: 60%;
    height: 350px;
    background-color: white;
     box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.33);

    .form-space {
      width: 100%;
      display: flex;
      flex-flow: column;
      // justify-content: center;

      .label-space {
        text-align: center;
        margin-top: 50px;

        .span-space {
          width: 100px;
          // border: solid;
          display: inline-block;
          background-color: rgb(238, 234, 234);
          line-height: 34px;
        }
        .input-space {
          display: inline;
          input{

            border:solid 0.6px  rgb(238, 234, 234);
            
          }
        }
      }
      button{
        width: 280px;
        text-align: center;
        margin: 50px auto;
        background-color: skyblue;
        color: white;
        border: none;
        box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.33);

        &:hover{
          opacity: 0.9;
        }
      }
    }
  }
}
</style>
