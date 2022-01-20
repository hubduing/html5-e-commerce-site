import React from "react";
import {PageHeader} from "../components/PageHeader";
import {ContactDetail} from "../components/ContactDetail";
import {FormDetail} from "../components/FormDetails";
import {NewsLatter} from "../components/NewsLatter";

export const Contact = () => {
  return (
    <>
      <PageHeader
        title="#let's_talk"
        detail="Leave a message, we love to hear from you!"
        classSection="page-header about-header"
      />
      <ContactDetail/>
      <FormDetail/>
      <NewsLatter/>
    </>
  )
}
