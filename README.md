# TileRegisterPage :framed_picture:

#### INICIO

Fala pessoal, este projeto consiste na elaboração de uma página que registra pedidos de pisos hidráulicos!

Ele pega a ideia de um projeto anterior que elaborei, o TileLandingPage (https://github.com/Amorim-cyber/TileLandingPage). Explicando brevemente, o TileLandingPage divulga uma promoção de pisos hidráulicos. Para o usuário participar ele teria fazer um cadastro, contudo eu não coloquei uma responsividade para tal.

Neste novo projeto vamos tentar dar uma interatividade ​a​o​ ​u​s​u​á​r​i​o​​, fazer com que a página "converse" com ele.​

Vamos que vamos! :smile:

Segue o link para acessar a página:

```shell script
https://amorim-cyber.github.io/TileRegisterPage
```

#### TECHS UTILIZADAS

* Node.js
* Angular CLI
* Alguma IDE de sua escolha

#### INTRUÇÕES

Caso você queira rodar o site em sua máquina local siga os seguintes passos:

1. Baixe os arquivos deste repositório

2. Execute o comando `ng serve` em seu terminal dentro do diretório deste projeto

   <img src="C:\Users\lucca\VTEX\register-page\img\passo2.PNG" style="border: solid grey; border-radius:4px"></img>

3. Digite `http://localhost:4200/RegistreSeuPedido`  no seu navegador.

<img src="C:\Users\lucca\VTEX\register-page\img\Passo3.PNG" style="border: solid grey; border-radius:4px"></img>

#### PRONTO

 A página está pronta para uso.

<img src="img/Page.PNG" style="border: solid grey; border-radius:4px"></img>



#### Observações importantes:

* As páginas vão dar erro caso haja alteração no link, peço que não mexa nele.

#### TRILHA

Vou deixar uma explicação um pouco mais detalhada do que eu fiz de um commit para outro

<div style="background-color: #E8E8E8; border-radius: 3px;">
   <p><strong>INITIAL COMMIT</strong></p>
    <ul>
        <li>Commit default do Angular quando criamos o projeto no terminal</li>
    </ul>
    <br>
</div>

<div style="background-color: #E8E8E8; border-radius: 3px;">
   <p><strong>COLOCANDO UMA FORMA INICIAL AOS COMPONENTES</strong></p>
    <ul>
        <li>Instalei no projeto o angular material para uma melhor estilização</li>
        <li>Crie um modulo para guardar os componentes de estilo</li>
        <li>Crie os componentes de formulário e de header</li>
        <li>Coloquei as estruturas HTML em ambos os componentes</li>
        <li>Coloquei um tratamento inicial aos campos do formulário</li>
    </ul>
    <br>
</div>
<div style="background-color: #E8E8E8; border-radius: 3px;">
   <p><strong>DEIXANDO O FORMULÁRIO RESPONSIVO</strong></p>
    <ul>
        <li>Coloquei messagens de erro para caso o usuário não digite os campos corretamente</li>
        <li>Dependendo do erro as mensagens podem variar</li>
        <li>Adicionei um botão que limpa todos os campos preenchidos</li>
        <li>O botão de registro leva para um alerta de sucesso caso o usuário preencha tudo corretamente</li>
    </ul>
    <br>
</div>
<div style="background-color: #E8E8E8; border-radius: 3px;">
   <p><strong>COLOCANDO UMA FORMA INICIAL AOS COMPONENTES</strong></p>
    <ul>
        <li>Instalei no projeto o angular material para uma melhor estilização</li>
        <li>Crie um modulo para guardar os componentes de estilo</li>
        <li>Crie os componentes de formulário e de header</li>
        <li>Coloquei as estruturas HTML em ambos os componentes</li>
        <li>Coloquei um tratamento inicial aos campos do formulário</li>
    </ul>
    <br>
</div>
<div style="background-color: #E8E8E8; border-radius: 3px;">
   <p><strong>ADICIONANDO UMA PÁGINA DE SUCESSO</strong></p>
    <ul>
        <li>Foi adicionado uma página de sucesso para caso os dados sejam preenchidos corretamente</li>
        <li>A página consiste em uma mensagem principal e um botão que mostra o registro do pedido</li>
        <li>Também foi criado um pipe para tratamento de dados pontuais</li>
        <li>O componente dessa página está localizado na pasta Success</li>
    </ul>
    <br>
</div>
<div style="background-color: #E8E8E8; border-radius: 3px;">
   <p><strong>AJUSTANDO O ESTILO DAS PÁGINAS</strong></p>
    <ul>
        <li>Adicionei algumas imagens para o Header</li>
        <li>Alterei as cores do header, fundo da página e do botão</li>
        <li>Deixa a página responsiva para diversas telas</li>
    </ul>
    <br>
</div>

FIM DA TRILHA

#### Forte Abraço! :smile:

