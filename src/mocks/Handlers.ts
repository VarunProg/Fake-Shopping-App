import { rest } from 'msw'
import { faker } from '@faker-js/faker';
export const handlers = [
  // Handles a POST /login request
//   rest.post('/login', null),
  // Handles a GET /user request

  //it's like a backend whatever data will be generated here and will fetch in App 
  rest.get('/user', (req, res, ctx) => {
     return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
          name: 'Varun',
        })
    
    )
  }),
]