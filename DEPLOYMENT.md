# Hostinger Deployment Guide

## మీ Next.js Quiz App ని Hostinger లో Deploy చేయడం

### Option 1: Vercel (Recommended)

1. **Vercel account create చేయండి**

   - https://vercel.com లో sign up చేయండి
   - GitHub account ని connect చేయండి

2. **Repository import చేయండి**

   - "New Project" క్లిక్ చేయండి
   - మీ GitHub repository ని select చేయండి

3. **Environment Variables set చేయండి**

   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/quiz-app
   NEXTAUTH_SECRET=your-secret-key-here
   NEXTAUTH_URL=https://aomaspirant.com
   ```

4. **Deploy చేయండి**

   - "Deploy" బటన్ క్లిక్ చేయండి

5. **Custom Domain add చేయండి**
   - Vercel dashboard లో "Settings" → "Domains"
   - aomaspirant.com add చేయండి
   - DNS records update చేయండి

### Option 2: Hostinger VPS/Cloud

#### Prerequisites:

- Hostinger VPS plan
- Node.js 18+ installed
- PM2 process manager
- Nginx web server

#### Steps:

1. **VPS లో Node.js install చేయండి**

   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Project clone చేయండి**

   ```bash
   git clone https://github.com/yourusername/quiz-appp.git
   cd quiz-appp
   ```

3. **Dependencies install చేయండి**

   ```bash
   npm install
   ```

4. **Environment variables set చేయండి**

   ```bash
   nano .env
   # env.example లో ఉన్న variables add చేయండి
   ```

5. **Build చేయండి**

   ```bash
   npm run build
   ```

6. **PM2 install & start చేయండి**

   ```bash
   npm install -g pm2
   pm2 start npm --name "quiz-app" -- start
   pm2 startup
   pm2 save
   ```

7. **Nginx configuration**

   ```nginx
   server {
       listen 80;
       server_name aomaspirant.com www.aomaspirant.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

8. **SSL certificate install చేయండి**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d aomaspirant.com -d www.aomaspirant.com
   ```

### Option 3: Hostinger Shared Hosting (Static Export)

మీ app ని static files గా export చేసి shared hosting లో deploy చేయవచ్చు:

1. **next.config.ts update చేయండి**

   ```typescript
   const nextConfig: NextConfig = {
     output: "export",
     trailingSlash: true,
     images: {
       unoptimized: true,
     },
   };
   ```

2. **Build & export చేయండి**

   ```bash
   npm run export
   ```

3. **out/ folder ని Hostinger file manager లో upload చేయండి**

### DNS Configuration

Hostinger DNS settings లో:

```
Type: A
Name: @
Value: [Your server IP or Vercel IP]

Type: CNAME
Name: www
Value: aomaspirant.com
```

### Important Notes:

1. **MongoDB Atlas** free tier ఉపయోగించవచ్చు
2. **Environment variables** ఎప్పుడూ secure గా ఉంచండి
3. **Regular backups** తీసుకోండి
4. **Monitoring** setup చేయండి

### Support:

ఏదైనా సమస్య ఉంటే:

- Hostinger support
- Vercel documentation
- Next.js deployment guide
