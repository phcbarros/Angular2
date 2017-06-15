# Rotas

O *_Angular Router_* permite a navegação de um view para outra por meio das ações do usuário.

## Introdução

O modelo atual para navegação do navegador é:

* Digita a URL na barra de endereço e navega até a página
* Clica em um link e navega até a página
* Clica no botão de voltar ou avançar do navegador e navega para traz ou para frente do seu histórico

 O Angular **_Router_** implementa esse mesmo mecanismo,interpretando a URL como uma instrução. É possível passar parâmetros opcionais, você pode ligar um link a uma rota, até mesmo navegar imperativamente quando um usuário clica em um botão ou seleciona algum item em uma combobox. O Router grava toda essas ações no histórico do navegador fazendo com que os botões de voltar e avançar funcionem corretamente.

### \<base href>
Usada para dizer ao router como deverá compor a url de navegação. Esse elemento *_\<base>_* deve ser adicionado no index.html da aplicação como primeiro filho da tag *_\<head>_*.

```html
<!-- index.html -->
<head>
    <base href="/">
</head>
```