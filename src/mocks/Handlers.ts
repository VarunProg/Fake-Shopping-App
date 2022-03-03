import { rest } from "msw";
import { faker } from "@faker-js/faker";

// created fake data of length 20
const products = Array.from({ length: 20 }, () => ({
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  rating: faker.datatype.number(5),
  catergory: faker.commerce.product(),
  image: faker.image.image(200, 200, true),
  id: faker.datatype.uuid(),
}));

export const handlers = [
  // Handles a POST /login request
  //   rest.post('/login', null),
  // Handles a GET /user request

  //it's like a backend whatever data will be generated here and will fetch in App
  rest.get("/products", (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      //   ctx.status(200),
      ctx.json({ items: products })
    );
  }),
];
