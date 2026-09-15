const BASE = "https://media.base44.com/images/public/user_6aa8acc4151a16540fc7de4f/";
const img = (name) => BASE + name;

export const CATEGORIES = [
  { id: "todos", num: "00", label: "Panorama" },
  { id: "moda", num: "01", label: "Moda & Alfaiataria" },
  { id: "arte", num: "02", label: "Artes Visuais & Têxtil" },
  { id: "projetos", num: "03", label: "Projetos Especiais" },
  { id: "processo", num: "04", label: "Processo" },
];

export const CONTACT = {
  whatsappLabel: "(11) 95070-4952",
  whatsappUrl: "https://wa.me/5511950704952",
  email: "henrique950704952@gmail.com",
  location: "Rio de Janeiro / São Paulo",
};

export const WORKS = [
  {
    slug: "orbitante",
    title: "orbiTANTE",
    category: "arte",
    categoryLabel: "Artes Visuais & Têxtil",
    year: "2026",
    materials: "Intervenção têxtil, bordado matiz e seda sobre suporte plano",
    scale: "feature",
    description:
      "Série autoral que orbita a relação entre palavra, tempo e matéria. O gesto repetido do bordado constrói trajetórias circulares — tudo o que parte, retorna transformado. A obra é ao mesmo tempo mapa, manuscrito e superfície.",
    cover: img("f6d062747_ChatGPTImage12desetde202623_57_48.png"),
    images: [img("f6d062747_ChatGPTImage12desetde202623_57_48.png"), img("30038453a_ChatGPTImage14desetde202621_35_58.png")],
  },
  {
    slug: "foto-hibrida",
    title: "Foto Híbrida",
    category: "arte",
    categoryLabel: "Artes Visuais & Têxtil",
    year: "2026",
    materials: "Fotografia com intervenção manual sobre suporte",
    scale: "small",
    description:
      "Investigação sobre a hibridez da imagem: o registro fotográfico é tratado como suporte para o gesto pictórico. A técnica dissolve-se na mão — nasce uma terceira natureza, nem foto, nem pintura.",
    cover: img("824317cb4_ChatGPTImage14desetde202621_37_46.png"),
    images: [img("824317cb4_ChatGPTImage14desetde202621_37_46.png"), img("c6ee3708a_ChatGPTImage14desetde202621_41_59.png")],
  },
  {
    slug: "o-guerreiro",
    title: "O guerreiro",
    category: "arte",
    categoryLabel: "Artes Visuais & Têxtil",
    year: "2026",
    materials: "Pintura gestual e carvão sobre tela, apresentada sobre madeira clara",
    scale: "feature",
    description:
      "Pintura gestual sobre tela. A figura do guerreiro emerge entre traços de carvão e matéria densa — um estudo sobre resistência, vulnerabilidade e postura. Apresentada sobre madeira clara, a obra assume a escala de objeto.",
    cover: img("96e98295e_ChatGPTImage14desetde202621_44_12.png"),
    images: [
      img("96e98295e_ChatGPTImage14desetde202621_44_12.png"),
      img("523bf2fcf_mockup-canvas-madeira-clara.jpg"),
      img("1b3e959d4_mockup-canvas-madeira-clara2.jpg"),
    ],
  },
  {
    slug: "cotidiano",
    title: "Cotidiano",
    category: "arte",
    categoryLabel: "Artes Visuais & Têxtil — Naturezas-Mortas",
    year: "2026",
    materials: "Tinta sobre tela",
    scale: "small",
    description:
      "Natureza-morta contemporânea da série Cotidiano. Objetos banais elevados à condição de ícone por meio da luz norte e da composição austera — o cotidiano tratado como pequena liturgia.",
    cover: img("bd4964d49_COTIDIANO-004.png"),
    images: [img("bd4964d49_COTIDIANO-004.png")],
  },
  {
    slug: "corpo-e-estrutura",
    title: "Corpo & Estrutura",
    category: "moda",
    categoryLabel: "Moda & Alfaiataria",
    year: "2024",
    materials: "Alfaiataria, modelagem autoral e fibras nobres",
    scale: "feature",
    description:
      "A precisão do corte, a escolha rigorosa de tecidos nobres e o equilíbrio entre a forma estruturada e o corpo em movimento. Desenvolvimento de linhas comerciais de moda e alfaiataria contemporânea.",
    cover: img("ba9851ce4_IMG_1144_converted.jpg"),
    images: [img("ba9851ce4_IMG_1144_converted.jpg")],
  },
  {
    slug: "terno-oficial-cbf",
    title: "Terno Oficial — Seleção Brasileira Feminina",
    category: "projetos",
    categoryLabel: "Projetos Especiais & Cases",
    year: "2023",
    materials: "Alfaiataria sob medida, bordados e direção criativa",
    scale: "feature",
    description:
      "Case histórico: CBF x Animale, Copa do Mundo 2023. Primeira vez na história que a delegação feminina viajou vestindo alta alfaiataria sob medida — engenharia de produto, fittings e direção criativa de bordados.",
    cover: img("d0089d793_20260914_214633.jpg"),
    images: [img("d0089d793_20260914_214633.jpg")],
  },
  {
    slug: "atelier-mao-e-materia",
    title: "Ateliê: a mão e a matéria",
    category: "processo",
    categoryLabel: "Processo, Lab & Pesquisa",
    year: "2026",
    materials: "Processo — croquis, moulage, testes de matéria",
    scale: "small",
    description:
      "O método de ateliê: pesquisa de campo, investigação semântica, croquis manuais, moulage tridimensional e fichas de produto. A mesa de trabalho como território de todas as obras.",
    cover: img("377fb704d_IMG-20260828-WA0003.jpeg"),
    images: [img("377fb704d_IMG-20260828-WA0003.jpeg")],
  },
];

export const getWorkBySlug = (slug) => WORKS.find((w) => w.slug === slug);