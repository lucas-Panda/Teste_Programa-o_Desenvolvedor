const users = [
    { id: 1, name: 'Lucas', age: 21, isActive:true},
    { id: 2, name: 'Guilherme', age: 19, isActive:true},
    { id: 3, name: 'Victor', age: 35, isActive:false},
    { id: 4, name: 'Pedro', age: 20, isActive:false},
    { id: 5, name: "Eduardo", age:19, isActive:false },
    { id: 6, name: 'Alice', age: 37, isActive:true}
]
var continuar = "sim";
var resposta = require('readline-sync')

while (continuar !== "sair"){

    console.log("Opções: ")
    console.log("1- Usuarios Ativos.....")
    console.log("2- Todos os Usuarios...")
    console.log("3- Usuarios Inativos...")
    console.log("Digite Sair caso queira finalizar.")

    continuar = resposta.question("Escolha uma Alternativa! ");
    
    if(continuar == 1) {
        let Usuarios = users
        .filter(user => user.isActive)
        .map(users =>({
            id: users.id,
            name: users.name,
        }));
        Usuarios.sort((a, b) =>{
            if (a.name < b.name){
                return -1;
            } else{
                return true;
            }
        });
        console.log(Usuarios)
    };
        if(continuar == 2){
            let Usuarios2 = users
            .map(users =>({
                id: users.id,
                name: users.name
            }));

            Usuarios2.sort((a, b) =>{
                if (a.name < b.name){
                    return -1;
                } else{
                    return true;
                }
            });

            console.log(Usuarios2)
        }
        if(continuar == 3){
            let Usuarios3 = users
            .filter(user => user.isActive == false)
            .map(users=> ({
                id: users.id,
                name: users.name
            }));

            Usuarios3.sort((a, b) =>{
                if (a.name < b.name){
                    return -1;
                } else{
                    return true;
                }
            });
            
            console.log(Usuarios3)
        }
    
}