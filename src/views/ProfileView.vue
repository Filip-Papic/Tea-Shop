<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

const router = useRouter();

const credentials = reactive({
  email: "",
  password: "",
});

const rules = {
  email: { required, email },
  password: { required },
};
const v$ = useVuelidate(rules, credentials);

const login = async () => {
  const isFormValid = await v$.value.$validate();
  if (!isFormValid) {
    return;
  }
  router.push({ name: "home" });
};
</script>

<template>
  <div class="container">
    <div class="login-register">
      <form @submit.prevent="login">
        <div class="form-group">
          <h1>Login</h1>
          <input
            v-model="credentials.email"
            type="text"
            id="email"
            placeholder="Email"
          />
          <span v-if="v$.email.$error">
            {{ v$.email.$errors[0].$message }}
          </span>
          <input
            v-model="credentials.password"
            type="password"
            id="password"
            placeholder="Password"
          />
          <span v-if="v$.password.$error">
            {{ v$.password.$errors[0].$message }}
          </span>
          <h6>
            <input type="checkbox" id="remember" />
            <label for="remember">Remember me</label>
          </h6>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -1rem;
  margin-top: 5rem;
  margin-bottom: 15rem;
  font-family: "Josefin Sans Regular", sans-serif;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.form-group {
  display: flex;
  flex-direction: column;
}
.login-register {
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: #fff;
}
.login-register input {
  width: 26rem;
  height: 2rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgb(233, 231, 231);
  padding-left: 1rem;
}
.login-register button {
  width: 100%;
  height: 2.5rem;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}
.login-register button:hover {
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
}
.login-register h6 {
  height: 1rem;
  margin-top: -5px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
}
.login-register h6 label {
  font-size: 0.8rem;
}
#remember {
  width: 12px;
  margin: 0;
  padding: 0;
  margin: 9px;
  vertical-align: middle;
  position: relative;
  top: -1px;
  overflow: hidden;
  accent-color: #000;
}
span {
  color: red;
  margin-top: -0.9rem;
  display: flex;
  justify-content: flex-end;
  padding-right: 2px;
  font-size: 0.8rem;
}
@media (max-width: 768px) {
  .login-register {
    width: 100%;
  }
  .login-register input {
    width: 80vw;
  }
}
</style>
