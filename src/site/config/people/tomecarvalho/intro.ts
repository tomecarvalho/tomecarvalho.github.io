import type { SiteConfig } from "../..";

const intro = {
  role: { en: "Software Developer", pt: "Desenvolvedor de Software" },
  location: { en: "Portugal", pt: "Portugal" },
  description: {
    en: `Hi, I'm Tomé.

I love gaming, resistance training, reading, and listening to metal, but you're probably here for something else!

Professionally, I'm a full-stack developer who likes his code clean, solutions robust, and pipelines automated: the proactive, reliable kind of guy who knows there's nothing more permanent than a temporary solution.

In my spare time, I also like to dabble in personal projects and contribute to open-source tools that improve my workflow—and hopefully other users' too—and provide new learning opportunities through the process.

Feel free to poke around! Check out my projects or hobbies, and don't hesitate to get in touch.`,
    pt: `Olá, sou o Tomé.

Adoro gaming, treino de resistência, ler e ouvir metal, mas provavelmente está aqui por outro motivo!

Profissionalmente, sou um desenvolvedor full stack que gosta do código limpo, soluções robustas e fluxos automatizados: o tipo de pessoa proativa e fiável que sabe bem que não há nada mais permanente que uma solução temporária.

No meu tempo livre, também gosto de dedicar-me a projetos pessoais e contribuições para ferramentas de código aberto que melhoram o meu fluxo de trabalho — e, espero eu, o de outros também — e que me proporcionam novas oportunidades de aprendizagem ao longo do processo.

Fique à vontade para dar uma vista de olhos! Veja os meus projetos ou passatempos, e não hesite em entrar em contacto.`,
  },
} as const satisfies SiteConfig["intro"];

export default intro;
