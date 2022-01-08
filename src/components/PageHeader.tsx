import React from "react";
interface Props {
  title: string,
  detail: string,
  classSection: string

}
export const PageHeader = (props: Props) => {
  return (
    <section className={props.classSection}>
      <h2>{props.title}</h2>
      <p>{props.detail}</p>
    </section>
  )
}