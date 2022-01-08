export const URLFETCH = 'https://react-e-commerce-51a58-default-rtdb.firebaseio.com/';

export const SRCIMAGE = [
  "./img/blog1.jpg",
  "./img/blog2.jpg",
  "./img/blog3.jpg",
  "./img/blog4.jpg",
]

// connect fb

// interface ResponseItems {
//   brand: string,
//   imgSource: string,
//   price: number,
//   stars: number
// }
//
// export const getData = (n: number = 0, table: string = "/producs") => {
//   fetch(URLFETCH + table + n + '.json')
//     .then(response => response.json())
//     .then((responseToJson: ResponseItems[]) => {
//       // console.log(responseToJson)
//       // setData(data.concat(responseToJson));
//       return responseToJson
//     })
//     .catch(err => console.log(err));
// };
