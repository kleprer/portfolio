import React from 'react'
import ContactCard from '../components/ContactCard'

const Contacts = () => {
  return (
    <div className="w-screen bg-black">
      <div className="w-fit h-fit bg-black">
        <ContactCard />
        {/* <Layout /> */}
      </div>
    </div>
  )
}

export default Contacts