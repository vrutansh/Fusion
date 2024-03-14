import axios from 'axios'
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjI4ZjVmMzRiNWZhYTM2NTI5MzhkZDA1ZmFiZGM3NiIsInN1YiI6IjY1ZjJiYzNlNmRlYTNhMDE2MzdhMGI2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vaenBuea7V5GIhQ_C1XthaBBLkHbLMJG2xZgpr3bfwo'
      }
})

export default instance;