<template>
  <div class="background">
    <form action="">
      <FormItemIcon :img="postData.thumbnail" type="file" @change="changeImg" />
    </form>
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
        <div class="acount-box">
        <button type="submit" v-if="done === false" @click="createAccount">createAccount</button>
        <div class="after-msg" v-if="done">作成しました。3秒後にトップ移動 </div>
        </div>
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
      done:false,
      thumbnail:'',
      postData:{
        thumbnail:'',
      },
    };
  },
  methods: {
    async createAccount() {
      try {
        await this.$fire.auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.done = true
          })
          .then(() =>{
            setTimeout(() => {
              this.$router.push('/')
            }, 3000);
          });
      } catch (e) {
        console.log(e); //eslint-disable-line
      }
    },
    changeImg(e) {
      this.thumbnail = e.target.files[0]
      if(this.thumbnail){
        const reader = new FileReader()
        reader.readAsDataURL(this.thumbnail)
        reader.onload = () => {
          this.postData.thumbnail = reader.result + ''
        }
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
      .acount-box{
        position: relative;
        margin: 30px auto;
        width: 280px;

      }
      button{
        width: 280px;
        background-color: skyblue;
        color: white;
        border: none;
        box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.33);

        &:hover{
          opacity: 0.9;
        }
      }
      .after-msg{
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        width: 280px;
        background-color: red;
        margin: 0 auto;
        color: white;
        line-height: 32px;
      }
    }
  }
}

 .form-item-icon {
    margin:0 auto 30px;
    width: 120px;
    height: 120px;
  }
</style>
