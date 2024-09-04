import React from 'react'
import {useTranslation} from 'react-i18next';

const ContactCard = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="w-fit md:w-[50rem] xl:w-[70rem] min-h-[32rem]  text-white flex-col  sm:text-left text-center">
        <h2 className="mb-[2.5rem] "><span className="text-[1.5em] sm:text-[2em]  border-b-[3px] pb-[0.5rem] border-w-fit-content ">{t("contact.message")}</span></h2>
        <p className="mt-[3rem] text-[1.2em] sm:text-[1.5em] md:text-[1.7em]"><a href="http://github.com/kleprer" target="_blank" className="cursor-default"><span className="cursor-pointer  border-b-[3px] pb-[0.5rem] border-w-fit-content hover:opacity-[50%]">github</span></a></p>
        <p className="mt-[3rem] text-[1.2em] sm:text-[1.5em] md:text-[1.7em]"><a href="https://t.me/purupyrypu" target="_blank" className="cursor-default"><span className="cursor-pointer  border-b-[3px] pb-[0.5rem] border-w-fit-content hover:opacity-[50%]">telegram</span></a></p>
        <p className="mt-[3rem] text-[1.2em] sm:text-[1.5em] md:text-[1.7em]"><a href="mailto:kleprer@gmail.com" target="_blank" className="cursor-default"><span className="cursor-pointer  border-b-[3px] pb-[0.5rem] border-w-fit-content hover:opacity-[50%]">kleprer@gmail.com</span></a></p>
    </div>
  )
}

export default ContactCard