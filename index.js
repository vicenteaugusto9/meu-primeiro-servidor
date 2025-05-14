const express = require('express')

const app = express()

app.get('/', (req,res)=>{
    res.send('Ola Mundo')
})

app.get('/sobre', (req,res)=>{
    res.send('esta e pagina sobre')
})

app.get('/contato', (req,res)=>{
    res.send('Entre em contato pelo email:contato@boldbyte.tech')
})

app.get('/produtos',(req,res)=>{
    res.send('Essa e a pagina de produtos ')
})
app.get('/servicos',(req,res)=>{
    res.send('Essa e a pagina de servicos ')
})

const dadosTemporario = [
    {
         id:1,
        quantidade:30 ,
        cor: "Preto",
        tamanho: "P",
        Produto:"Camisa",
        marca: "Adidas",
        price: 109.99
    },
     {
         id:2,
        quantidade:30 ,
        cor: "Rosa",
        tamanho: "P",
        Produto:"Camisa",
        marca: "Adidas",
        price: 109.99
    },
     {
         id:3,
        quantidade:30 ,
        cor: "Azul",
        tamanho: "P",
        Produto:"Camisa",
        marca: "Puma",
        price: 109.99
    },
     {
         id:4,
        quantidade:30 ,
        cor: "Preto",
        tamanho: "P",
        Produto:"Camisa",
        marca: "Adidas",
        price: 109.99
    },
     {
         id:5,
        quantidade:30 ,
        cor: "Preto",
        tamanho: "P",
        Produto:"Camisa",
        marca: "Lacoste",
        price: 109.99
    }
]


app.get('/api/dadostemporario',(req,res) =>{
    res.send(dadosTemporario)
    
})



app.get('/api/produtos', (req,res)=>{
    res.json([{
        "id":1,
        "quantidade":30 ,
        "cor": "Preto",
        "tamanho": "P",
        "Produto":"Camisa",
        "marca": "Adidas",
        "price": 109.99
    },
    {
        "id":2,
        "quantidade":15 ,
        "cor": "Vermelho",
        "tamanho": "G",
        "Produto":"Camisa",
        "marca": "Puma",
        "price": 109.99

    },
    {
        "id":3,
        "quantidade":20 ,
        "cor": "Azul",
        "tamanho": "M",
        "Produto":"Camisa ",
        "marca": "Nike",
        "price": 109.99
    }
])
})


app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});