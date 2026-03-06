# Praskla Technology - Premium IT Company Website

A modern, premium IT company website built with Next.js 14, Tailwind CSS, and Framer Motion. Features glassmorphism design, neon animations, and a fully functional contact form with NodeMailer SMTP integration.

## Features

- **Modern Design**: Dark futuristic theme with glassmorphism and neon effects
- **Responsive Layout**: Fully responsive on mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion animations throughout
- **Apple Dock Navbar**: Floating navigation bar with smooth interactions
- **Hero Section**: Animated background with floating particles
- **Services Showcase**: 6 service cards with hover effects
- **Featured Projects**: Project showcase with gradient borders
- **Testimonials**: Carousel slider with client testimonials
- **Pricing Calculator**: Interactive service pricing calculator
- **Blog Section**: Articles and insights cards
- **Contact Form**: Fully functional form with NodeMailer SMTP
- **Careers Page**: Job listings with filtering
- **SEO Optimized**: Meta tags, OpenGraph, Twitter cards
- **Performance**: Optimized for Vercel deployment

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email**: NodeMailer
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- SMTP credentials (Gmail, SendGrid, etc.)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd praskla-tech
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Configure your SMTP settings in `.env.local`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM_EMAIL=noreply@prasklatechnology.com
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
praskla-tech/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   ├── careers/
│   │   └── page.tsx         # Careers page
│   └── api/
│       └── contact/
│           └── route.ts     # Contact form API
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Services.tsx         # Services section
│   ├── Projects.tsx         # Projects section
│   ├── Testimonials.tsx     # Testimonials carousel
│   ├── PricingCalculator.tsx # Pricing calculator
│   ├── BlogSection.tsx      # Blog/insights section
│   ├── ContactForm.tsx      # Contact form component
│   └── Footer.tsx           # Footer
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## Configuration

### SMTP Setup

#### Gmail
1. Enable 2-factor authentication
2. Generate an [App Password](https://myaccount.google.com/apppasswords)
3. Use the app password in `SMTP_PASSWORD`

#### SendGrid
```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
```

#### Other Providers
Configure according to your email provider's SMTP settings.

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  'neon-purple': '#6d28ff',
  'neon-pink': '#ff2bd6',
  'neon-blue': '#00eaff',
}
```

### Content
- Update company info in `components/Footer.tsx`
- Modify services in `components/Services.tsx`
- Add projects in `components/Projects.tsx`
- Update testimonials in `components/Testimonials.tsx`

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

```bash
npm run build
npm start
```

## API Routes

### POST /api/contact
Sends contact form submissions via email.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "message": "Email sent successfully"
}
```

## Performance Optimization

- Image optimization with Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle
- Code splitting with dynamic imports
- SEO meta tags and structured data
- Responsive design for all devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues or questions, contact: info@prasklatechnology.com

## Company Information

**Praskla Technology**
- Phone: +91 95913 10740
- Email: info@prasklatechnology.com
- Location: Tamil Nadu, India
- Website: https://prasklatechnology.com
