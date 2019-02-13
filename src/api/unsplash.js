import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID c02ba5dd3fe4a967e12ccb91922f33851d4ee66800ada80e67a6689f61aded69' 
  } 
})