const express = require('express')

const app = express()

app.get('/',(request,response)=>{
    response.send('Hola get')
})
app.get('/',(request,response)=>{
    response.send('Hola get')
})
app.post('/',(request,response)=>{
    response.send('Hola Post')
})
app.put('/',(request,response)=>{
    response.send('Hola Put')
})
app.patch('/',(request,response)=>{
    response.send('Hola Patch')
})
app.delete('/',(request,response)=>{
    response.send('Hola delete')
})

/*
*
*
*     FUNCIONALIDAD
*
*/


app.listen(3000,()=>{
    console.log('listening on port 3000')
})