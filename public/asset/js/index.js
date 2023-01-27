// const maxOccupants = 3
// const minOccupants = maxOccupants - 2

// // console.log(minOccupants);
// for(let i = maxOccupants;i >= minOccupants;i--){
//     const getOccupants = document.querySelector('#occupant')
//     const getOccupantsOptions = document.createElement('option')
//     getOccupantsOptions.textContent = i
//     getOccupantsOptions.value = i
//     getOccupants.appendChild(getOccupantsOptions)
// }

const getOccupants = document.querySelector('#occupant')
getOccupants.addEventListener('blur', function(){
    const getOccupantsValue = document.querySelector('#occupant').value
    if(getOccupantsValue === '' || getOccupantsValue > 3){
        html.displayError()
    }
})

const form = document.querySelector('form')
// form.addEventListener('submit', function(){

// })
class Occupant{
    displayError(){
        const error = document.querySelector('.error')
        error.style.display = 'block'
    }
}
const html = new Occupant()

const secYes = document.querySelector('#securityyes')
const secNo = document.querySelector('#securityno')
secYes.addEventListener('click', function(){
    if(secYes.checked === true){
        secNo.checked = false
    }
})
secNo.addEventListener('click', function(){
    if(secNo.checked === true){
        secYes.checked = false
    }
})
const copy = document.querySelector('#copy')
const year = new Date().getFullYear()
copy.innerHTML = `${year}`;

const bar = document.querySelector('.fa-bars');
bar.addEventListener('click', function(){
    const taxi = document.querySelector('.taxiMenu'); 
    taxi.classList.toggle('showMenu')
});