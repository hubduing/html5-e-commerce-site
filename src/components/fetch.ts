const urlFetch = 'https://react-e-commerce-51a58-default-rtdb.firebaseio.com/';

interface ResponseItems {
  brand: string,
  imgSource: string,
  price: number,
  stars: number
}

export const getData = (n: number = 0, table: string = "/producs") => {
  fetch(urlFetch + table + n + '.json')
    .then(response => response.json())
    .then((responseToJson: ResponseItems[]) => {
      // console.log(responseToJson)
      // setData(data.concat(responseToJson));
      return responseToJson
    })
    .catch(err => console.log(err));
};
