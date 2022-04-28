import { graphql } from "msw";
import { faker } from "@faker-js/faker";
import localforage, { getItem, setItem } from "localforage";

// created fake data of length 20
const products = Array.from({ length: 20 }, () => ({
  name: faker.commerce.productName(),
  price: parseInt(faker.commerce.price()),
  rating: faker.datatype.number(5),
  catergory: faker.commerce.product(),
  image: faker.image.image(300, 300, true),
  id: faker.datatype.uuid(),
  description: faker.commerce.productDescription(),
}));

//for categories to show option in NewProducts
const categoryArr = ["jeans", "t-shirts", "shirt", "shoes"];

export const handlers = [
  graphql.operation((req, res, ctx) => {
    return res(
      ctx.errors([
        {
          message: "Access denied",
          positions: [1, 92],
        },
      ])
    );
  }),
  // Handles a POST /login request
  //   rest.post('/login', null),
  // Handles a GET /user request

  //it's like a backend whatever data will be generated here and will fetch in App
  graphql.query("GetProducts", (req, res, ctx) => {
    return res(
      // sending data as an object items: products, total:products.length, success: true
      ctx.data({ items: products, total: products.length, success: true })
    );
  }),

  graphql.query("GetCategories", (req, res, ctx) => {
    return res(
      // sending data as an object to select items: products, total:products.length, success: true
      ctx.data({ items: categoryArr, success: true })
    );
  }),

  //for post request set data to indexed Db localforage
  graphql.mutation("AddProducts", async (req, res, ctx) => {
    console.log(req, "check request");
    //set data to localforage id and req.body
    await localforage.setItem(req.id, JSON.stringify(req.body));
    console.log(getItem, "handlers");
    return res(ctx.data({ success: true }));
  }),

  //for new products getting data from indexdDB, implemented localforage iterate
  graphql.query("GetNewProducts", async (req, res, ctx) => {
    //cretaed arr variable to push indexedDB data into it
    const arr: any = [];
    await localforage.iterate(function (value: string, key, iterationNumber) {
      //parsed values of indexedDb
      const parsedVal = JSON.parse(value);
      parsedVal.id = key;
      arr.push(parsedVal);
      // console.log([key, value]);
    });
    console.log(arr);
    return res(
      //merge products and arr which hold data of indexedDB localforage
      ctx.data({ items: [...products, ...arr], success: true })
    );
  }),
];
