# ShoreAgents AI Suite - Central Hub

A modern Electron-based central hub application for managing Real Estate BPO applications, featuring a clean interface similar to Adobe Creative Cloud.

## Features

- **Clean Authentication System**: Simple login interface with demo accounts
- **Application Management**: Central hub for launching 4 Real Estate BPO applications
- **Modern UI/UX**: Built with shadcn/ui components and Tailwind CSS
- **Real-time Status**: App status indicators and launch feedback
- **Cross-platform**: Runs on Windows, macOS, and Linux

## Applications Included

1. **ShoreAgents IT Hub** - System management and infrastructure tools
2. **ShoreAgents Admin Hub** - Administrative control and management center
3. **ShoreAgents Staff Hub** - Staff management and scheduling platform
4. **ShoreAgents Care Hub** - Client care and support management system

## Technology Stack

- **Desktop Framework**: Electron
- **Build Tool**: Vite
- **Frontend**: React 18+ with TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: Zustand
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shoreagents/ai-suite.git
cd shoreagents-ai-suite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run electron-dev
```

### Building for Production

```bash
# Build for current platform
npm run dist

# Build for all platforms
npm run electron-build
```

## Demo Accounts

Use these credentials to test the application:

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@shoreagents.com | password |
| Staff | staff@shoreagents.com | password |
| Nurse | nurse@shoreagents.com | password |
| IT | it@shoreagents.com | password |

## Project Structure

```
shoreagents-ai-suite/
├── electron/           # Electron main process
├── src/
│   ├── components/     # React components
│   ├── stores/         # Zustand stores
│   ├── types/          # TypeScript types
│   ├── lib/            # Utilities
│   └── styles/         # CSS styles
├── public/             # Static assets
└── dist/               # Build output
```

## Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run electron` - Run Electron app
- `npm run electron-dev` - Run with hot reload
- `npm run dist` - Build distributable packages
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@shoreagents.com or create an issue in the GitHub repository. 