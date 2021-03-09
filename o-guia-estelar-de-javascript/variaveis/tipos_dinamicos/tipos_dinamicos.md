# Tipos dinâmicos

* O JS é uma linguagem fracamente tipada e dinâmica

* Variáveis não precisam ter um tipo previamente definido

* Podemos mudar o conteúdo da variável

<br>

### Exemplos

*   ```js
    let clima

    console.log(clima) // undefined     
    ```

* Ver o tipo de uma variável/valor (_type of_)
    ```js
    // Exemplo 1
    let clima = ""

    console.log(typeof clima) // string

    // Exemplo 2
    let clima = true

    console.log(typeof clima) // boolean
    ```

### No JS moderno

* É mais usado o _let_ e _const_ 
* A keyword _var_ entrou em desuso