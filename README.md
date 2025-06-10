
# E2EPLATAFORMA

Plataforma de automação de testes end-to-end utilizando Cypress, JavaScript e Gherkin.

## Descrição

Este projeto tem como objetivo facilitar a automação de testes E2E, proporcionando uma estrutura organizada e intuitiva para criar, executar e gerenciar testes automatizados com o Cypress. Ideal para times de QA, desenvolvedores e qualquer pessoa que deseje garantir a qualidade de aplicações web.

## Tecnologias Utilizadas

- **Cypress:** Framework de automação de testes end-to-end.
- **JavaScript:** Linguagem principal para os scripts de automação.
- **Gherkin:** Descrição de cenários de teste em linguagem natural (BDD).

## Estrutura do Projeto

```plaintext
E2EPLATAFORMA/
├── cypress/
│   ├── e2e/
│   │   └── ... (testes automatizados)
│   ├── fixtures/
│   ├── support/
├── features/
│   └── ... (arquivos Gherkin)
├── package.json
└── README.md
```

## Como Instalar

1. Clone este repositório:
    ```bash
    git clone https://github.com/Eduardo-Alves1/E2EPLATAFORMA.git
    ```
2. Instale as dependências:
    ```bash
    cd E2EPLATAFORMA
    npm install
    ```

## Como Usar

- Para abrir o Cypress em modo interativo:
    ```bash
    npx cypress open
    ```
- Para rodar os testes em modo headless:
    ```bash
    npx cypress run
    ```
- Os cenários de teste estão descritos em arquivos `.feature` com Gherkin.

## Contribuição

Sinta-se à vontade para abrir issues, enviar pull requests ou sugerir melhorias!

## Licença

Este projeto está sob a licença MIT.
