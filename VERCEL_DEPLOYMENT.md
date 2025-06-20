# Vercel Deployment Guide - Step by Step

## మీ Next.js Quiz App ని Vercel లో Deploy చేయడం

### Step 1: GitHub Repository Setup

1. **GitHub.com** లో login చేయండి
2. **"New repository"** క్లిక్ చేయండి
3. Repository name: `quiz-appp`
4. Description: "Next.js Quiz Application"
5. **Public** లేదా **Private** ఎంచుకోండి
6. **"Create repository"** క్లిక్ చేయండి

### Step 2: Local Repository ని GitHub లో Push చేయండి

Terminal లో ఈ commands run చేయండి:

```bash
# GitHub repository URL ని add చేయండి (మీ username తో replace చేయండి)
git remote add origin https://github.com/YOUR_USERNAME/quiz-appp.git

# Main branch ని set చేయండి
git branch -M main

# Code ని push చేయండి
git push -u origin main
```

### Step 3: MongoDB Atlas Setup

1. **MongoDB Atlas** (https://cloud.mongodb.com) లో account create చేయండి
2. **Free cluster** create చేయండి
3. **Database Access** లో user create చేయండి
4. **Network Access** లో IP address add చేయండి (0.0.0.0/0 for all)
5. **Connect** క్లిక్ చేసి connection string copy చేయండి

### Step 4: Vercel Account Create చేయండి

1. **Vercel.com** లో sign up చేయండి
2. **GitHub account** ని connect చేయండి
3. **"New Project"** క్లిక్ చేయండి

### Step 5: Project Import చేయండి

1. **Import Git Repository** సెక్షన్ లో మీ `quiz-appp` repository ని select చేయండి
2. **Framework Preset**: Next.js (auto-detected)
3. **Root Directory**: `./` (default)
4. **Build Command**: `npm run build` (auto-detected)
5. **Output Directory**: `.next` (auto-detected)
6. **Install Command**: `npm install` (auto-detected)

### Step 6: Environment Variables Set చేయండి

**Environment Variables** సెక్షన్ లో ఈ variables add చేయండి:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/quiz-app
NEXTAUTH_SECRET=your-super-secret-key-here-make-it-long-and-random
NEXTAUTH_URL=https://aomaspirant.com
```

**Important Notes:**

- `MONGODB_URI`: MongoDB Atlas connection string
- `NEXTAUTH_SECRET`: Random string (32+ characters)
- `NEXTAUTH_URL`: మీ domain URL

### Step 7: Deploy చేయండి

1. **"Deploy"** బటన్ క్లిక్ చేయండి
2. Build process wait చేయండి (2-3 minutes)
3. **"Visit"** బటన్ క్లిక్ చేసి మీ app చూడండి

### Step 8: Custom Domain Add చేయండి

1. Vercel dashboard లో **"Settings"** క్లిక్ చేయండి
2. **"Domains"** సెక్షన్ లో **"Add Domain"** క్లిక్ చేయండి
3. Domain name: `aomaspirant.com` enter చేయండి
4. **"Add"** క్లిక్ చేయండి

### Step 9: DNS Configuration

Hostinger DNS settings లో ఈ records add చేయండి:

```
Type: A
Name: @
Value: 76.76.19.36 (Vercel IP)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 10: SSL Certificate

Vercel automatically SSL certificate provide చేస్తుంది. DNS propagation తర్వాత (24-48 hours) HTTPS available అవుతుంది.

### Step 11: Testing

1. **https://aomaspirant.com** లో మీ app test చేయండి
2. **All features** work చేస్తున్నాయో check చేయండి
3. **Mobile responsiveness** test చేయండి

### Troubleshooting

**Common Issues:**

1. **Build Errors:**

   - Environment variables check చేయండి
   - Dependencies install అయ్యాయో verify చేయండి

2. **Database Connection:**

   - MongoDB Atlas connection string verify చేయండి
   - Network access settings check చేయండి

3. **Domain Issues:**
   - DNS propagation wait చేయండి
   - DNS records verify చేయండి

### Vercel Dashboard Features

- **Automatic Deployments**: Git push తో auto deploy
- **Preview Deployments**: Pull requests కి preview URLs
- **Analytics**: Performance metrics
- **Logs**: Real-time logs
- **Functions**: Serverless functions

### Cost

- **Hobby Plan**: Free (100GB bandwidth/month)
- **Pro Plan**: $20/month (unlimited bandwidth)

### Support

- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Community: https://github.com/vercel/vercel/discussions

---

**🎉 Congratulations! మీ quiz app live అయింది!**
