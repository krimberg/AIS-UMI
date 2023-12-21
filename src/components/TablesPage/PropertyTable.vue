<template>
  <div class="property-table">
    <n-space vertical :size="12">
      <NH3><slot></slot></NH3>
    </n-space>
    <n-space :size="200">
      <n-input 
        placeholder="Поиск"
        v-model:value="searchedValue"
        ></n-input>
      <n-h3>per page</n-h3>
      <n-select
        :value="choosenItemsPerPage"
        @update:value="(value) => (choosenItemsPerPage = value)"
        class="property-table__select"
        :options="itemsPerPage"
        placeholder="Items per page"
      />
    </n-space>
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
import { NDataTable, NSpace, NButton, NH3, NInput, NSelect } from 'naive-ui'

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
// const searchedItems = computed(() => useProceedingsStore().searchedItems(searchValue))
</script>

<style>
.property-table {
  /* margin-left: 80px; */
  /* background: #EDEDE9; */
  padding: 20px;
}
.property-table__select {
  width: 60px;
}
</style>
