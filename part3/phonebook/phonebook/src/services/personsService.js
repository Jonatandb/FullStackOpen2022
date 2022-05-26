import axios from 'axios'

const serverURL = 'http://localhost:3001/api/persons'

const personsService = {
  getAll: () => {
    const request = axios.get(serverURL)
    return request.then(response => response.data)
  },

  create: newPerson => {
    const request = axios.post(serverURL, newPerson)
    return request.then(response => response.data)
  },

  update: person => {
    const request = axios.put(serverURL + '/' + person.id, person)
    return request.then(response => response.data)
  },

  remove: id => {
    const request = axios.delete(`${serverURL}/${id}`)
    return request.then(response => response.data)
  },
}

export default personsService
