let exp;
let operador = false;

function inserir(num){
   document.calc.display.value += num;
   if(num == '+' || num == '-' || num == '*' || num == '/' || num == '.')
      operador = true;
}

function atualizaExpressao(){
   exp = document.calc.display.value;
}

function inverteSinal(){
   atualizaExpressao();
   if(exp && operador == false)
      document.calc.display.value = exp * -1;
}

function raizQuadrada(){
   atualizaExpressao();
   if(exp)
      document.calc.display.value = Math.sqrt(exp);
}

function limpar(){
   document.calc.display.value = "";
   operador = false;
}

function resultado(){
   atualizaExpressao();
   if(exp){
      operador = false;
      try{
         document.calc.display.value = eval(exp);
         if(eval(exp) == "Infinity"){
            alert("Impossível dividir por 0!");
            limpar();
         }
      } 
      catch(e){
         alert("Erro! Operação inválida");
         limpar();
      }
   }
}

window.addEventListener("keydown", e=>{
   if(e.key == '0') return inserir(0);
   if(e.key == '1') return inserir(1);
   if(e.key == '2') return inserir(2);
   if(e.key == '3') return inserir(3);
   if(e.key == '4') return inserir(4);
   if(e.key == '5') return inserir(5);
   if(e.key == '6') return inserir(6);
   if(e.key == '7') return inserir(7);
   if(e.key == '8') return inserir(8);
   if(e.key == '9') return inserir(9);
   if(e.key == ',') return inserir('.');
   if(e.key == '+') return inserir('+');
   if(e.key == '-') return inserir('-');
   if(e.key == '*') return inserir('*');
   if(e.key == '/') return inserir('/');
   if(e.key == 'Escape') return limpar();
   if(e.key == 'Enter') return resultado();
   if(e.key == '.') return inserir('.');
})