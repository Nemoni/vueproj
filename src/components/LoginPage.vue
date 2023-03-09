<!-- Login.vue -->

<template>
  <div>
    <h2>Login Component</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // 模拟验证用户信息并获取登录 token 和角色信息
      const username = this.username;
      const password = this.password;
      if (username === "admin" && password === "123") {
        const token = "mytoken";
        const role = "admin";
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        this.$router.push("/admin");
      } else if(username === "pni" && password === "123"){
        const token = "pnitoken";
        const role = "pni";
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        this.$router.push("/admin");
      }
      else {
        alert("Invalid username or password");
      }
    },
  },
};
</script>
