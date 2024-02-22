<template>
  <div class="property-table-page__table">
    <property-table :data="data" :columns="propertyColumns" :search-function="searchFunction">
      <template #header>
        Реестр исполнительных производств имущественного характера
      </template>
      <template #button>
        <n-button class="add-button" @click="addPropertyItem">
          <template #icon><add_icon></add_icon></template>
          Добавить запись
        </n-button>
      </template>
      </property-table
    >
  </div>
</template>

<script setup>
import { h, computed, onMounted, reactive, ref } from 'vue'
import { NButton, NIcon } from 'naive-ui'

import { useProceedingsStore } from '../stores/useProceedingsStore.js'
import PropertyTable from '../components/TablesPage/PropertyTable.vue'
import router from '../router'
import MyCell from '../components/global/MyCell.vue'
import { item } from '../constants/itemTmplate';
import AddIcon from '../components/icons/AddIcon.Vue'

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const add_icon = renderIcon(AddIcon);

const propertyData = computed(() => useProceedingsStore().propertyItems)
console.log(propertyData.value)
// const itemProp = ref(null);
const addPropertyItem = () => {
  useProceedingsStore().choosenItem =     
  {
    propertyItem:
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
        isProperty: true,
    },
    penalties:
    {
        id: Math.ceil(Math.random() * 10000000),
        baseDept: '',
        penalties: '',
        judgmentCosts: '',
        total: '',
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
  useProceedingsStore().propertyItems.push(useProceedingsStore().choosenItem)
  router.push('/property-item')
}

const searchFunction = useProceedingsStore().getPropertySearched;
const data = propertyData.value.reduce((acc, item) => {
  return [
    ...acc,
    {
      key: item.propertyItem.id,
      more: h(MyCell, {
        onClick: () => {
          console.log(item);
          useProceedingsStore().choosenItem = item
          router.push('/property-item')
        },
        text: 'Подробнее'
      }),
      id: item.propertyItem.id,
      administration: item.administration.name,
      division: item.propertyItem.division,
      proceedingNumber: item.propertyItem.proceedingNumber,
      recoverer: item.propertyItem.recoverer,
      deptor: item.propertyItem.deptor,
      proceedingSubject: item.propertyItem.proceedingSubject,
      executionPeriod: item.propertyItem.executionPeriod,
    }
  ]
}, []);

const propertyColumns = reactive([
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
</script>

<style>
.property-table-page {

}
/* 
.property-table-page__add-button {
  width: 300px;
} */

.property-table-page__table {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  width: 100%;
}


</style>
