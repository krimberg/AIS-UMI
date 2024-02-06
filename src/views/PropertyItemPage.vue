<template>
  <div class="property-item-page" v-for="field in Object.keys(item)" :key="field"
  >
  <!-- <h3>{{ field }}</h3>s -->
    <n-space horizontal justify="space-between"
    v-for="key in Object.keys(item[field])" :key="key"
    >
      <n-h3 class="property-item-page__span">{{ key }}</n-h3>
      <!-- <n-select
      v-if="key==='col1'"
      :value="choosenDep"
        @update:value="(value) => (choosenDep = value)"
        class="property-item-page__select"
        :options="deps"
      >{{ key }}</n-select>
      <n-select
        v-else-if="key==='judgmentName'"
        :value="choosenJudgement"
        @update:value="(value) => (choosenJudgement = value)"
        class="property-item-page__select"
        :options="judgments"
      >{{ key }}</n-select> -->
      <n-input
        class="property-item-page__input"
        :value="item[field][key]"
        :disabled="role === 'USER'"
        @update:value="(value) => (item[field][key] = value)"
      />
      <!-- <p>{{ item[key] }}</p> -->
    </n-space>
  </div>
  <NButton @click="useProceedingsStore().updateItem()" class="add-button">
    <template #icon><add_icon></add_icon></template>
  Создать запись</NButton>
</template>

<script setup>
import { ref, h } from 'vue';
import { NSpace, NH3, NButton, NInput, NSelect, NIcon } from 'naive-ui'
import { useUserStore } from '../../src/stores/useUserStore'

import { useProceedingsStore } from '../stores/useProceedingsStore'
import AddIcon from '../components/icons/AddIcon.vue'

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const add_icon = renderIcon(AddIcon);

const role = useUserStore().role
const item = useProceedingsStore().choosenItem
const deps = [
  {
    label: 'ООП по прикубанскому округу г Краснодара главного управления федеральной служюы судебных приставов...',
    value: 'ООП по прикубанскому округу г Краснодара главного управления федеральной служюы судебных приставов...'
  },
  {
    label: 'Наименование 2',
    value: "Наименование 2"
  },
  {
    label: 'Наименование 3',
    value: 'Наименование 3',
  },
]
const choosenDep = ref('ООП по прикубанскому округу г Краснодара главного управления федеральной служюы судебных приставов...')
const judgments = [
  {
    label: 'Арбитажный суд Краснодарского края',
    value: 'Арбитажный суд Краснодарского края'
  },
  {
    label: 'Наименование 2',
    value: "Наименование 2"
  },
  {
    label: 'Наименование 3',
    value: 'Наименование 3',
  },
]
const choosenJudgement = ref('Арбитажный суд Краснодарского края')

</script>

<style>
.property-item-page {
  /* margin: 10px; */
}
.property-item-page__span {
  width: 200px;
  overflow: hidden;
  margin: 10px;
}
.property-item-page__input {
  width: 800px !important;
}
.property-item-page__select {
  width: 800px !important;
}
</style>
