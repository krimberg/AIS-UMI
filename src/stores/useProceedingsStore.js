import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useProceedingsStore = defineStore('Proceedings', {
  // arrow function recommended for full type inference
  state: () => ({
    propertyItems: [
      {
        item:
        {
            id: '1543546551',
            writOfExecutionOrderDate: '',
            writOfExecutionReceivingDate: '',
            docOfExecutionRequisites: '',
            transferDateOfExecutionWrit: '',
            division: 'Структурное подразделение 1',
            executionPeriod: '11.11.2024',
            recoverer: 'Иванов Иван Иванович',
            deptor: 'Смирнов Игорь Петрович',
            dateOfInitiation: '',
            proceedingNumber: 'Исполнительное производство 1',
            proceedingSubject: 'Предмет исполнительного производства 1',
            proceedingEndDate: '',
            proceedingEndCauses: '',
            bailifContacts: '',
            note: '',
            isProperty: true,
        },
        penalties:
        {
            baseDept: '777',
            penalties: '77',
            judgmentCosts: '77',
            total: '7777',
        },
        courtCases: [],
        administration:
        {
            id: '',
            name: 'Ответственный орган администрации МО г. Краснодар 1',
    
        },
        status: 
        {
            id: '',
            proceedingId: '',
            statusId: '',
            result: '',
            cutOffDate: '',
        },
    },
    {
      item:
      {
          id: '1543546552',
          writOfExecutionOrderDate: '',
          writOfExecutionReceivingDate: '',
          docOfExecutionRequisites: '',
          transferDateOfExecutionWrit: '',
          division: 'Структурное подразделение 2',
          executionPeriod: '11.11.2024',
          recoverer: 'Сидоров Олег Дмитриевич',
          deptor: 'Семенов Семен Семенович',
          dateOfInitiation: '',
          proceedingNumber: 'Исполнительное производство 2',
          proceedingSubject: 'Предмет исполнительного производства 2',
          proceedingEndDate: '',
          proceedingEndCauses: '',
          bailifContacts: '',
          note: '',
          isProperty: true,
      },
      penalties:
      {
          baseDept: '',
          penalties: '',
          judgmentCosts: '',
          total: '',
      },
      courtCases: [],
      administration:
      {
          id: '',
          name: 'Ответственный орган администрации МО г. Краснодар 2',
  
      },
      status: 
      {
          id: '',
          proceedingId: '',
          statusId: '',
          result: '',
          cutOffDate: '',
      },
  }
    ],
    nonPropertyItems: [
      {
        item:
        {
            id: '1543546551',
            writOfExecutionOrderDate: '',
            writOfExecutionReceivingDate: '',
            docOfExecutionRequisites: '',
            transferDateOfExecutionWrit: '',
            division: 'Структурное подразделение 1',
            executionPeriod: '11.11.2024',
            recoverer: 'Иванов Иван Иванович',
            deptor: 'Смирнов Игорь Петрович',
            dateOfInitiation: '',
            proceedingNumber: 'Исполнительное производство 1',
            proceedingSubject: 'Предмет исполнительного производства 1',
            proceedingEndDate: '',
            proceedingEndCauses: '',
            bailifContacts: '',
            note: '',
            isProperty: false,
        },
        courtCases: [],
        administration:
        {
            id: '',
            name: 'Ответственный орган администрации МО г. Краснодар 1',
    
        },
        status: 
        {
            id: '',
            proceedingId: '',
            statusId: '',
            result: '',
            cutOffDate: '',
        },
    },
    {
      item:
      {
          id: '1543546552',
          writOfExecutionOrderDate: '',
          writOfExecutionReceivingDate: '',
          docOfExecutionRequisites: '',
          transferDateOfExecutionWrit: '',
          division: 'Структурное подразделение 2',
          executionPeriod: '11.11.2024',
          recoverer: 'Сидоров Олег Дмитриевич',
          deptor: 'Семенов Семен Семенович',
          dateOfInitiation: '',
          proceedingNumber: 'Исполнительное производство 2',
          proceedingSubject: 'Предмет исполнительного производства 2',
          proceedingEndDate: '',
          proceedingEndCauses: '',
          bailifContacts: '',
          note: '',
          isProperty: false,
      },
      courtCases: [],
      administration:
      {
          id: '',
          name: 'Ответственный орган администрации МО г. Краснодар 2',
  
      },
      status: 
      {
          id: '',
          proceedingId: '',
          statusId: '',
          result: '',
          cutOffDate: '',
      },
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
        return 'govno'
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
