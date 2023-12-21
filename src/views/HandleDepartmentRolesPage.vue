<template>
    <div class="handle-department-roles-page" v-for="department in departments" :key="department.name_organ">
      <n-space horizontal justify="space-between">
        <n-h3 class="handle-department-roles-page__span">{{ department.name_organ }}</n-h3>
        <n-select
        class="handle-department-roles-page__select"
          v-model:value="department.role"
          :options="roles"
        ></n-select>
      </n-space>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { NSpace, NH3, NInput, NSelect } from 'naive-ui'
  
  import { useUserStore } from '../stores/useUserStore';
  const store = useUserStore()
  const departments = store.departments;
  const roles = [
    {
      label: 'USER',
      value: 'USER'
    },
    {
      label: 'MODER',
      value: 'MODER'
    },
    {
      label: 'ADMIN',
      value: 'ADMIN'
    },
  ]
  </script>
  
  <style>
  .handle-department-roles-page {
    /* margin: 10px; */
    background: #EDEDE9;
  }
  .handle-department-roles-page__span {
    /* margin: 10px; */
  }
  .handle-department-roles-page__input {
    width: 800px !important;
  }
  .handle-department-roles-page__select {
    width: 800px !important;
  }
  </style>
  