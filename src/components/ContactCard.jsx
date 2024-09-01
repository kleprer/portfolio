import React from 'react'
import {useTranslation} from 'react-i18next';

const ContactCard = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="w-auto md:w-[50rem] xl:w-[70rem] min-h-[32rem]  text-white p-[1rem] md:p-[2rem]  sm:text-left text-center">
        <h2 className="mb-[2.5rem]"><span className="text-[2em]  border-b-[3px] pb-[0.5rem] border-w-fit-content ">{t("contact.message")}</span></h2>
        <a href="http://github.com/kleprer" target="_blank" className="cursor-default"><p className="mt-[3rem] sm:mt-[1rem]"><span className="cursor-pointer text-[1.5em] border-b-[3px] pb-[0.5rem] border-w-fit-content hover:opacity-[50%]">github</span></p></a>
        <a href="https://t.me/purupyrypu" target="_blank" className="cursor-default"><p className="mt-[3rem] sm:mt-[1rem]"><span className="cursor-pointer text-[1.5em] border-b-[3px] pb-[0.5rem] border-w-fit-content hover:opacity-[50%]">telegram</span></p></a>
        <a href="mailto:kleprer@gmail.com" target="_blank" className="cursor-default"><p className="mt-[3rem] sm:mt-[1rem]"><span className="cursor-pointer text-[1.5em] border-b-[3px] pb-[0.5rem] border-w-fit-content hover:opacity-[50%]">kleprer@gmail.com</span></p></a>
    </div>
  )
}

export default ContactCard