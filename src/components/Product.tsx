import React, {useState, useEffect} from 'react';

interface DataResponse {
  imgSource: string;
  brand: string;
  price: number;
  star: number;
}

// @ts-ignore
export function Product (props) {
  let [data, setData] = useState([])

  useEffect(() => {
    getData(props.prod, props.table);
  }, [props.prod])

  const urlFetch = 'https://react-e-commerce-51a58-default-rtdb.firebaseio.com/';
  const getData = (n: number, table: string) => {
    fetch(urlFetch + table + n + '.json')
      .then(response => response.json())
      .then((responseToJson) => {
        setData(data.concat(responseToJson));
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <section className="product section-p1">
        <h2>Featured Products</h2>
        <p>Summer collaction new morden design</p>
        <div className="pro-container">

         {data.map((item: DataResponse, index: number) => {
            return(
              <div className="pro" key={index}>
                <img src={item.imgSource} alt=""/>
                <div className="des">
                  <span>{item.brand}</span>
                  <h5>Cartoon astronaut t-shirts</h5>
                  <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4>${item.price}</h4>
                </div>
                <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
              </div>
            )
          })}

       </div>
      </section>
    </>
  );

};
