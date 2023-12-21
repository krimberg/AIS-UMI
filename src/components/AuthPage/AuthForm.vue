<template>
  <div class="auth-form">
    <n-form ref="formRef" :model="userStore" :rules="rules">
      <n-form-item path="age" label="Имя пользователя">
        <n-input
          @input="(value) => (data.login = value)"
          @keydown.enter.prevent
          placeholder="Имя пользователя"
          size="large"
        />
      </n-form-item>
      <n-form-item path="password" label="Пароль">
        <n-input
          @input="(value) => (data.password = value)"
          type="password"
          @keydown.enter.prevent
          placeholder="Пароль"
          size="large"
          show-password-on="mousedown"
        />
      </n-form-item>
    </n-form>
    <NButton type="primary" @click="auth()">Войти</NButton>
  </div>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import { NForm, NFormItem, NButton, NInput } from 'naive-ui'
import router from '../../router';

import { useUserStore } from '../../stores/useUserStore'

const formRef = ref(null)
const rPasswordFormItemRef = ref(null)
const userStore = useUserStore()
const data = {
    login: '',
    password: '',
  };
const auth = () => {
  userStore.auth(data);
  router.push('table')
}
const rules = {
  name: [
    {
      required: true,
      message: 'Введите имя пользователя',
      trigger: ['input', 'blur']
    }
  ],
  password: [
    {
      required: true,
      message: 'Введите пароль'
    }
  ]
}
</script>

<style>
.auth-form {
  /* height: 300px; */
  width: 300px;
  padding: 12px;
  border: solid 1px rgb(200, 200, 200);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
