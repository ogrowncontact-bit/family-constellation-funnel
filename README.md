## SoulWeave — Funil de Captura de Leads

Landing page (Next.js + Tailwind) que captura leads (nome + e-mail), aplica um questionário rápido de constelação familiar, mostra um resultado personalizado gratuito e oferece um Relatório Completo em PDF (pago) enviado por e-mail — antes de direcionar o usuário para o app [SoulWeave Family Map](https://soulweave-family-map.lovable.app). Disponível em português, inglês e espanhol.

### O funil

1. **Landing page** (`/`) — captura nome + e-mail (`LeadForm`), salva na aba `Leads` do Google Sheets.
2. **Questionário** (`/questionario`) — 5 perguntas rápidas sobre padrões familiares. A pontuação é calculada no navegador (`src/lib/quiz.ts`) e também revalidada no servidor.
3. **Resultado** (`/resultado`) — mostra gratuitamente o padrão familiar dominante do usuário (um de 5 arquétipos) com um resumo personalizado, e oferece o **Relatório Completo em PDF** por um preço convertido automaticamente para a moeda do visitante (BRL para português, USD para inglês/espanhol), com a taxa de processamento/conversão discriminada de forma transparente.
4. **Checkout** — ao clicar em comprar, cria uma sessão do Stripe Checkout (`/api/checkout`).
5. **Obrigado** (`/obrigado`) — após o pagamento, confirma o pagamento, dispara o envio do PDF por e-mail (via Resend) e oferece um botão de reenvio, além do link para o app.

### Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Sem as variáveis de ambiente abaixo configuradas, o funil de captura de lead e o questionário continuam funcionando normalmente — apenas a etapa de pagamento/PDF fica indisponível (a compra retorna um erro amigável) e o registro em planilha é pulado silenciosamente (fica um aviso no log do servidor).

### Configurar o Google Sheets

1. Crie uma planilha no Google Sheets com três abas:
   - `Leads`, com a primeira linha: `Data`, `Nome`, `Email`, `Idioma`, `Origem`.
   - `Respostas`, com a primeira linha: `Data`, `Nome`, `Email`, `Idioma`, `Arquétipo`, `Respostas`.
   - `Compras`, com a primeira linha: `Data`, `Nome`, `Email`, `Idioma`, `Arquétipo`, `Payment Intent`.
2. No [Google Cloud Console](https://console.cloud.google.com/), crie um projeto (ou use um existente) e ative a **Google Sheets API**.
3. Crie uma **Service Account** (IAM & Admin → Service Accounts → Create), gere uma chave JSON e baixe o arquivo.
4. Compartilhe a planilha (botão "Compartilhar") com o e-mail da service account (algo como `nome@projeto.iam.gserviceaccount.com`), com permissão de **Editor**.
5. Copie `.env.local.example` para `.env.local` e preencha `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY` (mantenha as quebras de linha `\n`) e `GOOGLE_SHEET_ID` (o ID na URL da planilha).
6. Reinicie `npm run dev`.

### Configurar o Stripe (cobrança do relatório completo)

1. Crie uma conta em [stripe.com](https://stripe.com) (o modo de teste já funciona sem verificação).
2. Copie a **Secret key** (Dashboard → Developers → API keys) para `STRIPE_SECRET_KEY` no `.env.local`.
3. Depois de publicar o site, vá em Dashboard → Developers → Webhooks → Add endpoint, aponte para `https://SEU_DOMINIO/api/stripe/webhook`, selecione o evento `checkout.session.completed`, e copie o **Signing secret** para `STRIPE_WEBHOOK_SECRET`.
   - Esse webhook é só uma rede de segurança: o envio do PDF já é disparado direto na página `/obrigado` quando o Stripe redireciona o cliente de volta. O webhook garante a entrega mesmo se o cliente fechar a aba antes do redirecionamento terminar.
4. **Sobre o preço e as taxas:** o preço-base do relatório é R$27,00 (`NET_TARGET_BRL_CENTS` em `src/lib/pricing.ts`). Para visitantes em inglês/espanhol, o valor é convertido automaticamente para USD (cotação ao vivo, com um valor de fallback caso a busca falhe) e é somada uma taxa de processamento/conversão — cobrada do cliente como um item separado e explicado na página de resultado — calculada para garantir que você sempre receba os R$27,00 (equivalentes) líquidos, independentemente da taxa real que o Stripe cobrar. As taxas assumidas (`STRIPE_FEE_PERCENT`, `STRIPE_FEE_FIXED_CENTS_BRL`, `STRIPE_FEE_FIXED_CENTS_USD`) são estimativas — confira a taxa real da sua conta em [dashboard.stripe.com/settings/billing](https://dashboard.stripe.com/settings/billing) e ajuste esses valores no `.env.local` se necessário para garantir a margem exata que você quer.

### Configurar o Resend (envio do PDF por e-mail)

1. Crie uma conta em [resend.com](https://resend.com) e gere uma API key para `RESEND_API_KEY`.
2. Verifique um domínio próprio (Dashboard → Domains) e defina `RESEND_FROM_EMAIL` com um remetente nesse domínio (ex.: `SoulWeave <relatorio@seudominio.com>`). Sem isso, o envio cai no domínio de testes do Resend, que só entrega para o e-mail da sua própria conta — ok para testar, não para clientes reais.

### Estrutura

- `src/app/page.tsx` — monta a landing page a partir das seções em `src/components/`.
- `src/app/questionario/`, `src/app/resultado/`, `src/app/obrigado/` — as três etapas do funil pós-lead.
- `src/lib/quiz.ts` — perguntas, pesos de pontuação e cálculo do arquétipo dominante (independente de idioma).
- `src/lib/i18n/translations.ts` — dicionário de traduções (pt/en/es), incluindo as perguntas do questionário, os 5 arquétipos e o conteúdo do relatório em PDF.
- `src/lib/pricing.ts` — conversão de moeda e cálculo do preço com taxa de processamento embutida.
- `src/lib/pdf/` — geração do PDF do relatório completo (`@react-pdf/renderer`).
- `src/lib/stripe.ts`, `src/lib/resend.ts` — clientes do Stripe e do Resend.
- `src/lib/report-delivery.ts` — lógica idempotente de entrega do relatório (usada tanto pela página `/obrigado` quanto pelo webhook do Stripe).
- `src/app/api/lead`, `/api/questionnaire`, `/api/pricing`, `/api/checkout`, `/api/checkout/verify`, `/api/stripe/webhook`, `/api/report/resend` — rotas da API do funil.
- `NEXT_PUBLIC_APP_URL` (em `.env.local`) — para onde o usuário é redirecionado ao continuar para o app (gratuito, a qualquer momento do funil, ou após comprar o relatório). Padrão: `https://soulweave-family-map.lovable.app`.
