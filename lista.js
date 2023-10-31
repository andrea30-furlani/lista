class lista {
    constructor() 
        {
        this.items = []; 
        this.size = 0; // tamanho da lista: lenght / count 
        this.ultimo = 0;
        }
        // metodos: inserir, remover, size, first, last, empty
    insert(valor){
        this.items.push(valor);
        this.size = this.items.length;
        this.ultimo = this.items.length - 1;
    }

    delete(valor){
        let i ;
        let posicao = -1;
        if (this.isempty) { 
        for ( i=0; i < this.size; i++) {
            if ( valor == this.items[i] ){
                posicao = i;
            }   
        }
            if ( posicao > -1 ){
                this.items.splice(posicao,1);
                this.size = this.items.length;
                this.ultimo = this.size - 1;
            } 
    }
}



    first()
    {
        if (this.isempty){
            return this.items[0];
        } else {
            return "sem elementos";
    }
        
    }

    last()
    {
        if ( this.isempty) {
            return this.items[this.ultimo]
        }     else {
        return "sem elementos";
    }
}

    isempty()
    {
        return this.items[0];
    }
}

    const mylista = new lista();
    mylista.insert("a") ;
    mylista.insert("b") ;
    mylista.insert("c") ;
    mylista.insert("d") ;
    mylista.insert("e") ;
    mylista.insert("f") ;
    mylista.insert("m") ;

    console.log("objeto apos inserções"); 
    console.log ( mylista );
    console.log ("");
    mylista.delete( " apagamento o elemtno [d] da lista:")
    console.log ("d");
    console.log("objeto apos o uso do metodo delete() :") 
    console.log ( mylista );
    console.log ("");
    console.log ("mostrando primeiro e ultimo elemento da lista:" )
    console.log ( mylista.first() );
    console.log ( mylista.last() );

   
