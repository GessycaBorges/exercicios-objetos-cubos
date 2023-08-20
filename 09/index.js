//Encontrando Carlos na multidão
const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
];

for (let item of participantes){
    if (item.nome === "Carlos"){
        posicao = participantes.indexOf(item) + 1;
        console.log(`Galera... O ${item.nome} está na posição ${posicao}, corre lá!`)
    }
}