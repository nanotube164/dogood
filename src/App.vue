<template>
  <!-- <h1>Hi, how are you recently?</h1> -->
  <!-- <div> -->
    <!-- <Login></Login> -->
    <!-- <HomeView></HomeView> -->
    <!-- <Login></Login> -->
  <!-- </div> -->
  <router-view></router-view>
</template>

<script>
import AppMain from '@/views/AppMain.vue'
// import Login from '@views/auth/Login.vue'


export default {
  name: 'App',
  components: {
    // Login,
    AppMain,
  },
  // data () {
  //   return {
  //       token: false
  //   }
  // },
  // // data() {
  // //       return {
  // //           userInfo: {},
  // //       };
  // // },
  // computed: {
  //   userId() {
  //       return this.$route.params.userId;
  //   }
  // },
  // watch: {
  //     userId: async function (val) {
  //         this.userInfo = await this.fetchUserInfo(val);
  //         if (this.userInfo != null) {
  //           this.token = true
  //         }
  //     }
  // },
  // methods: {
  //     // 非同步的函式
  //     async fetchUserInfo(id) {
  //         return await fetch("https://jsonplaceholder.typicode.com/users/" + id)
  //         .then((response) => response.json())
  //         .then((json) => json);
  //     }
  // },

  // async created() {
  //   this.userInfo = await this.fetchUserInfo(this.userId);
  //   // window.alert("good")
  //   // window.alert(this.token);
  //   // window.alert(this.userInfo["id"]);
  //   if (this.userInfo["id"] != undefined) {
  //     // window.alert("hi")
  //     this.token = true
  //   } else {
  //     // this.$router.push({ path: '/login' })
  //   }
  // }
}
</script>
