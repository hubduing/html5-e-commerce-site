const getData = () => {
  const url = 'https://react-e-commerce-51a58-default-rtdb.firebaseio.com/';

  const renderItems = (data: object) => {
    // @ts-ignore
    data.forEach((item: { imgSource: string; }) => {
      const prodItem = document.createElement('div');

      prodItem.classList.add('pro');
      prodItem.innerHTML = `
      <div className="pro">
        <img src=${item.imgSource} alt=""/>
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
    `;
    })
  };

  fetch(url + 'producs' + '.json')
    .then(response => response.json())
    .then(data => {
      renderItems(data);
    })
    .catch(err => console.log(err));
}
export default getData();
