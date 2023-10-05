<template>
    <div>
        <ul>
            <li v-for="i in 5" :key="i">
                <router-link :to="`/users/${i}`">/users/{{ i }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Users',
  data () {
    return {
        token: false
    }
  },
  computed: {
    userId() {
        return this.$route.params.userId;
    }
  },
  watch: {
      userId: async function (val) {
          this.userInfo = await this.fetchUserInfo(val);
          if (this.userInfo != null) {
            this.token = true
          }
      }
  },
  methods: {
      // 非同步的函式
      async fetchUserInfo(id) {
          return await fetch("https://jsonplaceholder.typicode.com/users/" + id)
          .then((response) => response.json())
          .then((json) => json);
      }
  },

  async created() {
    this.userInfo = await this.fetchUserInfo(this.userId);
    // window.alert("good")
    // window.alert(this.token);
    // window.alert(this.userInfo["id"]);
    if (this.userInfo["id"] != undefined) {
      // window.alert("hi")
      this.token = true
    } else {
      // this.$router.push({ path: '/login' })
    }
  }
}
</script>