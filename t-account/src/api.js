import React from 'react'

const api = () => {

    const getApi = async() => {
        let url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'
        let response = await fetch(url)
        let data= await response.json()
        console.log(data)
    }
    getApi();
  return (
    <div>







    </div>
  )
}

export default api