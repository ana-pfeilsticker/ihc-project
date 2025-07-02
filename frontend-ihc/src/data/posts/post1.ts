import { Post } from "./types";

export const post1: Post = {
  name: "Acessibilidade Além da Pontuação",
  description:
    "💡Quando ferramentas automatizadas como o Lighthouse dão uma nota 100 em acessibilidade, isso significa que o trabalho terminou? Ou existe um lado humano que os testes não conseguem medir?",
  slug: "acessibilidade-alem-da-pontuacao",
  alt: "Ilustração de um grupo de pessoas com deficiência em um ambiente social. A imagem inclui pessoas em cadeira de rodas, uma pessoa com muletas, um cego com cão-guia e pessoas com próteses de perna, todos se comunicando.",
  readTime: 5,
  date: "21 de Jun, 2025",
  image: "/acessibilidade-e-inclusao-pcds.jpg",
  paragraphs: [
    {
      subtitle:
        "Seu site tirou 100 em acessibilidade no Lighthouse. O trabalho acabou?",
      content:
        "Todos nós já passamos por isso: você roda um teste automatizado com uma ferramenta como Axe ou Lighthouse, vê aquela pontuação perfeita de 100 e sente o dever cumprido. É ótimo ver todos aqueles 'checks' verdes, sinalizando que você seguiu as regras e seu código está tecnicamente em conformidade.",
    },
    {
      subtitle: "Mas o que as pontuações realmente nos dizem?",
      content:
        "Recentemente, criei um formulário de cadastro complexo. Os testes automatizados passaram com louvor. Cada campo tinha uma label, o contraste de cores estava perfeito e não havia erros de ARIA. Enviei para produção, confiante na acessibilidade. Dias depois, recebemos o feedback de que um usuário de leitor de tela achou 'impossível' completar o cadastro. Os testes automatizados deixaram passar o mais importante: a experiência humana.",
    },
    {
      subtitle: "Para entender o problema real, eu precisei:",
      content:
        "Ligar um leitor de tela (como NVDA ou VoiceOver) e tentar usar o formulário sem olhar para a tela; navegar pela página inteira usando apenas a tecla Tab, verificando se a ordem de foco era lógica; e perceber que, embora tecnicamente correto, o fluxo era completamente confuso para alguém que não via o layout visual. A ordem do 'tab' pulava por toda parte, tornando o formulário frustrante.",
    },
    {
      subtitle:
        "No fim, empatia e testes manuais foram as verdadeiras soluções.",
      content:
        "Moral da história: ferramentas automatizadas são essenciais. Elas pegam cerca de 30-50% dos problemas de acessibilidade e são um ponto de partida fantástico. Mas elas não substituem a necessidade de testes manuais e empatia. Acessibilidade de verdade não é apenas passar em uma auditoria técnica; é garantir uma experiência usável e digna para pessoas reais.",
    },
  ],
};
