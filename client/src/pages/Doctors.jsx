import React, { useEffect, useState } from 'react'
import { doctors } from '../assets/data/doctors'
import DoctorCard from '../components/DoctorCard/DoctorCard'
import { backendLink } from "../index.js"
import axios from 'axios';
import Shimmer from '../components/Shimmer/Shimmer';

const Doctors = () => {
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)

  const [doc, setDoc] = useState(doctors)
  useEffect(() => {
    try {
      // axios.get(`${backendLink}/api/doctor/doctorData`).then((res) => {
        // setDoc(res.data)
        setLoading(false)
      // })
    } catch (error) {
      console.log(error);
    }
  }, [])

  let filtered = [];
  for (let i = 0; i < doc.length; i++) {
    if (doc[i].name.toLowerCase().includes(search.toLowerCase()) || doc[i].email.toLowerCase().includes(search.toLowerCase()) || doc[i].specialty.toLowerCase().includes(search.toLowerCase())) {
      filtered = [...filtered, doc[i]];
    }
  }

  return <>

        <div className="doctors-parent">
          <div className="section-heading">FIND A JOURNAL</div >
          <div className="doctor-search-container">
            <input
              type="search"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
          {
            loading ? (<Shimmer />) : (
              <div className='doctors-container'>
                {
                  filtered.map((item) => (
                    <DoctorCard key={item._id} doc={item} search={search} />
                  ))
                }
              </div>
            )
          }
        </div >
  </>

}

export default Doctors