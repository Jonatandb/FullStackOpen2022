import axios from 'axios'

const serverURL = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(serverURL)
  return request.then(response => response.data)
}

const create = newPerson => {
  const request = axios.post('http://localhost:3001/persons', newPerson)
  return request.then(response => response.data)
}

export default { getAll, create }
