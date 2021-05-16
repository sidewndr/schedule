// import React, {useEffect, useState} from 'react'
// import axios from "axios";
//
//
// export const GetCourses = () => {
//
//   const [dataCourses, setDataCourses] = useState([])
//
//   useEffect( () => {
//     const fetchDataCourses = async () => {
//       try {
//         const response = await axios.get('https://schedule-303c8-default-rtdb.europe-west1.firebasedatabase.app/courses.json')
//         const data = Object.values(response.data)
//         const parseData = []
//
//         data.forEach((item) => {
//           parseData.push({
//             item: item.course
//           })
//         })
//         setDataCourses(parseData)
//       }
//       catch (error) {
//         console.log(error)
//       }
//     }
//
//     fetchDataCourses()
//   }, [])
//
//   return dataCourses
// }