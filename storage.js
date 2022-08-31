// console -> Application -> Storage -> Local Storage -> file
localStorage.setItem('BUNNY', 'Hoppy')
const bunny = document.getElementById('bunny')
const bunnyName = localStorage.getItem('bunny')
bunny.innerHTML = bunnyName ? bunnyName : 'No bunny found';
localStorage.removeItem('bunny')

localStorage.setItem('user', {
    name: 'Bobby',
    age: 50
})
console.log(localStorage)