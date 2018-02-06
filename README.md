# Beer Selector - Fractal Frontend Challenge

## Descrição
Este repositório contém o projeto solicitado no teste para desenvolvedores Frontend da empresa Fractal Tecnologia. O projeto pode ser acessado com o Link: https://fractal-challenge.surge.sh/

## Pré-requisitos
Para rodar o projeto será necessário possuir:
-NodeJs
-NPM ou Yarn(recomendado)

## Instalação
Para instalar o projeto, clone esse repositório com o comando: 
### `git clone https://github.com/leomendesm/fractal-challenge`

Entre na pasta com o comando:
### `cd fractal-challenge`

E instale as dependências do projeto com o comando:
### `yarn`
ou
### `npm install`

## Comandos para rodar o projeto

No diretório do projeto, os seguintes comandos podem ser executados:

### `yarn start`
Inicia o applicativo no modo de desenvolvimento, para acessar digite no seu navegador: localhost:3000 ou seu_ip_local:3000

### `yarn build`
Compila todos seus arquivos para uma versão final do projeto, que está localizada na pasta build, os arquivos passam por um processo de minificação e optimização para melhor performance.

### `yarn test`
Executa todos os testes no modo "watch"(observa cada mudança) interativo para que se possa filtar testes específicos. 

### `yarn test --coverage`
Exibe uma tabela contendo a cobertura de testes pra todos os arquivos do projeto.

### `yarn lint`
Exibe erros vinculados ao padrão standard de código, como usos de ponto e vírgula(;) e espaçamento(2 espaços, sem espaços adicionais).

## Observações
- Testes e Code Coverage utilizam a biblioteca Jest (padrão do create-react-app)
- Code Coverage está acima de 70%, apenas faltando testes em alguns IFs específicos de alguns componentes
- As rotas utilizam a lib React Router
- O estado da aplicação é mantido utilizando a lib Redux
- As requisições HTTP/HTTPS utilizam a lib Axios
- O CSS é escrito em SASS e compilado automaticamente pelo webpack e mantido pelo POST CSS
- O deploy é feito com a ferramenta Surge, sendo ele automatizado a cada push para o Github por meio do Travis CI