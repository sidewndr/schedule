// import React, {useEffect, useState} from 'react'
// import axios from "axios";
//
//
// export const GetGroups = (course) => {
//
//   const [dataGroups, setDataGroups] = useState([])
//
//   useEffect( () => {
//     const fetchDataGroups = async () => {
//       try {
//         const response = await axios.get('https://schedule-303c8-default-rtdb.europe-west1.firebasedatabase.app/groups.json')
//         const data = Object.values(response.data)
//         const parseData = []
//
//         data.forEach((item) => {
//           if (course === item.course) {
//             parseData.push({
//               item: item.group
//             })
//           }
//         })
//         setDataGroups(parseData)
//       }
//       catch (error) {
//         console.log(error)
//       }
//     }
//
//     fetchDataGroups()
//   }, [course])
//
//   return dataGroups
// }