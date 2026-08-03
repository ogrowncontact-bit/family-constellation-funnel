## SoulWeave — Funil de Captura de Leads

Landing page (Next.js + Tailwind) que captura leads (nome + e-mail), salva numa Google Sheet e redireciona o usuário para o app [SoulWeave Family Map](https://soulweave-family-map.lovable.app). Disponível em português, inglês e espanhol.

### Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

### Configurar o Google Sheets

1. Crie uma planilha no Google Sheets com uma aba chamada `Leads` e a primeira linha com os cabeçalhos: `Data`, `Nome`, `Email`, `Idioma`, `Origem`.
2. No [Google Cloud Console](https://console.cloud.google.com/), crie um projeto (ou use um existente) e ative a **Google Sheets API**.
3. Crie uma **Service Account** (IAM & Admin → Service Accounts → Create), gere uma chave JSON e baixe o arquivo.
4. Compartilhe a planilha (botão "Compartilhar") com o e-mail da service account (algo como `nome@projeto.iam.gserviceaccount.com`), com permissão de **Editor**.
5. Copie `.env.local.example` para `.env.local` e preencha:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`: o e-mail da service account.
   - `GOOGLE_PRIVATE_KEY`: o campo `private_key` do JSON baixado (mantenha as quebras de linha `\n`).
   - `GOOGLE_SHEET_ID`: o ID que aparece na URL da planilha.
6. Reinicie `npm run dev`. Sem essas variáveis, o formulário continua funcionando e redirecionando, mas o lead não é salvo (fica um aviso no log do servidor).

### Estrutura

- `src/app/page.tsx` — monta a landing page a partir das seções em `src/components/`.
- `src/lib/i18n/` — dicionário de traduções (pt/en/es) e o provider de idioma.
- `src/app/api/lead/route.ts` — recebe o POST do formulário, valida e chama `src/lib/googleSheets.ts`.
- `NEXT_PUBLIC_APP_URL` (em `.env.local`) — para onde o usuário é redirecionado após enviar o formulário. Padrão: `https://soulweave-family-map.lovable.app`.
