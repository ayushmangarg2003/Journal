import React, { useEffect, useState } from 'react'
import { writers } from '../assets/data/doctors'
import AuthorCard from '../components/AuthorCard/AuthorCard'
import Shimmer from '../components/Shimmer/Shimmer';

const Contact = () => {
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)

  const [doc, setDoc] = useState(writers)
  useEffect(() => {
    try {
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }, [])

  let filtered = [];
  for (let i = 0; i < doc.length; i++) {
    if (doc[i].name.toLowerCase().includes(search.toLowerCase()) || doc[i].speciality.toLowerCase().includes(search.toLowerCase()) || doc[i].hospital.toLowerCase().includes(search.toLowerCase()) || doc[i].city.toLowerCase().includes(search.toLowerCase())) {
      filtered = [...filtered, doc[i]];
    }
  }

  return <>

        <div className="doctors-parent">
          {
            loading ? (<Shimmer />) : (
              <div className='doctors-container'>
                {
                  filtered.map((item) => (
                    <AuthorCard key={item._id} doc={item} search={search} />
                  ))
                }
              </div>
            )
          }
        </div >
  </>

}

export default Contact