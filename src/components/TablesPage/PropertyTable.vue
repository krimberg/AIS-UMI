<template>
  <div class="property-table">
    <div class="property-table__header">
      <NH3><slot></slot></NH3>
      <n-space :size="40">
        <n-input 
        class="property-table__search"
        placeholder="Поиск"
        v-model:value="searchedValue"
        ></n-input>
        <n-h3>Отображение</n-h3>
        <n-select
        :value="choosenItemsPerPage"
        @update:value="(value) => (choosenItemsPerPage = value)"
        class="property-table__select"
        :options="itemsPerPage"
        placeholder="Items per page"
        />
        <n-h3>Действующие</n-h3>
        <n-checkbox style="margin-top: 6px;" size="large" v-model:checked="current"/>
      </n-space>
    </div>
    <n-data-table
      :columns="tableColumns"
      :data="tableData.slice(0, choosenItemsPerPage)"
      :pagination="pagination"
      @update:filters="handleUpdateFilter"
    />
  </div>
</template>

<script setup>
import { computed, defineComponent, ref, watch } from 'vue'
import { NDataTable, NSpace, NButton, NH3, NH4, NInput, NSelect, NCheckbox } from 'naive-ui'

import { useProceedingsStore } from '../../stores/useProceedingsStore'

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  columns: {
    type: Array,
    required: true
  },
  searchFunction: {
    type: Function,
    required: true,
  }
})

const itemsPerPage = [
  {
    label: '1',
    value: 1
  },
  {
    label: '2',
    value: 2
  },
  {
    label: '3',
    value: 3
  },
  {
    label: '4',
    value: 4
  },
  {
    label: '5',
    value: 5
  },
  {
    label: '6',
    value: 6
  },
  {
    label: '7',
    value: 7
  },
  {
    label: '8',
    value: 8
  },
  {
    label: '9',
    value: 9
  },
  {
    label: '10',
    value: 10
  }
]
const choosenItemsPerPage = ref(10)
// const tableData = computed(() => {
//   console.log(props.data.slice(0, choosenItemsPerPage.value))
//   return props.data.slice(0, choosenItemsPerPage.value)
// })
let tableData = ref(props.data);
let tableColumns = ref(props.columns)

console.log(props.data)

function filterAddress() {
  addressColumn.filterOptionValue = 'London'
}
function unfilterAddress() {
  addressColumn.filterOptionValue = null
}
function handleUpdateFilter(filters, sourceColumn) {
  addressColumn.filterOptionValue = filters[sourceColumn.key]
}

let searchedValue = ref('')
watch(searchedValue, () => tableData.value = props.searchFunction(searchedValue.value))

let current = ref(false);
watch(current, () => tableData.value = current.value ? tableData.value.slice(3) : props.data) // написать функцию для получиения активных производств

</script>

<style>
.property-table {
  padding: 20px;
}
.property-table__select {
  width: 60px;
}

.n-data-table .n-data-table-th {
    background-color: #223843 !important;
    color: rgb(255 255 255) !important;
}

.n-data-table {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 12px;
}

.property-table__header {
  display: flex;
  justify-content: space-between;
}

.property-table__search {
  width: 400px !important;
}
</style>
