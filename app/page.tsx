import Diagnostico from "./diagnostico";

const WHATSAPP_SERVICOS =
  "https://wa.me/5516982223003?text=Ol%C3%A1!%20Quero%20avaliar%20meu%20carro%20com%20a%20Din%C3%A2mica.";
const WHATSAPP_TREINAMENTO =
  "https://wa.me/5516991209496?text=Ol%C3%A1!%20Quero%20saber%20sobre%20os%20cursos%20para%20detailers.";
const PHONE_HREF = "tel:+551634197911";
const INSTAGRAM_SERVICOS_URL =
  "https://www.instagram.com/dinamicaembelezamentoauto/";
const INSTAGRAM_TREINAMENTO_URL =
  "https://www.instagram.com/dinamica_centrodetreinamento/";
const FACEBOOK_URL = "https://www.facebook.com/dinamicaembelezamentoautomotivo/";
const MAP_SEARCH_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Dr.+Carlos+Botelho+2714+Centro+S%C3%A3o+Carlos+SP";

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9aa3ab]">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-[#0a0a0b] text-[#f4f2ed]">
      {/* Barra de conceito demo */}
      <div className="bg-[#bef264] px-4 py-2 text-center text-xs font-semibold text-[#0a0a0b]">
        Conceito comercial não oficial — página de demonstração, não é o site
        oficial do negócio.
      </div>

      <header className="sticky top-0 z-10 border-b hairline bg-[#0a0a0b]/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#topo" className="leading-none">
            <span className="block text-lg font-bold tracking-[0.18em]">
              DINÂMICA
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.28em] text-[#9aa3ab]">
              Embelezamento Automotivo
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-[#c9cdd2] lg:flex">
            <a className="hover:text-white" href="#servicos">Serviços</a>
            <a className="hover:text-white" href="#diagnostico">Diagnóstico</a>
            <a className="hover:text-white" href="#processo">Processo</a>
            <a className="hover:text-white" href="#resultados">Resultados</a>
            <a className="hover:text-white" href="#treinamentos">Treinamentos</a>
            <a className="hover:text-white" href="#contato">Contato</a>
          </nav>
          <a
            href={WHATSAPP_SERVICOS}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#f4f2ed] px-5 py-2.5 text-sm font-semibold text-[#0a0a0b] hover:bg-white"
          >
            Solicitar avaliação
          </a>
        </div>
      </header>

      <main id="topo" className="flex-1">
        {/* 1. HERO */}
        <section className="inspection-light border-b hairline">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
            <div>
              <SectionLabel>
                São Carlos · SP — Centro · Desde 2014*
              </SectionLabel>
              <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                Detalhe técnico para o seu carro. Formação séria para quem
                vive disso.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#c9cdd2]">
                Detalhamento, polimento, vitrificação e higienização com
                avaliação antes de qualquer proposta — e, em uma frente
                separada, treinamento prático para detailers.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_SERVICOS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#f4f2ed] px-7 py-3.5 text-center text-sm font-semibold text-[#0a0a0b] hover:bg-white"
                >
                  Solicitar avaliação
                </a>
                <a
                  href="#treinamentos"
                  className="rounded-full border hairline px-7 py-3.5 text-center text-sm font-semibold text-[#f4f2ed] hover:border-white/40"
                >
                  Sou profissional
                </a>
              </div>
              <p className="mt-6 text-sm text-[#9aa3ab]">
                Atendimento pelo WhatsApp comercial ·{" "}
                <a className="underline" href={PHONE_HREF}>
                  (16) 3419-7911
                </a>
              </p>
              <p className="mt-2 text-xs text-[#9aa3ab]">
                *“Desde 2014” conforme anúncio público no Lecto.
              </p>
            </div>
            <div
              aria-hidden="true"
              className="relative min-h-64 overflow-hidden rounded-2xl border hairline bg-gradient-to-b from-[#232427] to-[#0c0d0e] p-6"
            >
              <div className="absolute inset-x-8 top-6 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
              <div className="absolute inset-x-16 top-10 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <div className="mt-16">
                <p className="text-xs uppercase tracking-[0.24em] text-[#9aa3ab]">
                  Luz de inspeção · pintura
                </p>
                <div className="mt-4 h-28 rounded-xl bg-gradient-to-br from-[#2c2e31] via-[#141517] to-black shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]" />
                <div className="mt-3 h-1.5 w-3/4 rounded-full bg-[#bef264]/70 blur-[1px]" />
                <p className="mt-4 text-sm text-[#9aa3ab]">
                  Imagem conceitual. Espaço reservado para fotografia real
                  autorizada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SERVIÇOS */}
        <section id="servicos" className="border-b hairline">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <SectionLabel>Serviços principais</SectionLabel>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight">
              Poucos grupos, bem explicados.
            </h2>
            <p className="mt-3 max-w-2xl text-[#c9cdd2]">
              Agrupados a partir das informações públicas do negócio. A
              avaliação define o que faz sentido para o estado do seu veículo.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border hairline bg-[#121315] p-6">
                <h3 className="text-lg font-semibold">Pintura e acabamento</h3>
                <p className="mt-2 text-[#c9cdd2]">
                  Polimento, polimento técnico, espelhamento e cristalização.
                  Foco em acabamento e uniformidade, com diagnóstico antes da
                  proposta.
                </p>
              </article>
              <article className="rounded-2xl border hairline bg-[#121315] p-6">
                <h3 className="text-lg font-semibold">Interior</h3>
                <p className="mt-2 text-[#c9cdd2]">
                  Higienização interna, lavagem de bancos e carpetes,
                  hidratação de bancos, higienização de ar-condicionado e
                  oxi-sanitização.
                </p>
              </article>
              <article className="rounded-2xl border hairline bg-[#121315] p-6">
                <h3 className="text-lg font-semibold">Proteção</h3>
                <p className="mt-2 text-[#c9cdd2]">
                  Vitrificação de pinturas e proteção. A indicação depende do
                  estado do veículo e da sua rotina de uso — por isso começa
                  na avaliação.
                </p>
              </article>
              <article className="rounded-2xl border hairline bg-[#121315] p-6">
                <h3 className="text-lg font-semibold">Correções rápidas</h3>
                <p className="mt-2 text-[#c9cdd2]">
                  Martelinho de ouro, polimento de vidros e faróis, lavagem
                  detalhada e lavagem completa.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* 3. DIAGNÓSTICO */}
        <section id="diagnostico" className="border-b hairline bg-[#0e0f11]">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <SectionLabel>O que seu carro precisa?</SectionLabel>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight">
              Comece pelo problema, não pelo nome do serviço.
            </h2>
            <p className="mt-3 max-w-2xl text-[#c9cdd2]">
              Toque em uma situação para ver o caminho indicado — e chame no
              WhatsApp com a mensagem pronta.
            </p>
            <div className="mt-10">
              <Diagnostico />
            </div>
          </div>
        </section>

        {/* 4. PROCESSO */}
        <section id="processo" className="border-b hairline">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <SectionLabel>Processo</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Avaliação antes da proposta.
            </h2>
            <ol className="mt-10 grid gap-4 md:grid-cols-4">
              {[
                {
                  n: "01",
                  t: "Avaliação",
                  d: "Olhamos o carro com você e registramos o estado atual.",
                },
                {
                  n: "02",
                  t: "Preparação",
                  d: "Lavagem e descontaminação com cuidado para não criar novas marcas.",
                },
                {
                  n: "03",
                  t: "Execução",
                  d: "Serviço indicado, com acabamento revisado sob luz.",
                },
                {
                  n: "04",
                  t: "Entrega",
                  d: "Você recebe o carro, entende o que foi feito e como manter.",
                },
              ].map((s) => (
                <li
                  key={s.n}
                  className="rounded-2xl border hairline bg-[#121315] p-6"
                >
                  <p className="text-sm font-bold tracking-widest text-[#bef264]">
                    {s.n}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 text-[#c9cdd2]">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 5. RESULTADOS */}
        <section id="resultados" className="border-b hairline bg-[#0e0f11]">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
            <SectionLabel>Resultados</SectionLabel>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight">
              Galeria conceitual.
            </h2>
            <p className="mt-3 max-w-2xl text-[#c9cdd2]">
              Enquanto não houver fotos reais autorizadas, usamos referências
              visuais. Nada aqui é apresentado como trabalho realizado — e não
              há comparativos antes/depois.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                { t: "Reflexo sob luz", d: "Espaço para close de pintura" },
                { t: "Interior cuidado", d: "Espaço para detalhe interno" },
                { t: "Acabamento", d: "Espaço para detalhe de roda e friso" },
              ].map((g) => (
                <figure
                  key={g.t}
                  className="overflow-hidden rounded-2xl border hairline bg-[#121315]"
                >
                  <div className="h-44 bg-gradient-to-br from-[#2a2c2f] via-[#151619] to-black" />
                  <figcaption className="p-5">
                    <p className="font-semibold">{g.t}</p>
                    <p className="mt-1 text-sm text-[#9aa3ab]">{g.d}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 6. TREINAMENTOS — frente separada */}
        <section id="treinamentos" className="border-b hairline">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
            <div>
              <p className="inline-block rounded-full border border-[#bef264]/40 bg-[#15170f] px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#bef264]">
                Para profissionais
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                Treinamento para detailers, em frente separada.
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#c9cdd2]">
                Cursos 100% práticos de Full Detail, polimento e vitrificação
                no mesmo endereço — com atendimento e contato próprios, para
                não misturar com o cliente do carro.
              </p>
              <p className="mt-4 text-[#c9cdd2]">
                Mais de 600 alunos formados, conforme anúncio público no
                Lecto.*
              </p>
              <p className="mt-2 text-xs text-[#9aa3ab]">
                *Número divulgado no anúncio público; não verificado em canal
                oficial — a confirmar com a Dinâmica antes de qualquer uso
                institucional.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_TREINAMENTO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#bef264] px-7 py-3.5 text-center text-sm font-semibold text-[#0a0a0b] hover:bg-[#cfff70]"
                >
                  Quero saber dos cursos
                </a>
                <a
                  href={INSTAGRAM_TREINAMENTO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border hairline px-7 py-3.5 text-center text-sm font-semibold text-[#f4f2ed] hover:border-white/40"
                >
                  Ver perfil do treinamento
                </a>
              </div>
            </div>
            <div className="rounded-2xl border hairline bg-[#121315] p-6">
              <h3 className="text-lg font-semibold">O que esperar</h3>
              <ul className="mt-4 space-y-3 text-[#c9cdd2]">
                <li>· Prática real em Full Detail, polimento e vitrificação</li>
                <li>· Aulas presenciais no Centro de São Carlos</li>
                <li>· Atendimento pelo WhatsApp do treinamento</li>
              </ul>
              <p className="mt-6 text-sm text-[#9aa3ab]">
                WhatsApp do treinamento:{" "}
                <a
                  className="font-semibold text-white underline"
                  href={WHATSAPP_TREINAMENTO}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (16) 99120-9496
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* 7. LOCALIZAÇÃO + CONTATO */}
        <section id="contato" className="border-b hairline bg-[#0e0f11]">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
            <div>
              <SectionLabel>Localização + contato</SectionLabel>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                No Centro de São Carlos.
              </h2>
              <address className="mt-6 text-lg not-italic leading-8 text-[#c9cdd2]">
                Av. Dr. Carlos Botelho, 2714 — Centro
                <br />
                São Carlos / SP — CEP 13560-251
              </address>
              <div className="mt-6 space-y-2 text-[#c9cdd2]">
                <p>
                  WhatsApp serviços:{" "}
                  <a
                    className="font-semibold text-white underline"
                    href={WHATSAPP_SERVICOS}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (16) 98222-3003
                  </a>
                </p>
                <p>
                  WhatsApp treinamentos:{" "}
                  <a
                    className="font-semibold text-white underline"
                    href={WHATSAPP_TREINAMENTO}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (16) 99120-9496
                  </a>
                </p>
                <p>
                  Telefone:{" "}
                  <a className="underline" href={PHONE_HREF}>
                    (16) 3419-7911
                  </a>
                </p>
                <p>
                  Instagram serviços:{" "}
                  <a
                    className="underline"
                    href={INSTAGRAM_SERVICOS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @dinamicaembelezamentoauto
                  </a>
                </p>
                <p>
                  Instagram treinamentos:{" "}
                  <a
                    className="underline"
                    href={INSTAGRAM_TREINAMENTO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @dinamica_centrodetreinamento
                  </a>
                </p>
                <p>
                  Facebook:{" "}
                  <a
                    className="underline"
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    /dinamicaembelezamentoautomotivo
                  </a>
                </p>
              </div>
            </div>
            <div className="rounded-2xl border hairline bg-[#121315] p-6">
              <h3 className="text-lg font-semibold">Como chegar</h3>
              <p className="mt-2 text-[#c9cdd2]">
                Use a busca de mapa pelo endereço público. Horários de
                funcionamento não publicados nesta demo por falta de fonte
                oficial revalidada.
              </p>
              <a
                href={MAP_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full border hairline px-6 py-3 text-sm font-semibold hover:border-white/40"
              >
                Pesquisar endereço no mapa
              </a>
              <a
                href={WHATSAPP_SERVICOS}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block rounded-full bg-[#f4f2ed] px-6 py-3 text-center text-sm font-semibold text-[#0a0a0b] hover:bg-white"
              >
                Confirmar horário no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* 8. CTA FINAL */}
        <section className="inspection-light">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 text-center sm:px-6 md:py-24">
            <SectionLabel>Próximo passo</SectionLabel>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Quero avaliar meu carro.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#c9cdd2]">
              Envie o modelo, o ano e o que te incomoda hoje. Respondemos com
              a avaliação indicada. Se você é profissional, fale direto com a
              frente de treinamento.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_SERVICOS}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#f4f2ed] px-9 py-4 text-base font-semibold text-[#0a0a0b] hover:bg-white"
              >
                Quero avaliar meu carro
              </a>
              <a
                href={WHATSAPP_TREINAMENTO}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border hairline px-9 py-4 text-base font-semibold text-[#f4f2ed] hover:border-white/40"
              >
                Falar sobre cursos
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t hairline">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 text-sm text-[#9aa3ab] sm:px-6">
          <p className="font-semibold uppercase tracking-[0.18em] text-[#c9cdd2]">
            Dinâmica — Conceito
          </p>
          <p className="mt-2">
            Wordmark tipográfico para demonstração. Conceito comercial não
            oficial, sem uso de logo, fotos ou depoimentos do negócio. Página
            demo com noindex/nofollow.
          </p>
          <p className="mt-2">
            Fontes públicas: Lecto (serviços e centro de treinamento) e perfis
            públicos indicados. Detalhes e verificação em{" "}
            <span className="font-mono">IMPLEMENTATION_REPORT.md</span>.
          </p>
        </div>
      </footer>
    </div>
  );
}
