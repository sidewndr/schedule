import {useEffect, useState} from 'react'
import axios from "axios";


export const useFetch = (query) => {
  const url = 'https://eu-api.backendless.com/A74169E3-2A2E-4131-8306-B7B6AFC0DC53/FDDAB9CD-1EEB-4BBD-BC62-3A66F16EE20A'

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