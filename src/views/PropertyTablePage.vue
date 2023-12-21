<template>
  <n-button class="property-table-page__add-button" @click="addPropertyItem">Добавить запись</n-button>
  <div class="property-table-page__table">
    
    <property-table :data="data" :columns="propertyColumns" :search-function="searchFunction">
      Реестр исполнительных производств имущественного характера</property-table
    >
  </div>
</template>

<script setup>
import { h, computed, onMounted, reactive, ref } from 'vue'
import { NButton } from 'naive-ui'

import { useProceedingsStore } from '../stores/useProceedingsStore.js'
import PropertyTable from '../components/TablesPage/PropertyTable.vue'
import router from '../router'
import MyCell from '../components/global/MyCell.vue'
import { item } from '../constants/itemTmplate';


const propertyData = computed(() => useProceedingsStore().propertyItems)
console.log(propertyData)
// const itemProp = ref(null);
const addPropertyItem = () => {
  useProceedingsStore().choosenItem = JSON.parse(JSON.stringify(item));
  useProceedingsStore().propertyItems.push(useProceedingsStore().choosenItem)
  router.push('/item')
}

const searchFunction = useProceedingsStore().getPropertySearched;
const data = propertyData.value.reduce((result, item) => {
  return [
    ...result,
    {
      key: item.isp_proi.iduser,
      id: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: item.isp_proi.iduser
      }),
      key: item.isp_proi.iduser,
      col1: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: item.organ_admins.name_organ
      }),
      key: item.isp_proi.iduser,
      judgmentName: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: item.court_case.name_syd
      }),
      key: item.isp_proi.iduser,
      caseId: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: item.court_case.num_del
      }),
      key: item.isp_proi.iduser,
      applicant: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: item.court_case.plaintiff
      }),
      key: item.isp_proi.iduser,
      responder: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: item.court_case.defendant
      }),
      key: item.isp_proi.iduser,
      subject: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: item.court_case.pred_spor
      }),
      key: item.isp_proi.iduser,
      actDate: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: item.court_case.date_vin_syd_akt
      }),
      key: item.isp_proi.iduser,
      debt: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: item.property_pens.principaldebt
      }),
      key: item.isp_proi.iduser,
      penalties: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: item.property_pens.penalties
      }),
      costs: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: item.property_pens.сourtcosts
      }),
      total: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: parseFloat(item.property_pens.principaldebt) + parseFloat(item.property_pens.penalties) + parseFloat(item.property_pens.сourtcosts)
      }),
      execDate: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: item.isp_proi.dateoforderofthewrit
      })
    }
  ]
}, [])
const propertyColumns = reactive([
  {
    title: 'ID',
    key: 'id',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: 'Ответственный орган администрации',
    key: 'col1',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: 'Наименование суда',
    key: 'judgmentName',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: 'Номер дела',
    key: 'caseId',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: 'Истец',
    key: 'applicant',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: 'Ответчик',
    key: 'responder',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: 'Предмет спора',
    key: 'subject',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: 'Дата вынесенного судебного акта',
    key: 'actDate',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: 'Основной долг',
    key: 'debt',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: 'Штрафы',
    key: 'penalties',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: 'Судебные расходы',
    key: 'costs',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: 'Всего',
    key: 'total',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: 'Дата заказа',
    key: 'execDate',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  }
])
</script>

<style>
.property-table-page {
  background: #EDEDE9;

}

.property-table-page__add-button {
  width: 300px;
  background: #EDEDE9;
}

.property-table-page__table {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  background: #EDEDE9;
  width: 100%;
}

.n-data-table .n-data-table-th {
    background-color: rgb(142 142 152) !important;
    color: rgb(255 255 255) !important;
}

.n-data-table {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 12px;
}
</style>
