

function getUser(name){
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => users.filter(user => user.name.startsWith(name)));
}

async function fetchUserData(name){

    try{
        const Usuario = await getUser(name);

    if (Usuario.length > 0){
        
        Usuario.forEach(user => console.log(user.name))
    } else{
        console.log("Nenhum usuario com essa letra foi encontrado!")
    }
    } catch(err) {
        console.log('Erro:',{err})
    }
}

fetchUserData("C")