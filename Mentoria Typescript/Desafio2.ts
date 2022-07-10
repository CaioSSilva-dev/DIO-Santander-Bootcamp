// Como podemos melhorar o esse código usando TS? 

/*
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/

enum Proffissao {
    Atriz,
    Padeiro
}
interface Pessoa{
    nome: string,
    idade: number,
    profissao: Proffissao,
}
const Maria: Pessoa = {
    nome: 'Maria',
    idade: 64,
    profissao: Proffissao.Atriz,
}
const Roberto: Pessoa = {
    nome:'Roberto',
    idade:1,
    profissao: Proffissao.Padeiro
}
const Laura: Pessoa = {
    nome:'Laura',
    idade:1,
    profissao: Proffissao.Atriz
}
const Carlos: Pessoa = {
    nome:'Carlos',
    idade:1,
    profissao: Proffissao.Padeiro
}