import express from 'express'

const app = express();

app.get('/users', () => {
    console.log('Rota acessada!');
})

app.listen(3333)