import express from 'express'

const app = express();
app.get('/ads', (request, response) => {
  return response.json([
    { "id": 1, name: "Anuncio primero" },
    { "id": 2, name: "Anuncio segundo" },
    { "id": 3, name: "Anuncio tercero" },
   
  ])
})

app.listen(3333)