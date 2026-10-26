"use client";

import { useState } from "react";

const SERVICOS_WHATSAPP = "5516982223003";

type Opcao = {
  id: string;
  problema: string;
  indicacao: string;
  mensagem: string;
};

const OPCOES: Opcao[] = [
  {
    id: "pintura",
    problema: "A pintura parece sem vida",
    indicacao:
      "Carro opaco, com marcas de uso e reflexo irregular. O caminho costuma ser avaliação de pintura e acabamento: lavagem detalhada, polimento e proteção indicada para o estado do carro.",
    mensagem:
      "Olá! A pintura do meu carro parece sem vida e quero uma avaliação de pintura e acabamento.",
  },
  {
    id: "interior",
    problema: "Interior com cheiro ou manchas",
    indicacao:
      "Bancos, carpetes e ar-condicionado pedem atenção: higienização interna, hidratação dos materiais e, se preciso, oxi-sanitização. A avaliação define o que o interior realmente precisa.",
    mensagem:
      "Olá! O interior do meu carro está com cheiro/manchas e quero uma avaliação de higienização.",
  },
  {
    id: "vidros",
    problema: "Vidros e faróis comprometidos",
    indicacao:
      "Vidro áspero, chuva ácida ou farol amarelado: o caminho é o diagnóstico de vidros e iluminação, incluindo polimento de vidros e faróis quando indicado.",
    mensagem:
      "Olá! Meus vidros/faróis estão comprometidos e quero uma avaliação.",
  },
  {
    id: "correcao",
    problema: "Pequeno amassado ou detalhe",
    indicacao:
      "Pequenos amassados sem dano à pintura podem ser avaliados para martelinho de ouro. Na avaliação, você entende se o caso é indicado para a técnica.",
    mensagem:
      "Olá! Meu carro tem um pequeno amassado e quero avaliar se é caso para martelinho de ouro.",
  },
];

export default function Diagnostico() {
  const [selecionada, setSelecionada] = useState<Opcao>(OPCOES[0]);

  return (
    <div>
      <div
        role="tablist"
        aria-label="O que seu carro precisa?"
        className="grid gap-3 sm:grid-cols-2"
      >
        {OPCOES.map((opcao) => {
          const ativa = opcao.id === selecionada.id;
          return (
            <button
              key={opcao.id}
              role="tab"
              aria-selected={ativa}
              onClick={() => setSelecionada(opcao)}
              className={`rounded-2xl border p-5 text-left transition-colors ${
                ativa
                  ? "border-[#bef264]/60 bg-[#15170f]"
                  : "hairline bg-[#121315] hover:border-white/30"
              }`}
            >
              <span className="font-semibold">{opcao.problema}</span>
              <span
                aria-hidden="true"
                className={`mt-2 block h-1 w-10 rounded-full ${
                  ativa ? "bg-[#bef264]" : "bg-white/15"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="mt-4 rounded-2xl border hairline bg-[#121315] p-6"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9aa3ab]">
          Caminho indicado
        </p>
        <p className="mt-2 text-[#c9cdd2]">{selecionada.indicacao}</p>
        <a
          href={`https://wa.me/${SERVICOS_WHATSAPP}?text=${encodeURIComponent(
            selecionada.mensagem
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-[#bef264] px-7 py-3.5 text-sm font-semibold text-[#0a0a0b] hover:bg-[#cfff70]"
        >
          Descrever meu caso no WhatsApp
        </a>
      </div>
    </div>
  );
}
