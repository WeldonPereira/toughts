# 💭 Toughts - Compartilhe seus Pensamentos

O **Toughts** é uma aplicação completa desenvolvida em Node.js para que usuários possam registrar e compartilhar seus pensamentos. O projeto foca em conceitos fundamentais de desenvolvimento web como autenticação, gerenciamento de sessões, persistência em banco de dados e arquitetura MVC.




## 🛠️ Tecnologias e Recursos

* **Node.js & Express**: Core do servidor e gerenciamento de rotas.
* **Express-Handlebars**: Engine de template para renderização de views dinâmicas.
* **Sequelize (ORM)**: Manipulação do banco de dados relacional.
* **Express Session & Session-File-Store**: Controle de sessões de usuário com armazenamento em arquivos.
* **Express Flash**: Mensagens de feedback (sucesso/erro) para o usuário.
* **Bcryptjs**: Criptografia de senhas para segurança.

## 🚀 Funcionalidades

* 🔐 **Autenticação Completa**: Cadastro e Login de usuários com persistência de sessão.
* 📝 **Gerenciamento de Pensamentos**: Criação, edição e exclusão (CRUD) de pensamentos.
* 📊 **Dashboard**: Painel exclusivo para o usuário gerenciar seus próprios posts.
* 🏠 **Feed Público**: Visualização de pensamentos de todos os usuários na Home.
* 🛡️ **Segurança**: Rotas protegidas que exigem login para acesso.

## 📁 Estrutura do Projeto

Baseado no padrão MVC:
* `controllers/`: Lógica de negócio e controle das requisições.
* `models/`: Definição das tabelas e esquemas do banco de dados.
* `routes/`: Definição dos endpoints da aplicação.
* `views/`: Arquivos `.handlebars` para a interface do usuário.
* `public/`: Arquivos estáticos (CSS, imagens).
