# 🚀 Plataforma SaaS Simples

Landing page de uma plataforma SaaS fictícia, desenvolvida como parte de um desafio técnico para vaga de desenvolvimento.
O projeto tem foco em layout responsivo, boas práticas de HTML semântico, Tailwind CSS e JavaScript puro para interações e validações.

----

## 🖥️ Demonstração

🔗 **Live Preview:** [Clique aqui](https://lucas-r-braga.github.io/Evera_Saas/)
🔗 **Repositório:** [GitHub](https://github.com/Lucas-R-Braga/Evera_Saas)

----

## 📌 Funcionalidades

✅ Landing page moderna e responsiva

✅ Navegação com scroll suave

✅ Animações de reveal on scroll usando IntersectionObserver

✅ Formulário de contato com:

  - Validação de campos obrigatórios 
  - Validação de e-mail
  - Feedback visual animado

✅ Header com sombra dinâmica ao rolar a página

✅ Footer completo com links sociais

✅ Separação clara entre HTML, CSS (Tailwind) e JavaScript

----

## 🛠️ Tecnologias Utilizadas

**HTML5** (semântico e acessível)

**Tailwind CSS (CDN)** para estilização rápida e responsiva

**JavaScript Vanilla (ES6+)**

**IntersectionObserver API**

**Git & GitHub**

⚠️ O Tailwind está sendo utilizado via CDN por simplicidade, pois o foco do desafio é layout, lógica e organização. 
Em em cenário de produção, o ideal seria utilizar Tailwind com build (PostCSS/Vite).

----

## 📂 Estrutura do Projeto

```text
📁 /
├── 📝 index.html
├── 📝 contato.html
├── 📁 js/
│   └── 📝 main.js
├── 📝 README.md
```
----

## ⚙️ JavaScript – Organização

O arquivo main.js foi estruturado de forma modular, com funções responsáveis por cada comportamento:

- `initContactForm()` → validação e feedback do formulário  
- `initSmoothScroll()` → scroll suave para links internos  
- `initHeaderShadow()` → sombra dinâmica no header  
- `initRevealOnScroll()` → animações ao entrar na viewport 

Essa separação melhora a **legibilidade**, **manutenção** e **escalabilidade** do código.

----

## 📱 Responsividade

O layout foi desenvolvido com **mobile-first**, garantindo boa experiência em:

- Smartphones  
- Tablets  
- Desktops 

Todos os componentes se adaptam corretamente às diferentes resoluções.

----

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de:

- Demonstrar fundamentos sólidos de front-end
- Aplicar boas práticas de organização e semântica
- Trabalhar com JavaScript puro, sem frameworks
- Criar uma interface clara, moderna e funcional

----

## 🚀 Como executar localmente

Este é um projeto 100% estático e não requer build ou instalação de dependências.

1. Clone o repositório:  
   ```bash
   git clone https://github.com/Lucas-R-Braga/Evera_Saas.git
   ```
2. Abra o arquivo index.html no navegador
   ou utilize a extensão Live Server no VS Code.

----

📌 Próximos Melhoramentos (opcional)

🔧 Build com Tailwind (PostCSS / Vite)

📬 Integração real do formulário (API / backend)

🌙 Modo escuro

♿ Melhorias de acessibilidade (ARIA)

🔍 SEO avançado

----

📌 Decisões Técnicas

- Tailwind CSS via CDN foi escolhido para simplificar o setup e manter o projeto totalmente estático.
- JavaScript puro foi utilizado para demonstrar domínio da linguagem sem dependência de frameworks.
- Estrutura modular no JS visando legibilidade e fácil manutenção.

----

## 👨‍💻 Autor

Lucas Braga

🔗 [LinkedIn](https://www.linkedin.com/in/lucas-braga-4009a32b4/)
🐙 [GitHub](https://github.com/Lucas-R-Braga)

