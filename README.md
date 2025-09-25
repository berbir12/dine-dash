# Dine Dash - Restaurant QR Code Ordering System

## Project Overview

Dine Dash is a modern restaurant ordering system that allows customers to scan QR codes to view menus and place orders directly from their mobile devices.

## Features

- **QR Code Menu Access**: Customers can scan QR codes to access restaurant menus
- **Real-time Ordering**: Place orders directly through the web interface
- **Admin Dashboard**: Restaurant staff can manage orders and menu items
- **Responsive Design**: Works seamlessly on mobile and desktop devices
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS

## Technologies Used

This project is built with:

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Backend**: Supabase for database and authentication
- **Build Tool**: Vite
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/berbir12/dine-dash.git
   cd dine-dash
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:8080` to view the application.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Main application pages
├── lib/                # Utility functions and services
├── integrations/       # External service integrations (Supabase)
├── hooks/              # Custom React hooks
└── assets/             # Static assets (images, icons)
```

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set up environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

### Other Platforms

The application can be deployed to any platform that supports static site hosting:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@dinedash.com or create an issue in the GitHub repository.