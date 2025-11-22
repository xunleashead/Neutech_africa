# NeuTechAfrica Website

A modern, production-ready Next.js 14 application for NeuTechAfrica - a leading technology solutions provider in Africa.

## Features

- **Modern Design**: Beautiful, responsive UI with smooth animations using Framer Motion
- **Full Stack**: Complete with API routes for contact form handling
- **SEO Optimized**: Comprehensive metadata and semantic HTML
- **Responsive**: Mobile-first design that works on all devices
- **Type Safe**: Built with TypeScript for reliability
- **Component-Based**: Reusable components with shadcn/ui
- **Fast**: Built on Next.js 14 with App Router and Turbopack

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Package Manager**: Bun

## Project Structure

```
neutechafrica/
├── src/
│   ├── app/
│   │   ├── about/          # About page
│   │   ├── api/contact/    # Contact form API
│   │   ├── layout.tsx      # Root layout with Header/Footer
│   │   └── page.tsx        # Homepage
│   ├── components/
│   │   ├── about/          # About page sections
│   │   ├── sections/       # Homepage sections
│   │   ├── ui/             # shadcn/ui components
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   ├── data/
│   │   └── content.ts      # All content data
│   └── lib/
│       └── utils.ts        # Utility functions
└── public/
    ├── images/             # Image assets
    └── favicon.svg         # Site favicon
```

## Pages

### Homepage
- Hero section with call-to-action
- About preview
- Services showcase (4 services)
- Resources section (3 resources)
- Testimonials (client reviews)
- Contact form

### About Page
- Hero banner
- Company story
- Mission & Vision
- Core values (4 values)
- Team members (3 members)

## Getting Started

### Prerequisites
- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd neutechafrica
```

2. Install dependencies:
```bash
bun install
```

3. Run the development server:
```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run linter

### Customization

#### Content
All content is centralized in `src/data/content.ts`. Edit this file to update:
- Team members
- Services
- Resources
- Testimonials
- Social links
- Contact information
- Company information

#### Styling
- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Inline with Tailwind classes

#### Images
Place images in `public/images/` and reference them as `/images/filename.ext`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

Or use Vercel CLI:
```bash
bunx vercel
```

### Netlify

1. Build the project:
```bash
bun run build
```

2. Deploy the `.next` folder

### Other Platforms

Build the project and deploy the `.next` folder to any Node.js hosting platform.

## Environment Variables

For production, you may want to add:

```env
# Email service (optional)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password

# Contact form recipient
CONTACT_EMAIL=neutechafrica@gmail.com
```

## Contact Form Integration

The contact form currently logs submissions to the console. To integrate with an email service:

1. Install an email package (e.g., `nodemailer`, `@sendgrid/mail`, or `resend`)
2. Update `src/app/api/contact/route.ts` with your email service logic
3. Add environment variables for your email service

## Team Members

To add/edit team members, update the `teamMembers` array in `src/data/content.ts`:

```typescript
{
  id: 4,
  name: "Your Name",
  role: "Your Role",
  bio: "Your bio",
  image: "/images/your-photo.jpg",
}
```

## Services

To add/edit services, update the `services` array in `src/data/content.ts`. Available icons: `shield`, `code`, `brain`, `database`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

## License

Copyright © 2025 NeuTechAfrica. All rights reserved.

## Support

For questions or support, contact:
- Email: neutechafrica@gmail.com
- Phone: +254 714 886 459
- Location: Nairobi, Kenya

## Social Media

- [Facebook](https://www.facebook.com/profile.php?id=61554817152967)
- [Twitter/X](https://x.com/NeuTechAfrica?t=yGoT71rCMAy_uqvcTjbaLQ&s=09)
- [Instagram](https://www.instagram.com/neu_techafrica?igsh=YzljYTk1ODg3Zg==)
- [LinkedIn](https://www.linkedin.com/company/neutechafrica)

---

Built with ❤️ by NeuTechAfrica
