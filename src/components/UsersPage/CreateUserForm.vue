<template>
  <div class="create-user-form">
    <n-button class="add-button" @click="showModal = true">
      <template #icon><add_icon></add_icon></template>
    Создать пользователя
  </n-button>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      title="Создать пользователя"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <n-h3>Имя пользователя</n-h3>
      <n-input
        placeholder="Имя"
        v-model:value="userData.login"
      />
      <n-h3>Пароль пользователя</n-h3>
      <n-input 
        placeholder="Пароль"
        v-model:value="userData.password"
      />
      <n-h3>Отдел</n-h3>
      <n-select
        v-model:value="userData.department"
          :options="departments"
      />
      <n-h3>Роль пользователя</n-h3>
      <n-select
        v-model:value="userData.role"
          :options="roles"
        ></n-select>
      <template #footer>
        <n-button @click="createUser">Создать пользователя</n-button>
      </template>
    </n-card>
  </n-modal>
  </div>
</template>

<script setup>
import { computed, ref, h } from 'vue';
import { NModal, NCard, NButton, NInput, NSelect, NH3, NIcon } from 'naive-ui';
import { useUserStore } from '../../stores/useUserStore';
import AddIcon from '../icons/AddIcon.vue'

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const add_icon = renderIcon(AddIcon);

const userData = ref({
  login: '',
  department: '',
  password: '',
  role: 'USER',
});
const userStore = useUserStore()
const createUser = () => {
  userStore.createUser(userData.value);
  userData.value = {
    login: '',
    department: '',
    password: '',
    role: 'USER',
  };
  showModal.value = false;
}
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

const departments = useUserStore().departments.map((item) => {
    return {
      label: item.name_organ,
      value: item.name_organ
    };
  });

const showModal = ref(false);
</script>

<style>
.create-user-form {
  /* margin: 20px; */
}
</style>