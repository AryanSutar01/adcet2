# Smart AI Traffic Project

This repository contains a Node.js/Express backend and static HTML frontend.

## Vercel Deployment Setup

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Login:
   ```bash
   vercel login
   ```
3. Deploy:
   ```bash
   vercel
   ```
4. In Vercel project settings, add Environment Variables (if using MongoDB):
   - `MONGO_URI`
   - `NODE_ENV=production`

## Test API

- Local: `npm start` then visit `http://localhost:5000/api/status`
- Deployed: `https://<your-deployment>.vercel.app/api/status`
