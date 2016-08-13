# HTTP com Observables

## Diferenças entre Observables e Promises
Observables são uma nova forma que está vindo com o ES7 (ES2016) que nos ajudará a lidar com ações e eventos assíncronos. Observables é similar as Promises mas com grandes diferenças que as fazem melhores. As diferenças são:

### Observables
- Conseguem tratar multiplos valores ao longo do tempo;
- São canceláveis;

### Promises
- São chamadas uma vez e retornarão um único valor;
- Não são canceláveis;

### Fonte
Exemplo utilizando Observables para efetuar requisições HTTP (exemplo retirado do site https://scotch.io/tutorials/angular-2-http-requests-with-observables)