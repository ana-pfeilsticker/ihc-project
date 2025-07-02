import { Post } from "./types";

export const post2: Post = {
  name: "O Poder Secreto do HTML Semântico",
  description:
    "🧐 Por que um <button> é infinitamente melhor que uma <div> com um evento de clique? Descubra como a estrutura correta do HTML é a base de uma web acessível, muito antes do CSS ou JS.",
  slug: "poder-secreto-html-semantico",
  alt: "Comparativo de estrutura lado a lado. Uma mostra uma estrutura HTML desorganizada com várias divs, e o outro uma estrutura limpa com tags semânticas como header, main, article e button.",
  readTime: 4,
  date: "28 de Jun, 2025",
  image: "/post2.jpg",
  paragraphs: [
    {
      subtitle: "A tentação da `<div>` para tudo",
      content:
        "É fácil cair na armadilha de usar `<div>` e `<span>` para construir tudo. Com CSS e JavaScript, você pode fazer uma `<div>` parecer e se comportar como qualquer coisa, inclusive um botão. Mas essa abordagem, embora visualmente funcional, cria uma barreira invisível para muitos usuários.",
    },
    {
      subtitle: "O que acontece quando uma `<div>` finge ser um botão?",
      content:
        "Quando você usa `<div onClick={...}>`, o navegador não a reconhece como um elemento interativo. Leitores de tela não anunciam 'botão', usuários de teclado não conseguem focar nela com a tecla Tab e ela não responde à tecla Enter ou Espaço. Você teria que adicionar manualmente `role='button'`, `tabindex='0'` e múltiplos event handlers de teclado. É muito trabalho para recriar algo que o HTML oferece de graça.",
    },
    {
      subtitle: "A solução: use a tag certa para o trabalho",
      content:
        "Ao usar `<button>`, você ganha tudo isso sem esforço: foco de teclado, semântica correta para leitores de tela e os comportamentos esperados. O mesmo vale para `<nav>`, `<main>`, `<header>`, `<article>`. Essas tags criam um mapa do seu site, permitindo que tecnologias assistivas naveguem de forma eficiente. HTML semântico não é sobre seguir regras, é sobre clareza e funcionalidade.",
    },
    {
      subtitle: "Semântica é a vitória mais fácil da acessibilidade",
      content:
        "Antes de se preocupar com complexidades de ARIA, garanta que sua base de HTML é sólida. Usar as tags corretas é o passo mais simples e de maior impacto que você pode dar para tornar a web mais acessível para todos. É eficiência, clareza e inclusão, tudo em uma só tacada.",
    },
  ],
};
