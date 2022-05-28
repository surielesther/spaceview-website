# Universe Gallery

Repositório do website criado para o processo seletivo MakersFellowship

# Table of contents
1. [Branches](#branches)
    1. [Descrição das branches](#descrição_das_branches)
2. [Estrutura dos documentos](#estrutura_dos_documentos)
3. [API NASA APOD](#api_nasa_apod)
    1.[Github da API](#github_da_api)

## Branches

Vamos usar o padrão de develop/feat/fix para todas as branchs que forem criadas. Desse modo, pode-se ter ideia de sua funcionalidade. Portanto, usem nomes descritivos e curtos.

### Descrição das branches

`main` - É a branch principal do projeto, onde o nosso site estará rodando.

`release` - Serve para testar features relacionadas que estão acumuladas na branch `develop`. Se os testes ocorrerem bem, é daqui que o código irá para a branch `main`.

`develop` - É a branch principal do desenvolvedor, onde serão jogadas as features.


## Estrutura dos documentos

Essa é a estrutura de arquivos e pastas do projeto:

```text
────/.
    │   index.html
    │   README.md
    │
    └───/src
        ├───/assets
        ├───/js
        │       requests.js
        │       script.js
        │
        └───/styles
                reset.css
                styles.css
```

`/src` -- Todo o código  do projeto

`/src/assets` -- Recursos estáticos (imagens, ícones, etc)

`/src/js` -- Scripts para as páginas HTML

`/src/js/requests` -- Requerimentos de comunicação com a API

`/src/styles` -- Arquivos CSS


## API NASA APOD

A API a ser consumida no código é a NASA APOD, encontrada no site : https://api.nasa.gov/#apod

### Github da API
Documentação da API: https://github.com/nasa/apod-api

---
