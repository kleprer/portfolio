import React from 'react'

const ContactCard = () => {
  return (
    <div className="w-auto xl:w-[30rem] xl:w-[70rem] h-fit text-white p-[1rem] md:p-[2rem]">
        <h2 className="mb-[2.5rem]"><span className="text-[2em]  border-b-[3px] pb-[0.5rem] border-w-fit-content ">Связаться со мной</span></h2>
        <a href="http://github.com/kleprer" target="_blank" className="hover:opacity-[50%]"><p><span className="text-[1.5em] border-b-[3px] pb-[0.5rem] border-w-fit-content">github</span></p></a>
        <a href="https://x.com/kleprer2" target="_blank" className="mb-[1rem] hover:opacity-[50%]"><p className="mt-[1rem]"><span className="text-[1.5em] border-b-[3px] pb-[0.5rem] border-w-fit-content">x.com</span></p></a>
        <a href="https://t.me/purupyrypu" target="_blank" className="mb-[1rem] hover:opacity-[50%]"><p className="mt-[1rem]"><span className="text-[1.5em] border-b-[3px] pb-[0.5rem] border-w-fit-content">telegram</span></p></a>
        <a href="mailto:kleprer@gmail.com" target="_blank" className="mb-[1rem] hover:opacity-[50%]"><p className="mt-[1rem]"><span className="text-[1.5em] border-b-[3px] pb-[0.5rem] border-w-fit-content">kleprer@gmail.com</span></p></a>
    </div>
  )
}

export default ContactCard