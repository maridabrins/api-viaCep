// const nome = document.getElementById("nome")
// const id = document.getElementById("id")
// const username = document.getElementById("username")
// const email = document.getElementById("email")
// const endereco = document.getElementById("endereco")
// const rua = document.getElementById("rua")
// const zipcode = document.getElementById("zip")

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res)=> res.json() ) //esse cara transforma e acessa os elementos em JSON
//     .then((data)=> {
//         console.log(data)
//         id.innerText = data[0].id
//         nome.innerText = data[0].name
//         username.innerText = data[0].username
//         email.innerText = data[0].email
//         endereco.innerText = data[0].address
//         rua.innerText = data[0].address.street
//         zipcode.innerText = data[0].address.zipcode
       
//     } )
//     .catch((err)=>{
//         nome.innerText = "Não encontrado"// só para tratar um possível erro
//     })


let btnBuscar = document.getElementById("btn-buscar")
const logradouro = document.getElementById("logradouro")
const bairro = document.getElementById("bairro")
const regiao = document.getElementById("regiao")
const estado = document.getElementById("estado")


btnBuscar.addEventListener("click", function(event){

    event.preventDefault() //a mensagem
    let cep = document.getElementById("input-cep").value

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res)=> res.json())
        .then((data)=> {
            logradouro.innerText = data.logradouro
            bairro.innerText = data.bairro
            regiao.innerText = data.regiao
            estado.innerText = data.estado
        })
       
        .catch((err)=> console.log(err))

})

