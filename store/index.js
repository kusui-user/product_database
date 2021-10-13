export const state = () =>({
  user:{
    uid:'',
    email:'',
    name:'',
    photoURL:'',
  },
})

export const getters = {
  user: (state) =>{
    return state.user
  }
}

export const actions = {
  login({ context }, payload){
    this.$fire.auth.signInWithEmailAndPassword(payload.email, payload.password)
    .then((user) =>{
      console.log(user)
      this.$router.push('/')
    })
    .catch((error) => {
      console.log(error)
    })
  }
}