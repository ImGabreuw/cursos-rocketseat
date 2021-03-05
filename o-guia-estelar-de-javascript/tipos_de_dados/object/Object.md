# Object

* Objeto (dado estrutural)
* Propriedades <=> Atributos
* Funcionalidades <=> Métodos

* Sintaxe
    ```js
    {
        propriedade: "valor"
    }
    ```

<br>

* Exemplo
    ```js
    console.log({}) 
    // OUTPUT: Object {}

    console.log({
        // ATRIBUTOS
        name: "Gabriel",
        idade: 16
        // MÉTODOS
        andar: funcion() {
            console.log('andar')
        }
    }) 
    /* OUTPUT: Object {
        name: "Gabriel",
        idade: 16,
        andar: funcion() {
            console.log('')
        }
    */
    
    ```