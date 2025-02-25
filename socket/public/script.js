socket= io()


// socket.on('clients-total', (data)=>{
//     console.log(data)
// })

clientTotal = document.getElementById('client-total')

socket.on('client-total', (data)=>{
    clientTotal.innerHTML = "Total Clients: " + data
})