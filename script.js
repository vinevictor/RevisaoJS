// 1.1

// var soma = 5 + 5;
// var numeroNegativo = -5 + -3;
// var div = 80 / 3;
// var rest = 80 % 3;
// soma + 5;
// soma - 3;

// 1.2

// var fraseUm = "caminho_5km&&corro_2Km, passo_o_dia_bem";
// var fraseDois = "levanto_cedo||antes_das_8h, saio_tranquilo";
// var fraseTres = "!termino_o_trabalho||!tenho_compromisso,saio_tarde";

// 1.3

// var caminho = "5km";
// var corro = "2Km";

// if (caminho === "5km" && corro === "2Km") {
//   console.log("passo o di bem");
// }

// var levanto = "cedo";

// if (levanto === "cedo" || levanto === "antes das 8h") {
//   console.log("saio tranquilo");
// }

// var trabalhoTerminado = false;
// var compromisso = false;

// if (!trabalhoTerminado || !compromisso) {
//   console.log("saio tarde");
// }

// desafio tenario

// var hora = 1;
// var minutos = 0;

// hora > 0 ? (minutos = hora * 60) : (minutos = 60);

// 1.4

// var lista = [12, 6, 9, 42, 11, 102, 44, 15];
// var soma = 0;

// for (var i = 0; i < lista.length; i++) {
//   soma += lista[i];
// }
// console.log(soma);

// soma = 0;

// var contador = 0;
// while (contador < lista.length) {
//   soma += lista[contador];
//   contador++;
// }
// console.log(soma);

// var soma = 0;
// var contador = 0;

// do {
//   soma += lista[contador];
//   contador++;
// } while (contador < lista.length);

// console.log(soma);
// var teste = true;
// for (var i = 0; i < lista.length; i++) {
//   for (var x = 2; x < lista[i]; x++) {
//     if (lista[i] % x == 0 || lista[i] % (x + 1) == 0) {
//       break;
//     } else {
//       teste = false;
//     }
//   }
//   console.log(lista[i]);
//   if (!teste) {
//     break;
//   }
// }

// contador = 0;
// while (contador < lista.length) {
//   if (lista[contador] >= 40 && lista[contador] <= 50) {
//     contador++;
//     continue;
//   }
//   console.log(lista[contador]);
//   contador++;
// }

// 1.5
var username;
var password;

function getUserNamePassword() {
  username = prompt("Coloque o nome de usuario que deseja:");
  password = prompt("Coloque a senha desejada:");
}

function login(usernameLogin, passwordLogin) {
  usernameLogin = prompt("Nome de usuario");
  passwordLogin = prompt("Senha");
  username === usernameLogin && password === passwordLogin
    ? alert("Logado com sucesso...")
    : alert("Nome de usuario/Senha errado...");
}
