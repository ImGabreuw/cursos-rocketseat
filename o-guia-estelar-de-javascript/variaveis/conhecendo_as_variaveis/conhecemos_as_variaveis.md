# Variáveis

* Nomes simbólicos para receber algum valor
* Atalhos de código
* Identificadores
* 3 palavras reservadas para criar uma variável
    * var
    * let
    * const (valor imutável, ou seja, só é possível atribuir um valor a ela apenas 1 vez)

<br>

* Exemplos
    * var
        ```js
        var clima = "Quente" // Declaração de uma variável
        console.log(clima)

        clima = "Frio" // Reatribuição de um valor para a variável
        console.log(clima)
        ```

    <br>

    * let
        ```js
        let clima = "Quente"
        console.log(clima)

        clima = "Frio"
        console.log(clima)
        ```

    <br>

    * const
        ```js
        const clima = "Quente"
        // clima = "Frio" Error

        console.log(clima)
        ```