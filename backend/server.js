require ('dotenv').config()
const app = require('./src/app')



app.listen(3000, () =>{
  console.log('Server is running on https://ai-powered-code-reviewer-mern-backend.onrender.com')
})