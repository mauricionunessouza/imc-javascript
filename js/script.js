let listaPessoas;


if (localStorage.getItem("listaPessoas")== null) {
listaPessoas =[];
    
}else{
    listaPessoas = JSON.parse(localStorage.getItem("listaPessoas"));
}
console.log(listaPessoas);
exibeResultado();

function geraSituacao(imc) {
    if (imc < 18.5) {
        return "Magreza severa";
    }else if(imc>= 18.5 && imc <= 24.99){
        return "Peso Normal";
    
    }else if(imc>= 25 && imc <= 29.99){
        return "Acima do peso";
    
    }else if(imc>= 30 && imc <= 34.99){
        return "obesidade I";
    
    }else if(imc>= 35 && imc <= 39.99){
        return "obesidade II (severa)";
    
    }else{
        return "Cuidado!!!";
    }

}
function calculaIMC(a,p) {
    return p / (a*a);
   
    }
function calcular() {

    let nome = document.getElementById("nome").value;
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
  
    console.log(nome);
    console.log(altura);
    console.log(peso);

    if (nome =="" || isNaN(altura) || isNaN(peso)) {
        alert("Preencha todos os campos!");
    }else{

        let imc = calculaIMC(altura,peso);
        
        let situacao = geraSituacao(imc);  
        let pessoa = {};
        pessoa.nome= nome;
        pessoa.altura = altura;
        pessoa.peso = peso;
        pessoa.imc = imc;
        pessoa.situacao =situacao;
        //
        listaPessoas.push(pessoa);
        localStorage.setItem("listaPessoas",JSON.stringify(listaPessoas));
        }
    //exibe resultado de pessoas
     exibeResultado();

    }

function exibeResultado() {
    let template ="";

    for (let i = 0; i < listaPessoas.length; i++) {
        template += `<tr>
        <td>${listaPessoas[i].nome}</td>
        <td>${listaPessoas[i].altura}</td>
        <td>${listaPessoas[i].peso}</td>
        <td>${listaPessoas[i].imc}</td>
        <td>${listaPessoas[i].situacao}</td>
    </tr> `;

    }


document.getElementById("cadastro").innerHTML  = template;
}