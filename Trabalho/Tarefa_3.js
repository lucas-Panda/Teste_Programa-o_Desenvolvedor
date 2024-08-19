const frutas = ["apple", "banana", "apple", "Orange", "banana", "apple", "Orange","apple"]

function countOccurrences(frutas){
    const contagem = {}

    frutas.forEach(fruta => {
        contagem[fruta] = (contagem[fruta] || 0) + 1;
    });
    return contagem
}

const resultado = countOccurrences(frutas);
console.log(resultado)