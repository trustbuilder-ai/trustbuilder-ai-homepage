# TrustBuilder Wargames AI API Documentation

Modern, interactive API documentation for the TrustBuilder Wargames AI server.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 📋 Prerequisites

- Node.js 18+
- pnpm 8+

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Start dev server with hot reload at localhost:5173
pnpm run dev

# Run linting
pnpm run lint

# Format code
pnpm run format
```

## 📦 Build & Deploy

```bash
# Build for production
pnpm run build

# Preview production build locally
pnpm run preview

# Output directory: dist/
```

## 🏗️ Project Structure

```
frontend/
├── src/
│   ├── main.js          # Application entry point
│   ├── style.css        # Global styles
│   └── components/      # UI components
├── public/              # Static assets
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies & scripts
```

## 🔧 Configuration

### Environment Variables

Create `.env` file for API configuration:

```env
VITE_API_BASE_URL=https://wargames-ai.trb.ai
```

### Vite Config

Customize build settings in `vite.config.js`:

```js
export default {
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: true
  }
}
```

## 📚 API Endpoints

- `GET /llm` - Get LLM metadata
- `POST /llm` - Submit prompt to LLM
- `GET /eval-results` - Get evaluation results
- `POST /join-game` - Join game session
- `GET /game-status` - Get game status

## 🎨 Tech Stack

- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS
- **Flowbite** - UI components
- **Lucide Icons** - Icon library

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format code with Prettier |

## 🚢 Deployment

The built files in `dist/` can be deployed to any static hosting service:

```bash
# Build
pnpm run build

# Deploy dist/ folder to:
# - Vercel
# - Netlify
# - GitHub Pages
# - AWS S3
# - etc.
```

## 📄 License

MIT