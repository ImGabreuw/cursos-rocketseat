# Scope (escopo)

* Escopo determina a visibilidade de alguma variável no JS.

# Block statement
```js
// começo
{
    // código
}
// fim
```

* Variável global = visível no arquivo inteiro
* Variável local = visível apenas no no bloco

<br>

* O bloco, também criará um novo escopo. Chamamos de `block-scoped`

## var

* É global e poderá funcionar fora de uma escopo de bloco
    ```js
    console.log('> existe x antes do bloco? ', x)

    {
        var x = 0
    }

    console.log('> existe x depois do bloco? ', x)

    ```
* "Por baixo dos panos" (_hoisting_)
    ```js
    var x // hoisting (elevação)

    console.log('> existe x antes do bloco? ', x)

    {
        x = 0
    }

    console.log('> existe x depois do bloco? ', x)
    ```
