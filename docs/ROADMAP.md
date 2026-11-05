# Roadmap de implementação

## Fase 1 — Base
- [x] Scaffold Next.js + TypeScript + Tailwind.
- [x] Primeira interface responsiva de agendamento (dados demonstrativos).
- [ ] Supabase: schema, RLS e autenticação administrativa.
- [ ] Cadastro editável de serviços, equipe e horários.

## Fase 2 — Reserva confiável
- [ ] Disponibilidade real por profissional, duração, expediente, folgas e bloqueios.
- [ ] Consulta Google Calendar freeBusy no servidor.
- [ ] Transação no Postgres e prevenção de sobreposição de horários.
- [ ] Revalidar calendário imediatamente antes de confirmar.
- [ ] Criar, atualizar e cancelar eventos com fila de retry e idempotência.
- [ ] Sincronização de eventos externos via webhook/push + reconciliação.

## Fase 3 — Operação
- [ ] Confirmações e lembretes WhatsApp (24h e 2h).
- [ ] Cancelamento e remarcação conforme janela configurável.
- [ ] Dashboard, agenda, status compareceu/faltou/concluído.
- [ ] CRM, aniversariantes e clientes inativos.
- [ ] Financeiro, despesas, comissões, exportação e ranking de serviços.
- [ ] Mapa de calor de horários de pico e ociosos.

## Fase 4 — Produção
- [ ] CAPTCHA, rate limit, auditoria, LGPD e política de retenção.
- [ ] Testes simultâneos provando que não há dupla reserva.
- [ ] Testes de falha/expiração Google OAuth e reprocessamento de fila.
- [ ] Testes mobile, acessibilidade, SEO local e PWA.
- [ ] Lighthouse e deploy público.

**Aviso:** a interface inicial não é um sistema de agendamento operacional. Os horários e preços são exemplos temporários e não devem ser divulgados como disponibilidade/preços reais antes da configuração administrativa.
