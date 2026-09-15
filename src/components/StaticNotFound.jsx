import { Link } from 'react-router-dom';

export default function StaticNotFound() {
  return (
    <main className="min-h-screen flex flex-col items-start justify-center px-6 md:px-10">
      <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#999]">
        404 — Página não encontrada
      </p>
      <h1 className="mt-6 text-5xl md:text-7xl font-light uppercase tracking-[-0.02em] text-[#0D0D0D]">
        Vazio
      </h1>
      <p className="mt-6 text-sm text-[#555] max-w-md leading-relaxed">
        A página que você procura não faz parte desta exposição.
      </p>
      <Link
        to="/"
        className="mt-10 text-[11px] uppercase tracking-[0.3em] text-[#0D0D0D] border-b border-[#0D0D0D] pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-colors duration-300"
      >
        Voltar ao início
      </Link>
    </main>
  );
}