import React, { useEffect, useState } from 'react'

import BikeCard from '../../components/Staff/BikeCard';
import StaffNav from '../../components/Staff/StaffNav';
const RequestInspection = () => {

    const [data, setData] = useState([]);
    
    const url = `${import.meta.env.VITE_API_URL}/bike/all`;
    const fetchData = () => {
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            setData(data);
            console.log(data);
        })
        .catch(e => console.log("error", e));
    }

    useEffect(() => {
        fetchData();
    },[]);

  return (
    <>
    <StaffNav />
    <div className='flex flex-wrap bg-blue-100'>
    {
      
        data.map((bike,index) => (
                <BikeCard bike={bike} key={index}/>
            
        ))
    }
    </div>
    </>
  )
}

export default RequestInspection;