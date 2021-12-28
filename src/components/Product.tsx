import React from 'react';

export const Product = () => {
  const url = 'https://react-e-commerce-51a58-default-rtdb.firebaseio.com/';
  async function getData() {
    const response = fetch(url + 'producs' + '.json')
    const data = await response.then(response => response.json()).catch((err: any) => console.log(err))
    // RenderItems(data)
    return data
  }

  const RenderItems = (data: []) => {
    data.forEach((item: { imgSource: string; brand: string; price: number; star: number }) => {
      return (
        <>
          <div className="pro">
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
        </>
      );
    });
  };

  return (
    <>
      <section className="product section-p1">
        <h2>Featured Products</h2>
        <p>Summer collaction new morden design</p>
        <div className="pro-container">
        </div>
      </section>
    </>
  );
};
