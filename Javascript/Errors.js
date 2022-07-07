const num = [3,4,7,5,9];

function verificaErro(array, number){
    try{
    if(!array && !number) throw new ReferenceError("Envie os Parametros");
    if(typeof array != 'object') throw new TypeError("Tipo de array Errado");
    if(typeof number != 'number') throw new TypeError("Tipo de numero Errado");
    if(array.length !== number ) throw new RangeError("Tamanho invalido");

    return array;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log(e.message)
        }
        if(e instanceof TypeError){
            console.log(e.message)
        }
        if(e instanceof RangeError){
            console.log(e.message)
        }
    }
}
console.log(verificaErro(num, 5)) 