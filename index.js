let name = 'Omitiran Israel '
let height = '6ft(184cm)'
let country = 'Nigeria'

document.write(name + ' ' + height + ' ' + country)


// Or you can use this to specify the html tags you want it to have
let secMeth = document.createElement('p')
secMeth.innerText = `This is another method to do,👇 it using 'document.createElement' 👇`
document.body.appendChild(secMeth)


let names = document.createElement('h1')
names.innerText = 'Omitiran Israel'
document.body.appendChild(names)

let heights = document.createElement('h2')
heights.textContent = '6ft(184cm)'
document.body.appendChild(heights)

let Country = document.createElement('h3')
Country.innerHTML = 'Nigeria'
document.body.appendChild(Country)