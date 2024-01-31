<template>
  <div class="handle-user-roles-page">
    <CreateUserForm />
    <EditUserForm :user-data="editableUser" v-model:show-modal="showEditModal" />
    <div class="handle-user-roles-page__users-list" v-for="user in users" :key="user.id">

        <n-h3 class="handle-user-roles-page__span" @click="editUser(user)" >{{ user.login }}</n-h3>
        <n-h3 class="handle-user-roles-page__initials" >Иван Иванов Иванович</n-h3>
        <n-select
        class="handle-user-roles-page__select"
        v-model:value="user.access"
        :options="accesses"
        ></n-select>
        <n-select
        class="handle-user-roles-page__select"
        v-model:value="user.role"
        :options="roles"
        ></n-select>
    </div>
  </div>
</template>

<script setup>
import { nextTick, ref } from 'vue';
import { NSpace, NH3, NH4, NInput, NSelect } from 'naive-ui'
import CreateUserForm from '../components/UsersPage/CreateUserForm.vue';
import EditUserForm from '../components/UsersPage/EditUserForm.vue';

import { useUserStore } from '../stores/useUserStore';
const store = useUserStore()
const users = store.users;
const roles = [
  {
    label: 'Пользователь',
    value: 'USER'
  },
  {
    label: 'Модератор',
    value: 'MODER'
  },
  {
    label: 'Администратор',
    value: 'ADMIN'
  },
]

const accesses = [
  {
    label: 'Полный',
    value: true,
  },
  {
    label: 'Неполный',
    value: false,
  },
]

const showEditModal = ref(false)

let editableUser = {};
function editUser(user){
  editableUser = user
  showEditModal.value = true;
  console.log(showEditModal.value, editableUser.login)
}


</script>

<style>
.handle-user-roles-page {
  /* margin: 10px; */
  background: #EDEDE9;
}
.handle-user-roles-page__users-list{
  /* margin-top: 5px; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.handle-user-roles-page__span {
  margin: 10px;
  cursor: pointer;
}
.handle-user-roles-page__input {
  width: 300px !important;
}
.handle-user-roles-page__select {
  width: 300px !important;
}
</style>
