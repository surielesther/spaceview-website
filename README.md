# Universe Gallery

Repositório do website criado para o processo seletivo MakersFellowship. Nesse site será feito o consumo da API NASA APOD.

### Conteúdo
1. [Branches](#branches)
    1. [Descrição das branches](#descriçao)
2. [Estrutura dos documentos](#estrutura)
3. [API NASA APOD](#api)
   1. [Github da API](#github)

## Branches

Será usado o padrão Gitflow.

### Descrição das branches <a name="descriçao"></a>

`main` - É a branch principal do projeto, onde o site estará rodando.

`develop` - Essa branch contém o código de pré-produção, onde farei as features.


## Estrutura dos documentos <a name="estrutura"></a>

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


## API NASA APOD <a name="api"></a>

A API a ser consumida no código é a NASA APOD, encontrada no site : https://api.nasa.gov/#apod

### Github da API <a name="github"></a>
Documentação da API: https://github.com/nasa/apod-api

---
