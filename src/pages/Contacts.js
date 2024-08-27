import React from 'react'
import ContactCard from '../components/ContactCard'
import Layout from '../components/Layout'
const Contacts = () => {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="w-fit h-fit bg-black">
        <ContactCard />
        <Layout />
      </div>
    </div>
  )
}

export default Contacts