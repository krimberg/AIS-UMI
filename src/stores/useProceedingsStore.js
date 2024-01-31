import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useProceedingsStore = defineStore('Proceedings', {
  // arrow function recommended for full type inference
  state: () => ({
    propertyItems: [
      
    ],
    nonPropertyItems: [
      {
        key: 'np5',
        id: '35435465511',
        col1: ' ООП по прикубанскому округу г Краснодара главного управления федеральной служюы судебных приставов...',
        judgmentName: 'Арбитажный суд Краснодарского края',
        caseId: '2231-45-33',
        applicant: 'Фамилия Имя Отчество',
        responder: 'Фамилия Имя Отчество',
        subject: 'Постановление СПИ о постановлении ИП',
        actDate: '2022-04-14',
        execListDate: '2022-01-11',
        receivingListDate: '2021-12-22',
        requissites: '4115924112341'
      },
      {
        key: 'np6',
        id: '35435465542',
        col1: 'ООП ',
        judgmentName: 'Арбитажный суд Краснодарского края',
        caseId: '4231-45-33',
        applicant: 'Фамилия Имя Отчество',
        responder: 'Фамилия Имя Отчество',
        subject: 'Постановление СПИ о постановлении ИП',
        actDate: '2022-04-14',
        execListDate: '2022-01-11',
        receivingListDate: '2021-12-22',
        requissites: '4115924112341'
      },
      {
        key: 'np7',
        id: '35435465543',
        col1: 'ООП по прикубанскому округу г Краснодара главного управления федеральной служюы судебных приставов...',
        judgmentName: 'Арбитажный суд Краснодарского края',
        caseId: '7231-45-33',
        applicant: 'Фамилия Имя Отчество',
        responder: 'Фамилия Имя Отчество',
        subject: 'Постановление СПИ о постановлении ИП',
        actDate: '2022-04-14',
        execListDate: '2022-01-11',
        receivingListDate: '2021-12-22',
        requissites: '4115924112341'
      },
      {
        key: 'np8',
        id: '35435465544',
        col1: 'ООП по прикубанскому округу г Краснодара главного управления федеральной служюы судебных приставов...',
        judgmentName: 'Арбитажный суд Краснодарского края',
        caseId: '8231-45-33',
        applicant: 'Фамилия Имя Отчество',
        responder: 'Фамилия Имя Отчество',
        subject: 'Постановление СПИ о постановлении ИП',
        actDate: '2022-04-14',
        execListDate: '2022-01-11',
        receivingListDate: '2021-12-22',
        requissites: '4115924112341'
      },
      {
        key: 'np9',
        id: '35435465545',
        col1: 'ООП по прикубанскому округу г Краснодара главного управления федеральной служюы судебных приставов...',
        judgmentName: 'Арбитажный суд Краснодарского края',
        caseId: '9231-45-33',
        applicant: 'Фамилия Имя Отчество',
        responder: 'Фамилия Имя Отчество',
        subject: 'Постановление СПИ о постановлении ИП',
        actDate: '2022-04-14',
        execListDate: '2022-01-11',
        receivingListDate: '2021-12-22',
        requissites: '4115924112341'
      }
    ],
    choosenItem: reactive(null)
  }),
  getters: {
    getPropertyPerPage: (state) => {
      return (pages) => state.propertyItems.slice(0, pages)
    },
    getNonPropertyPerPage: (state) => {
      return (pages) => state.nonPropertyItems.slice(0, pages)
    },
    getPropertySearched: (state) => {
      return (value) => {
        let result = [];
        for (let i = 0; i < state.propertyItems.length; i++) {
          for (let keyTopLvl in state.propertyItems[i]){
            for (let key in state.propertyItems[i][keyTopLvl]){
              if ((state.propertyItems[i][keyTopLvl][key]).toString().indexOf(value) != -1) {
                result.push(state.propertyItems[i]);
                break
              } 
            }
          }
        }
        console.log(result)
        return result;
      }
    },
    getNonPropertySearched: (state) => {
      return (value) => {
        let result = [];
        for (let i = 0; i < state.nonPropertyItems.length; i++) {
          for (let key in state.nonPropertyItems[i]){
            if (state.nonPropertyItems[i][key].indexOf(value) != -1) {
              result.push(state.nonPropertyItems[i]);
              break
            } 
          }
        }
        return result;
      }
    },
    getPropertyByValue: (state) => {
      return (value) => {
        console.log(value)
        for (let i = 0; i < state.propertyItems.length; i++) {
          for (let key in state.propertyItems[i]) {
            if (state.propertyItems[i][key] === value) return state.propertyItems[i]
          }
        }
        return 'test'
      }
    }
  },
  actions: {
    async fetchData(){
      try {
        const response = await axios('http://lara/api/imtableisprois')
          console.log(response.data);
          this.propertyItems = response.data
          // this.nonPropertyItems = data.nonPropertyItems
        }
        catch (error) {
          alert(error)
          console.log(error)
      }
    },
    async createItem(){
      try {
        console.log('!!!!!!!!1',JSON.stringify(this.choosenItem));
        let item = JSON.stringify(this.choosenItem);
        const response = await axios.post("http://lara/api/imtableisprois", item)
          console.log(response.data);
          // this.nonPropertyItems = data.nonPropertyItems
        }
        catch (error) {
          alert(error)
          console.log(error)
      }
    },
    async updateItem(){
      try {
        console.log('!UPDATE!',JSON.stringify(this.choosenItem));
        let item = JSON.stringify(this.choosenItem);
        const response = await axios.post("http://lara/api/imtableisprois/update", item)
          console.log(response.data);
          // this.nonPropertyItems = data.nonPropertyItems
        }
        catch (error) {
          alert(error)
          console.log(error)
      }
    },
  }
})
