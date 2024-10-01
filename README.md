# *LETRA A LETRA

# Projeto React com Supabase, Requisições Assíncronas e Gerenciamento de Estado

Este projeto é uma aplicação desenvolvida em ReactJS que utiliza diversas tecnologias e práticas modernas, incluindo requisições assíncronas, gerenciamento de estado entre componentes, Supabase como solução de DBaaS, e uso de expressões regulares (RegExp) para validação de dados.

## Tecnologias Utilizadas

- *ReactJS*: Biblioteca JavaScript para construção de interfaces de usuário.
- *Supabase*: Plataforma de backend como serviço (DBaaS) com funcionalidades de autenticação e banco de dados PostgreSQL.
- *CSS*: Estilização da interface utilizando CSS puro.
- *RegExp*: Utilização de expressões regulares para validação de dados, como campos de entrada de formulário.
- *Requisição Assíncrona*: Utilização de fetch e/ou bibliotecas como axios para comunicação com a API do Supabase e outras integrações.
- *Gerenciamento de Estado entre Componentes*: Utilização do contexto do React (Context API) ou outras soluções como Redux para gerenciamento de estado global.

## Funcionalidades Principais

1. *Autenticação com Supabase*: Os usuários podem se cadastrar, fazer login e logout utilizando o Supabase.
2. *Requisições Assíncronas*: Toda comunicação com a API (busca de dados do banco, atualizações, inserções) é feita de forma assíncrona, garantindo uma experiência de usuário fluida.
3. *Validação de Dados com RegExp*: A entrada do usuário é validada utilizando expressões regulares, garantindo que os dados inseridos (e-mails, números, etc.) estejam no formato correto antes do envio.
4. *Gerenciamento de Estado*: Os dados são compartilhados entre diferentes componentes usando Context API ou Redux para garantir uma interação coesa entre as partes da aplicação.
5. *UI Responsiva*: A interface foi desenvolvida utilizando CSS puro, focando em design simples e responsivo.

## Instalação

### Pré-requisitos

- Node.js instalado na máquina.
- Conta no [Supabase](https://supabase.com/) com o banco de dados configurado.

### Passo a Passo

1. Clone este repositório:

   bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   

2. Acesse o diretório do projeto:

   bash
   cd seu-repositorio
   

3. Instale as dependências:

   bash
   npm install
   

4. Crie um arquivo .env.local na raiz do projeto com as chaves do Supabase:

   
   REACT_APP_SUPABASE_URL=sua-url-do-supabase
   REACT_APP_SUPABASE_ANON_KEY=sua-key-do-supabase
   

5. Inicie o servidor de desenvolvimento:

   bash
   npm start
   

6. Acesse a aplicação no navegador através de http://localhost:3000.

## Estrutura do Projeto


src/
│
├── components/            # Componentes reutilizáveis
├── context/               # Gerenciamento de estado usando Context API
├── services/              # Lógica para requisições assíncronas e comunicação com Supabase
├── utils/                 # Funções utilitárias, como validação com RegExp
├── App.js                 # Componente principal
└── index.js               # Ponto de entrada da aplicação


## Como Usar

1. *Autenticação*: O usuário pode se cadastrar ou fazer login, e o estado da autenticação será gerenciado globalmente.
2. *Validação de Formulários*: Ao se cadastrar, os dados do usuário serão validados usando expressões regulares antes de serem enviados para o Supabase.
3. *Gerenciamento de Estado*: Toda a aplicação compartilha informações críticas, como o estado de autenticação e os dados do usuário, usando o Context API.

## Supabase Configuração

A aplicação está integrada ao Supabase, que é utilizado para autenticação e persistência dos dados. Para configurar o Supabase, siga os seguintes passos:

1. Crie um projeto no Supabase.
2. Copie a URL da API e a chave anônima e adicione ao arquivo .env.local.
3. Configure as tabelas necessárias no Supabase através da interface gráfica.

## Contribuições

Contribuições são bem-vindas! Se você encontrar algum problema ou quiser adicionar novas funcionalidades, fique à vontade para enviar um pull request.

1. Faça um fork do projeto.
2. Crie sua branch de recurso (git checkout -b feature/MinhaFeature).
3. Commit suas alterações (git commit -am 'Adicionei nova funcionalidade').
4. Envie para a branch principal (git push origin feature/MinhaFeature).
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
