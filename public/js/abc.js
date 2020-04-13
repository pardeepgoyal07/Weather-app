console.log('Client side javascript is loaded')
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messagetwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e)=>
{
e.preventDefault()
const location = search.value
if(!location)
return console.log('Please enter a valid search')
messageOne.textContent='Loading...'
messagetwo.textContent=' '
fetch('http://localhost:3000/weather?location='+location).then((response) =>
{
response.json().then((data)=>
{
if(data.error)
{
    messageOne.textContent=data.error
}
else
{ 
    messageOne.textContent = data.location
    messagetwo.textContent = data.forecast
}
}
)})
// console.log(location)
})