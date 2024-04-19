# Configurar projeto local
Uma sugestão é usar o wsl -> para fins de facilidade na usabilidade do docker
:one: Clonar o repositório do banco de dados: https://github.com/ruan-cardozo/task-track-database
* na pasta que clonar o repositório: rodar o comando `docker compose up`
2️⃣ Depois clonar o repositório da api e rodar o comando: `docker compose -f docker-compose.yml up --build`



<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Apresentamos nossa API mobile task manager, uma ferramenta essencial para quem busca aprimorar a organização e a eficiência em suas atividades diárias. Projetada para suprir a necessidade fundamental de gerenciamento de tarefas, nossa API vai além, integrando de forma inteligente suas obrigações diárias com seus objetivos de longo prazo.

Com a nossa solução, você não apenas mantém suas tarefas cotidianas organizadas, mas também recebe lembretes e notificações estratégicas para eventos importantes, como reuniões e consultas médicas. Além disso, nossa API permite a sincronização perfeita dessas obrigações com seus objetivos pessoais e profissionais, garantindo que cada atividade contribua significativamente para suas metas maiores.

Imagine receber um alerta sobre uma reunião crucial enquanto ainda tem tempo para ajustar sua agenda de acordo com seus objetivos diários. Ou ser lembrado do compromisso com o dentista, enquanto mantém o foco nas tarefas essenciais do dia. Com nossa API mobile task manager, essa integração entre responsabilidades e aspirações se torna uma realidade acessível a todos os usuários.

Simplifique sua vida, aumente sua produtividade e alcance seus objetivos com facilidade. Descubra como nossa API mobile task manager pode transformar sua abordagem para o gerenciamento de tarefas diárias e permitir um equilíbrio harmonioso entre obrigações e metas pessoais.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## License

Nest is [MIT licensed](LICENSE).
