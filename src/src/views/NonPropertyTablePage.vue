<template>
  
  <div class="non-property-table-page">
    <property-table :data="data" :columns="nonPropertyColumns" :search-function="searchFunction"
      >
      <template #header>
        Реестр исполнительных производств неимущественного характера
      </template>
      <template #button>
        <n-button class="add-button" @click="addNonPropertyItem">
          <template #icon><add_icon></add_icon></template>
          Добавить запись
        </n-button>
      </template>
      </property-table
    >
  </div>
</template>

<script setup>
import { reactive, h } from 'vue'
import { NButton, NIcon } from 'naive-ui'

import { useProceedingsStore } from '../stores/useProceedingsStore.js'
import PropertyTable from '../components/TablesPage/PropertyTable.vue'
import MyCell from '../components/global/MyCell.vue'
import router from '../router'
import AddIcon from '../components/icons/AddIcon.Vue'


const addNonPropertyItem = () => {
  useProceedingsStore().choosenItem = {
    item:
    {
        id: Math.ceil(Math.random() * 10000000),
        writOfExecutionOrderDate: '',
        writOfExecutionReceivingDate: '',
        docOfExecutionRequisites: '',
        transferDateOfExecutionWrit: '',
        division: '',
        executionPeriod: '',
        recoverer: '',
        deptor: '',
        dateOfInitiation: '',
        proceedingNumber: '',
        proceedingSubject: '',
        proceedingEndDate: '',
        proceedingEndCauses: '',
        bailifContacts: '',
        note: '',
        isProperty: false,
    },
    courtCases: [] ,
    administration:
    {
        id: Math.ceil(Math.random() * 10000000),
        name: 'Ответственный орган администрации МО г. Краснодар 1',

    },
    status: 
    {
        id: Math.ceil(Math.random() * 10000000),
        proceedingId: '',
        statusId: '',
        result: '',
        cutOffDate: '',
    },
};
  useProceedingsStore().nonPropertyItems.push(useProceedingsStore().choosenItem)
  router.push('/property-item')
}


const nonPropertyData = useProceedingsStore().nonPropertyItems
const searchFunction = useProceedingsStore().getNonPropertySearched;
const data = nonPropertyData.reduce((acc, item) => {
  return [
    ...acc,
    {
      key: item.item.id,
      more: h(MyCell, {
        onClick: () => {
          console.log(item);
          useProceedingsStore().choosenItem = item
          router.push('/property-item')
        },
        text: 'Подробнее'
      }),
      id: item.item.id,
      administration: item.administration.name,
      division: item.item.division,
      proceedingNumber: item.item.proceedingNumber,
      recoverer: item.item.recoverer,
      deptor: item.item.deptor,
      proceedingSubject: item.item.proceedingSubject,
      executionPeriod: item.item.executionPeriod,
    }
  ]
}, []);

const nonPropertyColumns = reactive([
  {
    title: '',
    key: 'more',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
  },
  {
    title: 'id',
    key: 'id',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default',
  },
  {
    title: "Ответственный орган администрации МО г. Краснодар",
    key: 'administration',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: "Наименование структурного подразделения УФССП",
    key: 'division',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: "№ исполнительного производства",
    key: 'proceedingNumber',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: "Взыскатель",
    key: 'recoverer',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    // sorter: 'default'
  },
  {
    title: "Должник",
    key: 'deptor',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: "Предмет исполнительного производства",
    key: 'proceedingSubject',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: "Срок исполнения исполнительного производства",
    key: 'executionPeriod',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
])
function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const add_icon = renderIcon(AddIcon);
</script>

<style>
.non-property-table-page {
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
