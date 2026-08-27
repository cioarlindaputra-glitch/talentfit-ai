# TalentFit AI 🚀

AI-powered talent management and recruitment platform built with Next.js.

## Features

- 🤖 **AI-Powered Matching** - Smart candidate to job matching
- 📊 **Analytics** - Real-time insights and metrics
- ⚡ **Fast Processing** - Quick and efficient operations
- 🎨 **Modern UI** - Built with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Prisma (ready to configure)

## Setup & Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation Steps

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open your browser
# Navigate to http://localhost:3000
```

## Project Structure

```
talentfit-ai/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── dashboard/
│   │   └── page.tsx            # Dashboard
│   └── auth/
│       └── login/
│           └── page.tsx        # Login page
├── public/                      # Static files
├── prisma/
│   └── schema.prisma           # Database schema
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
└── .gitignore
```

## Available Routes

- `/` - Home page
- `/dashboard` - Dashboard
- `/auth/login` - Login page

## Deployment on Vercel

### Option 1: Using Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: Connect GitHub to Vercel
1. Go to [Vercel Dashboard](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Click "Deploy"

Vercel will automatically:
- Install dependencies
- Build the project
- Deploy to production

## Environment Variables

Create a `.env.local` file for local development:

```env
# Add your environment variables here
# NEXT_PUBLIC_API_URL=https://api.example.com
```

## Scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## Next Steps

- [ ] Configure database with Prisma
- [ ] Setup authentication (next-auth)
- [ ] Create API routes
- [ ] Build React components
- [ ] Connect to backend services
- [ ] Implement AI matching algorithm
- [ ] Setup CI/CD pipeline

## License

MIT

## Support

For issues and questions, please check the documentation or create an issue in the repository.

---

**Ready to deploy! 🎉**
