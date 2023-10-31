class pilha { 
    constructor(){
        this.items = [];
       }
      
    push(value){
        this.items.push(value)
    }
   
    pop(){
        this.items.pop();
    }
   
    isEmpty(){
        return(this.size() == 0 );

    }
   
    size(){
        return(this.items.length)
    }
   
    peek(){
        return (this.items[this.size()-1])
    }
}
const p = new pilha();
const positivos = new pilha();
p.push(30);
p.push(-15);
p.push(20);
p.push(-25);

console.log (p);
// topo = -25
console.log(p.peek())
p.pop();
// items
console.log (p);
// topo  = 20
console.log(p.peek());
positivos.push(p.peek());
// retira 20
p.pop();
// retira -15
p.pop();
//pegando o valor de 30
positivos.push(p.peek());
// retirando 30
p.pop();
console.log(p);
console.log(positivos);






