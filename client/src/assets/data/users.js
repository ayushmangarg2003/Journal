import user1 from '../images/user1.webp'
import user2 from '../images/user2.webp'
import journal1 from '../images/journal1.webp'
import journal2 from '../images/journal2.webp'

export const doctors = [
  {
    _id:"abcd",
    name: "Journal of Exceptional Discovery on Education",
    email:"Ayushman Garg University",
    specialty:"Education",
    rating:4.5,
    img: journal2,
  },
  {
    _id:"abce",
    name: "Journal of New Results in Science",
    email:"Tokat Gaziosmanpasa University",
    specialty:"Science",
    rating:4.5 ,
    img: journal1,
  },
];

export const writers = [
  {
    name: "Ayushman Garg",
    specialty: "Science" ,
    rating: 9.5,
    img: user1,
    patients: 100,
    city: "India",
  },
  {
    name: "Pranika",
    specialty: "Snapchat" ,
    rating: 1.5,
    img: user2,
    patients: 10,
    city: "India",
  },
]



