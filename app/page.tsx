"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CalendarDays, Check, Clock3, Scissors, ShieldCheck } from "lucide-react";

const services = [
  { name: "Barba", duration: 30, price: 35 },
  { name: "Corte Simples", duration: 40, price: 40 },
  { name: "Degradê", duration: 50, price: 45 },
  { name: "Degradê e Barba", duration: 70, price: 70 },
  { name: "Infantil", duration: 40, price: 35 },
  { name: "Social", duration: 40, price: 40 },
  { name: "Tesoura", duration: 50, price: 50 },
  { name: "Tesoura e Máquina", duration: 60, price: 55 }
];

const times = ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

function dateLabel(date: Date) {
  return new Intl.DateTimeFormat("pt-BR", { weekday: "short", day: "2-digit", month: "short", timeZone: "America/Sao_Paulo" }).format(date);
}

export default function Home() {
  const [service, setService] = useState(services[0].name);
  const [day, setDay] = useState(0);
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const dates = useMemo(() => Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d;
  }), []);
  const selected = services.find((s) => s.name === service)!;

  function submitBooking(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // A confirmação real será ligada à API transacional + Supabase + Google Calendar.
    setConfirmed(true);
  }

  return (
    <main className="min-h-screen overflow-hidden">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <a href="#" className="font-display text-xl tracking-[.18em] text-white">GONÇALVES<span className="gold-text">.</span></a>
          <a href="#agendar" className="rounded-full border border-[#D4AF37]/70 px-4 py-2 text-xs font-semibold tracking-wider text-[#E7C65D]">AGENDAR HORÁRIO</a>
        </div>
      </header>

      <section className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 text-center sm:pt-24">
        <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[100px]" />
        <p className="mb-4 text-xs font-semibold uppercase tracking-[.35em] text-[#D4AF37]">Desde 2017 · 9 anos de tradição</p>
        <h1 className="font-display text-5xl leading-tight sm:text-7xl">Seu estilo,<br /><span className="gold-text italic">nossa assinatura.</span></h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/60">Atendimento de qualidade, cuidado em cada detalhe e o estilo que combina com você.</p>
        <a href="#agendar" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-bold text-black transition hover:bg-[#f0d56d]">Escolher meu horário <ArrowRight size={17} /></a>
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs text-white/50">
          <span className="flex items-center gap-2"><ShieldCheck size={15} className="text-[#D4AF37]" /> Agendamento simples</span>
          <span className="flex items-center gap-2"><Clock3 size={15} className="text-[#D4AF37]" /> Horário organizado</span>
          <span className="flex items-center gap-2"><Scissors size={15} className="text-[#D4AF37]" /> Atendimento profissional</span>
        </div>
      </section>

      <section id="agendar" className="mx-auto max-w-3xl scroll-mt-6 px-5 pb-20">
        <div className="mb-7 text-center">
          <p className="text-xs uppercase tracking-[.3em] text-[#D4AF37]">Agendamento online</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">Reserve seu momento</h2>
          <p className="mt-2 text-sm text-white/50">Escolha o serviço, dia e horário desejados.</p>
        </div>

        {confirmed ? (
          <div className="gold-border rounded-3xl bg-white/[.03] p-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37] text-black"><Check size={28} /></div>
            <h3 className="mt-5 font-display text-3xl">Solicitação recebida!</h3>
            <p className="mt-3 text-sm leading-6 text-white/60">Esta é uma prévia da experiência. A confirmação definitiva será ativada após conectar o banco de dados e o Google Agenda.</p>
            <div className="mt-6 rounded-2xl bg-black p-5 text-left text-sm">
              <p><span className="text-white/40">Cliente:</span> {name}</p>
              <p className="mt-2"><span className="text-white/40">Serviço:</span> {service}</p>
              <p className="mt-2"><span className="text-white/40">Horário:</span> {dateLabel(dates[day])} · {time}</p>
            </div>
            <button onClick={() => { setConfirmed(false); setTime(""); }} className="mt-6 text-sm text-[#D4AF37] underline">Fazer outro agendamento</button>
          </div>
        ) : (
          <form onSubmit={submitBooking} className="space-y-7 rounded-3xl border border-white/10 bg-white/[.025] p-5 sm:p-8">
            <div>
              <div className="mb-3 flex items-center justify-between"><h3 className="font-semibold">01. Escolha o serviço</h3><span className="text-xs text-white/40">1 de 4</span></div>
              <div className="grid gap-2 sm:grid-cols-2">
                {services.map((item) => <button type="button" key={item.name} onClick={() => setService(item.name)} className={`flex items-center justify-between rounded-xl border p-4 text-left transition ${service === item.name ? "border-[#D4AF37] bg-[#D4AF37]/10" : "border-white/10 bg-black hover:border-white/30"}`}>
                  <span><span className="block text-sm font-medium">{item.name}</span><span className="mt-1 block text-xs text-white/40">{item.duration} min</span></span>
                  <span className="text-sm font-semibold text-[#D4AF37]">R$ {item.price.toFixed(2).replace(".", ",")}</span>
                </button>)}
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between"><h3 className="font-semibold">02. Escolha o dia</h3><CalendarDays size={17} className="text-[#D4AF37]" /></div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {dates.map((date, i) => <button type="button" key={date.toISOString()} onClick={() => { setDay(i); setTime(""); }} className={`min-w-[82px] rounded-xl border px-3 py-3 text-center text-xs ${day === i ? "border-[#D4AF37] bg-[#D4AF37] text-black" : "border-white/10 bg-black text-white/70"}`}>
                  <span className="block capitalize">{new Intl.DateTimeFormat("pt-BR", { weekday: "short", timeZone: "America/Sao_Paulo" }).format(date)}</span><strong className="mt-1 block text-lg">{new Intl.DateTimeFormat("pt-BR", { day: "2-digit", timeZone: "America/Sao_Paulo" }).format(date)}</strong>
                </button>)}
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between"><h3 className="font-semibold">03. Escolha o horário</h3><span className="text-xs text-white/40">Disponibilidade demonstrativa</span></div>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                {times.map((t) => <button type="button" key={t} onClick={() => setTime(t)} className={`rounded-xl border py-3 text-sm ${time === t ? "border-[#D4AF37] bg-[#D4AF37] font-bold text-black" : "border-white/10 bg-black text-white/70 hover:border-white/30"}`}>{t}</button>)}
              </div>
            </div>

            <div>
              <div className="mb-3"><h3 className="font-semibold">04. Seus dados</h3><p className="mt-1 text-xs text-white/40">Usaremos seu WhatsApp para informações sobre o agendamento.</p></div>
              <div className="grid gap-3 sm:grid-cols-2">
                <input required minLength={2} value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-sm outline-none focus:border-[#D4AF37]" />
                <input required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="WhatsApp com DDD" inputMode="tel" className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-sm outline-none focus:border-[#D4AF37]" />
              </div>
            </div>

            <button type="submit" disabled={!time || !name.trim() || !phone.trim()} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-4 text-sm font-bold text-black transition hover:bg-[#f0d56d] disabled:cursor-not-allowed disabled:opacity-40">Solicitar agendamento <ArrowRight size={17} /></button>
            <p className="text-center text-[11px] leading-5 text-white/35">Ao continuar, você concorda com o uso dos dados para gerenciamento do agendamento, conforme a política de privacidade.</p>
          </form>
        )}
      </section>

      <footer className="border-t border-white/10 px-5 py-10 text-center">
        <p className="font-display text-xl tracking-[.16em]">BARBEARIA <span className="gold-text">GONÇALVES</span></p>
        <p className="mt-3 font-display text-lg italic text-[#D4AF37]">Obrigado pela confiança!</p>
        <p className="mt-3 text-[10px] uppercase tracking-[.25em] text-white/30">Desde 2017 · 9 anos de mercado</p>
      </footer>
    </main>
  );
}
