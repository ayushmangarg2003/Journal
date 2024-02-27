import React from 'react'
import { useLocation } from "react-router-dom";
import { doctors } from '../assets/data/users';



const Single = () => {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const doc = doctors.find(x => x._id === postId)

  return (
    <div className='single-page'>
      <img src={doc.img} className='single-img' />
      {/* <div>{doc._id}</div> */}
      <div className="single-head">
        <div className='single-specialty'>📖 {doc.specialty}</div>
        <div className='single-rating'>⭐ {doc.rating}</div>
      </div>
      <div className="single-between">
        <div className='single-email'>{doc.email}</div>
        <div className='single-name'>{doc.name}</div>
        <div className="card-buttons">
          <button>Website</button>
          <button>Rights</button>
          <button>CC BY-NC-ND</button>
        </div>
      </div>

    </div >
  )
}

export default Single