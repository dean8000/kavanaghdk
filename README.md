# KAVANAGH.DK

A futuristic placeholder site for kavanagh.dk.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

### Option 1: Import from GitHub

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import this repository: `github.com/dean8000/kavanaghdk`
4. Vercel will auto-detect Next.js and deploy

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

## DNS Configuration

Configure your DNS records at your domain registrar:

### Apex Domain (kavanagh.dk)
- **Type:** A
- **Name:** @ (or leave blank)
- **Value:** `76.76.21.21`

### WWW Subdomain (www.kavanagh.dk)
- **Type:** CNAME
- **Name:** www
- **Value:** `cname.vercel-dns.com`

### ⚠️ IMPORTANT: Email Configuration

**DO NOT modify or delete the following DNS records:**
- MX records (mail exchange)
- SPF records (TXT record for sender policy framework)
- DKIM records (domain keys identified mail)
- DMARC records (TXT record for domain-based message authentication)

The kavanagh.dk domain is used for email. Modifying these records will break email delivery.

## Technology Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel
