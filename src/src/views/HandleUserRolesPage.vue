<template>
  <div class="handle-user-roles-page">
    <EditUserForm :user-data="editableUser" v-model:show-modal="showEditModal" />
    <div class="handle-user-roles-page__create-button">
      <CreateUserForm />
    </div>
    <div class="handle-user-roles-page__users-list" v-for="user in users" :key="user.id">

        <!-- <n-h3 class="handle-user-roles-page__span" @click="editUser(user)" >{{ user.login }}</n-h3> -->
        <n-h3 class="handle-user-roles-page__initials" @click="editUser(user)">Иван Иванов Иванович</n-h3>
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
  padding: 20px;
  margin: 20px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  /* background: #EFF1F3;  */
}
.handle-user-roles-page__users-list{
  /* margin-top: 5px; */
  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.handle-user-roles-page__users-list div:nth-child(n+1) {
  /* background: #000; */
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

.handle-user-roles-page__create-button {
  margin-bottom: 20px;

}
</style>
