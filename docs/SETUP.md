# Configuração de serviços externos

## Supabase
1. Crie um projeto Supabase.
2. Configure as variáveis `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` e `SUPABASE_SERVICE_ROLE_KEY`.
3. A chave service role deve existir somente no servidor, nunca em variáveis NEXT_PUBLIC.
4. Ative RLS em todas as tabelas e crie políticas por usuário/profissional.

## Google Calendar
1. No Google Cloud Console, crie um projeto e habilite Google Calendar API.
2. Configure a tela de consentimento OAuth e cadastre a URL de callback HTTPS.
3. Solicite escopo mínimo necessário para ler e escrever eventos do calendário.
4. Armazene access/refresh tokens criptografados no servidor.
5. Antes de confirmar reserva, consultar freeBusy e validar novamente dentro da operação transacional.
6. Configure Calendar watch channels e renove-os antes da expiração; processe notificações com idempotência.
7. Implemente reconciliação periódica, pois notificações push não substituem a sincronização de segurança.

## WhatsApp
Escolha WhatsApp Cloud API ou um provedor compatível. Configure templates aprovados para mensagens iniciadas pela empresa e respeite opt-in e janela de atendimento.

## Segurança e LGPD
- HTTPS obrigatório em produção.
- Nunca commitar segredos ou tokens.
- Rate limit, CAPTCHA e validação server-side.
- Consentimento e política de privacidade claros; retenção e exclusão de dados.
- Logs sem expor telefone completo, tokens ou dados pessoais desnecessários.

## Fuso horário
Use `America/Sao_Paulo` para regras de negócio e armazenamento consistente de timestamps com timezone.
