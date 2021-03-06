import React, { useEffect, useState } from 'react';
import {URLFETCH} from './fetch';

interface FeaturesReponse {
  imgSource: string;
  title: string
}

// @ts-ignore
export const Features = ({table}) => {

  let [data, setData] = useState([])

  useEffect(() => {
    getData(table);
  }, [table])

  const getData = (table: string) => {
    fetch(URLFETCH + table + '.json')
      .then(response => response.json())
      .then((responseToJson) => {
        setData(data.concat(responseToJson));
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <section className="features section-p1">
        {data.map((item: FeaturesReponse, index: number) => {
          return(
            <div className="fe-box" key={index.toString()}>
              <img src={item.imgSource} alt="features"/>
              <h6>{item.title}</h6>
            </div>
          )
        })}
      </section>
    </>
  )
}
