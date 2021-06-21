import {useEffect, useState} from 'react'
import axios from "axios";


export const useFetch = (query) => {
  const url = 'https://eu-api.backendless.com/CF3D6676-DED6-BCB3-FF00-E63D823B6300/FF4F1F5C-09BD-4689-8AF8-E827D6578DD8'

  const [loading, setLoading] = useState()
  const [data, setData] = useState()
  const [error, setError] = useState()

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(url + query)
      setData(response.data)
      setLoading(false)
    }
    catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return [loading, data, error, fetchData]
}