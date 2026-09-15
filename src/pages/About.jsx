import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Image } from "@/components/ui/image";
import { WORKS } from "@/data/works";

const ATELIER = WORKS.find((w) => w.slug === "atelier-mao-e-materia").cover;

const FACTS = [
  { num: "01", label: "Design de Moda — IED", detail: "Istituto Europeo di Design" },
  { num: "02", label: "Arquitetura & Urbanismo — PUC", detail: "O corpo é espaço; o vestuário, arquitetura em movimento" },
  { num: "03", label: "6+ anos — Animale", detail: "Liderança em alfaiataria premium e projetos emblemáticos" },
];

export default function About() {
  return (
    <div className="bg-white text-[#0D0D0D] antialiased">
      <SiteHeader />
      <main className="px-6 md:px-10 pt-32 md:pt-44 pb-24">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#555]">05 / Perfil &amp; Trajetória</p>
        <h1 className="mt-6 max-w-6xl text-[9vw] md:text-[5.5vw] font-light uppercase tracking-[-0.02em] leading-[0.95]">
          Sobre Henrique Taveira
        </h1>

        <div className="mt-16 md:mt-28 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#F7F7F7] shadow-[0_30px_60px_-35px_rgba(0,0,0,0.25)] md:sticky md:top-28">
              <Image src={ATELIER} className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-7 space-y-8 text-[17px] md:text-lg leading-[1.7] text-neutral-800 max-w-2xl">
            <p>
              Estilista, diretor criativo, artista visual e arquiteto. Uma visão integradora que transita
              com naturalidade entre o rigor técnico da modelagem, a sensibilidade artística da intervenção
              manual e a estratégia comercial de grandes marcas de moda.
            </p>
            <p>
              Minha formação é híbrida por vocação: graduado em Design de Moda pelo Istituto Europeo di
              Design (IED) e em Arquitetura &amp; Urbanismo pela PUC. Essa dupla bagagem moldou uma forma de
              pensar onde o corpo é espaço, o tecido é material construtivo e o vestuário é arquitetura em
              movimento.
            </p>
            <p>
              Com mais de 6 anos de atuação sólida na Animale, liderei o desenvolvimento de produtos na linha
              de alfaiataria premium, participando de projetos emblemáticos como o Terno Oficial da Seleção
              Brasileira Feminina de Futebol na Copa do Mundo 2023.
            </p>
            <p>
              No ateliê e nas artes visuais, investigo a relação entre palavra, tempo e matéria por meio de
              bordados botânicos minuciosos, intervenções têxteis em sarja e denim, jacquards caligráficos e
              pesquisas curatoriais contemporâneas.
            </p>
          </div>
        </div>

        <div className="mt-24 md:mt-40 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {FACTS.map((f) => (
            <div key={f.num} className="border-t border-black/15 pt-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#555] mb-3">{f.num}</p>
              <p className="text-sm uppercase tracking-[0.15em] leading-relaxed">{f.label}</p>
              <p className="mt-3 text-[15px] leading-[1.6] text-neutral-600">{f.detail}</p>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}