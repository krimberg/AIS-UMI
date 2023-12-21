import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  // arrow function recommended for full type inference
  state: () => ({
    name: '',
    password: '',
    role: 'ADMIN',
    user: '',
    users: [
      {
        login: 'user1',
        password: '',
        department: 'dep1',
        access: 'FULL',
        role: 'USER',
      },
      {
        login: 'user2',
        password: '',
        department: 'dep1',
        access: 'FULL',
        role: 'USER',
      },
      {
        login: 'user3',
        password: '',
        department: 'dep1',
        access: 'FULL',
        role: 'USER',
      },
      {
        login: 'user4',
        password: '',
        department: 'dep1',
        access: 'LOCAL',
        role: 'USER',
      },
      {
        login: 'user5',
        password: '',
        department: 'dep1',
        access: 'LOCAL',
        role: 'USER',
      },
    ],
    departments: [
      {
        name: 'department',
        role: 'user',
      },
      {
        name: 'department2',
        role: 'user',
      },
      {
        name: 'department3',
        role: 'user',
      },
    ],
  }),
  actions: {
    async fetchUsers(){
      try {
        const response = await axios('http://lara/api/users')
          console.log(response.data);
          this.users = response.data
          // this.nonPropertyItems = data.nonPropertyItems
        }
        catch (error) {
          alert(error)
          console.log(error)
      }
    },

    async auth(data){
      console.log(data);
      try {
        const response = await axios.post("http://lara/api/auth",
          {
            login: data.login,
            password: data.password,
          }
        )
        this.user = response.data;
        console.log(this.user);
      }
      catch (error){
        alert(error);
        console.log(error);
      }
    },
    async createUser(data){
      try {
        const response = await axios.post("http://lara/api/createUser", {
          user: {
            login: data.login,
            password: data.password,
            role: data.role,
            department: data.department,
          } 
        })
        this.users.push(response.data);
      } catch (error) {
        console.log(error)
      }
    },
    async updateUser(data){
        // console.log(data)
      try {
        const response = await axios.post("http://lara/api/updateUser", {
          user: {
            login: data.login,
            password: data.password,
            access: data.access,
            role: data.role,
            department: data.department,
          } 
        })
      } catch (error) {
        console.log(error)
      }
    },
    
    async fetchDepartments(){
      try {
        const response = await axios('http://lara/api/departments')
          console.log(response.data);
          this.departments = response.data
          // this.nonPropertyItems = data.nonPropertyItems
        }
        catch (error) {
          alert(error)
          console.log(error)
      }
    },
  }
})
