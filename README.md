
# Challenge by HUBBI backend side

Este é o backend da aplicação HUBBI, uma plataforma desenvolvida para upload de arquivos de transações de produtos vendidos. Este backend foi construído usando NestJs, TypeScript, Prisma, Docker, SQLite. Ele gerencia as transações e fornece uma API para interagir com o frontend.

## Funcionalidades Principais

- Upload de Arquivos: Faça o upload de arquivos no formato sales.txt para processar as transações de vendas.
- Visualização de Dados: Veja as transações armazenadas no banco de dados, incluindo detalhes como ID, tipo, data, produto, valor e vendedor.
- Cálculo de Total: O frontend calcula e exibe o valor total das transações.
- Tratamento de Erros: Implementa tratamento de erros para lidar com situações em que ocorrem problemas durante o upload de arquivos ou recuperação de dados.

## Tecnologias Principais
- Node.js
- TypeScript
- Nest.js
- Prisma 
- Docker
- SQLite

## Instalação e Uso

- Certifique-se de ter o Node.js instalado na sua máquina.
- Certifique-se também de iniciar o backend na sua máquina.
- Clone este repositório: git clone https://github.com/balvesD3v/challenge-by-hubbi
- Instale as dependências: npm install.
- Inicie o aplicativo: npm run start:dev.

## Aprendizados

Puder aprender como funciona uma aplicação em nest utilizando prisma, não tinha conhecimento nessas duas tecnologias, mas fiz o máximo possível para criar um código limpo como era o pedido. Também pude aprender a utilizar o docker que foi o que mais tive dificuldade mas aprendi sobre as imagens e sobre container e consegui subir minha imagem no docker hub. Foi um desafio muito intenso já que corri contra o tempo e tentei entregar meu melhor. 


## Stack utilizada

**Front-end:** React, TypeScript, Styled-Components, Axios

**Back-end:** Node, TypeScript Nestjs, Prisma, Docker, SQLite


## Melhorias

1. **Autenticação e Autorização:**
   Implementar um sistema robusto de autenticação e autorização para restringir o acesso a certas funcionalidades, garantindo a segurança dos dados.

2. **Paginação de Resultados:**
   Adicionar suporte para a paginação de resultados ao recuperar dados. Isso pode melhorar o desempenho e a experiência do usuário ao lidar com grandes conjuntos de dados.

3. **Logging Aprimorado:**
   Melhorar os registros (logs) da aplicação para incluir informações mais detalhadas sobre eventos, erros e atividades do sistema. Isso facilitará a depuração e a manutenção.

4. **Validação de Dados:**
   Implementar uma camada robusta de validação de dados para garantir que apenas dados válidos sejam processados e armazenados no banco de dados.

5. **Melhorias na Estrutura do Código:**
   Refatorar o código para seguir melhores práticas de desenvolvimento, como dividir a lógica de negócios em serviços, garantir a coesão e a baixa dependência.

6. **Testes Automatizados:**
   Expandir a cobertura de testes com testes unitários e de integração para garantir a estabilidade do sistema durante as atualizações.


## API Endpoints

- `/transactions`: Manipulação de transações.
- `GET /`: Retorna todas as transações.
- `POST /upload`: Envia um arquivo para processamento.
