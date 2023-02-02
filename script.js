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

var caminho = "5km";
var corro = "2Km";

if (caminho === "5km" && corro === "2Km") {
  console.log("passo o di bem");
}

var levanto = "cedo";

if (levanto === "cedo" || levanto === "antes das 8h") {
  console.log("saio tranquilo");
}

var trabalhoTerminado = false;
var compromisso = false;

if (!trabalhoTerminado || !compromisso) {
  console.log("saio tarde");
}
