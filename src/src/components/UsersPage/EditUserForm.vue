<template>
    <div class="edit-user-form">
    <n-modal v-model:show="show"
        @update:show="(newValue) => $emit('update:showModal', newValue)"
    >
      <n-card
        style="width: 600px"
        title="Данные о пользователе"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
        <n-h3>Имя пользователя</n-h3>
        <n-input
          v-model:value="props.userData.login"
        />
        <n-h3>Отдел</n-h3>
      <n-select
        v-model:value="userData.department"
          :options="departments"
      />
        <n-h3>Роль пользователя</n-h3>
        <n-select
          v-model:value="props.userData.role"
            :options="roles"
          ></n-select>
        <template #footer>
          <n-button @click="updateUser">Готово</n-button>
        </template>
      </n-card>
    </n-modal>
    </div>
  </template>
  
  <script setup>
  import { computed, ref } from 'vue';
  import { NModal, NCard, NButton, NInput, NSelect, NH3 } from 'naive-ui';
  import { useUserStore } from '../../stores/useUserStore';
  
  const props = defineProps({
    userData: {
      type: Object,
      required: true,
    },
    showModal: {
        type: Boolean,
        default: false,
    }
  })
  
const myemit = defineEmits(['update:show'])
const show = computed(() => props.showModal);

//   const createUser = () => {
//     showModal.value = false;
//   }
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
  ];
  const departments = useUserStore().departments.map((item) => {
    return {
      label: item.name_organ,
      value: item.name_organ
    };
  });

const updateUser = () => {
  useUserStore().updateUser(props.userData);
  myemit('update:show', false)
}
  
  </script>
  
  <style>
  .edit-user-form {
    /* margin: 20px; */
  }
  </style>