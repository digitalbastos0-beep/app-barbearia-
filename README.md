# Barbearia Gonçalves — Agendamento Online

Aplicação web mobile-first para agendamento, gestão da barbearia e integração com Google Calendar.

## Identidade
- Preto, dourado e branco; visual premium e masculino.
- Marca: Barbearia Gonçalves, desde 2017.
- Frase institucional: **Obrigado pela confiança!**
- Idioma: pt-BR; fuso horário: `America/Sao_Paulo`.

## Stack planejada
- Next.js + TypeScript + Tailwind CSS
- Supabase (Postgres, Auth e políticas RLS)
- Google Calendar API (OAuth 2.0, freeBusy e sincronização)
- WhatsApp Cloud API ou provedor compatível
- Deploy recomendado: Vercel

## Estado atual
Este repositório contém o scaffold inicial da interface. Integrações externas, persistência, autenticação, notificações e publicação ainda precisam ser configuradas e testadas. Não use em produção até concluir os itens abaixo.

## Rodar localmente
```bash
npm install
cp .env.example .env.local
npm run dev
``

## Configuração
Consulte [docs/SETUP.md](docs/SETUP.md) e [docs/ROADMAP.md](docs/ROADMAP.md).

## Serviços iniciais
Barba, Corte Simples, Degradê, Degradê e Barba, Infantil, Social, Tesoura, Tesoura e Máquina.

## Próximas etapas
1. Conectar Supabase e aplicar o schema SQL.
2. Implementar autenticação administrativa e permissões.
3. Integrar Google Calendar com validação de conflitos no servidor.
4. Integrar WhatsApp e fila de lembretes.
5. Implementar painel financeiro/CRM e relatórios.
6. Testes concorrentes, segurança, LGPD e deploy.
