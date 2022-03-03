import { rest } from 'msw'
export const handlers = [
  // Handles a POST /login request
  rest.post('/login', null),
  // Handles a GET /user request
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