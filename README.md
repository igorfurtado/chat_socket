
<div align="center">
  <img style="width:200px;" src="https://user-images.githubusercontent.com/70289587/142443512-644d6717-654b-4644-aec6-cdabf65bdffc.png" alt="Logo YouChat!"/>
</div>

<div align="center">
  <h1>YouChat!</h1>
</div>

<p style="text-align: justify">Sala de bate-papo virtual criada com Express e Socket.io para troca de mensagens simultâneas entre usuários.
O Socket.io foi utilizado para possibilitar comunicação cliente-servidor em tempo real. Esta aplicação foi desenvolvida com conhecimentos adquiridos no curso do ProgramadorBR.

Para testar essa aplicação, pode-se utilizar o localhost ou hospedagens que suporte esse tipo de comunicação entre o front-end e o back-end. Neste caso, a plataforma Heroku possibilitou a hospedagem gratuita da aplicação.

O express.js carrega na rota principal (/) uma página estática, que vai sendo atualizada em tempo real conforme novas mensagens vão sendo inseridas no bate-papo. A aplicação permite inserir novos usuários em diferentes dispositivos ou até mesmo em abas diferentes.

Assim que a página de bate-papo é acessada, o novo usuário já tem acesso às conversas existentes. Para que este escreva uma nova mensagem, é necessário inserir um nome de usuário.</p> 

## Installation

Para instalação local da aplicação, faz-se necessária a instalação dos seguintes pacotes:

```bash
  npm install express socket.io
```
    
## Screenshots

![YouChat!](https://user-images.githubusercontent.com/70289587/142443444-3b1681a9-eeb9-442a-b645-579a689461cc.jpg)


## Tech Stack

**Client:** HTML, CSS, JS.

**Server:** Node, Express, Socket.io.

