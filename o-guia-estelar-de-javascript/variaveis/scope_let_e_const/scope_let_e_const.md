# Scope _let_ e _const_

* são locais e só funcionam no escopo onde foram criadas

    ```js
    // console.log('> exite y antes do bloco? ', y) erro de referência

    {
        let y = 0
        console.log('> existe y ', y)
    }

    // console.log('> existe y depois do bloco? ', y) erro de referência
    ```

    <br>

    ```js
    let y = 1

    {
        y = 0
        console.log('> existe y ', y) // 0
    }

    console.log('> existe y ', y) // 0
    ```

    <br>

    ```js
    const y = 1

    {
        // y = 0 Erro de atribuição
        console.log('> existe y ', y) // 1
    }

    console.log('> existe y ', y) // 1
    ```

    <br>

    ```js
    const y = 1 // Variável no escopo 1

    {
        const y = 0 // Variável no escopo 2
        console.log('> existe y ', y) // 0
    }

    console.log('> existe y ', y) // 1
    ```