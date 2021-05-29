/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

//const url = 'https://platzi-avo.vercel.app/api/avo';
const baseUrl = 'https://platzi-avo.vercel.app/';
const appNode = document.querySelector('#container')
const container = document.createElement('div')
container.className = 'grid grid-cols-3'

//API Intl
//1-Para dar formato a fechas
//2-Para dar formato a monedas

const formatPrice = (price) =>{
    const newPrice = new window.Intl.NumberFormat('es-VE', {
        style: "currency",
        currency: "VES"
    }).format(price)
    return newPrice
}

//web api
//conectarnos al server
window
    .fetch(`${baseUrl}api/avo`)
//procesar la respuesta y convertirla en JSON
    .then((respuesta) => respuesta.json())
//JSON -> Data -> Renderizar en el browser
    .then((responseJSON) => {
        const todosLosItems = []
        responseJSON.data.forEach(item => {
            //crear imagen
            const imagen = document.createElement('img')  
            imagen.src = baseUrl + item.image
            imagen.className = 'rounded-full w-30'
            //crear titulo
            const title = document.createElement('h2')
            title.textContent = item.name
            title.className = 'text-xl text-red-600'
            //crear precio
            const price = document.createElement('div')
            price.textContent = formatPrice(item.price)
            

            const seccion = document.createElement('section')   
            container.append(seccion) 
            seccion.append(imagen, title, price) 
            seccion.className = 'rounded-md shadow-md bg-gradient-to-t from-yellow-100 to-yellow-300 m-1.5 p-1.5'
            todosLosItems.push(container)  
            
        });
        appNode.append(...todosLosItems)              
    })
