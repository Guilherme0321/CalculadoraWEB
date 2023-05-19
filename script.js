const size = document.querySelector("#text");
var sizeInput = size.offsetWidth;
size.style.fontSize = sizeInput/10 + 'px';
let continuar;
document.querySelector("#back").addEventListener('mousedown', () =>{
    continuar = setInterval(backspace,500);
});
document.querySelector("#back").addEventListener('mouseup', () =>{
    clearInterval(continuar);
});

function addT(txt) {
document.querySelector("#text").value += txt;
}
function limpar(){
  document.querySelector("#text").value = '';
}

function backspace(){
    var numeros = document.querySelector("#text").value;
    var Nline = numeros.slice(0,-1);//o -1 siginifica o ultimo caractere e -2 o penultim
    document.querySelector("#text").value = Nline;
}
function mostrar(){
    event.preventDefault();
    var r = resul();
    document.querySelector("#tela > p").innerText = r;
}
function resultado(){
    document.querySelector("#tela > p").innerText = '';
    var r = resul();
    document.getElementById('text').value = r;
}
function resul(){
  const numeros = document.querySelector("#text").value;
  if(teste(numeros)==true){
    try{
      var r = eval(numeros);
        return r;
    }catch(Error){
      console.log(Error)
    }
  }else{
    let r = document.querySelector("#text").value;
    return r;
  }
}
function teste(i){
  var t = false;
  for(let x = 0; x < i.length; x++){
    if(i[x] == '+' || i[x] == '-' || i[x] == '*' || i[x] =='/'){
        if(i[x+1]!= null){
      t = true;
        }
    }
  }
  return t;
}
