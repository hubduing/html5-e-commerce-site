import React from 'react';

export const RenderItems = (data: []) => {
  data.forEach((item: { imgSource: string; brand: string; price: number; star: number }) => {
    // const prodItem = document.createElement('div');
    // prodItem.classList.add('pro');
    // prodItem.innerHTML = ``;
    return (
      <>
        <div className="pro">
          <img src={item.imgSource} alt=""/>
          <div className="des">
            <span>adidas</span>
            <h5>Cartoon astronaut t-shirts</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4>$78</h4>
          </div>
          <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
        </div>
      </>
    );
  });
};
