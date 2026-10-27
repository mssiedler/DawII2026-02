# Portal Escolar — HTML + CSS (sem JavaScript)

Exemplo didático com páginas separadas para demonstrar rotas e navegação. Dados fictícios.

## Páginas
- `/index.html` — início
- `/alunos/index.html` — listagem de alunos
- `/alunos/ana-oliveira.html` (e demais) — detalhes do aluno
- `/cursos/index.html` — listagem de cursos
- `/cursos/informatica.html` (e demais) — detalhes do curso
- `/login.html` — formulário de login (sem autenticação)

## Execução
Como os links são absolutos a partir da raiz (`/`), execute um servidor HTTP na pasta `portal-escolar`, por exemplo:

```bash
python -m http.server 8000
```

Acesse http://localhost:8000/. Não abra os arquivos diretamente via `file://`.

## Integração posterior
Substitua as páginas estáticas por rotas Express e views EJS, carregando alunos e cursos do MongoDB. Os arquivos atuais são somente front-end; o formulário de login faz POST para `/login`, que deve ser implementado no servidor.
