# ⌨️ TypeMon

TypeMon is a high-performance, real-time multiplayer competitive typing game. Designed for speed and accuracy, it allows players to challenge themselves and others in a dynamic typing environment.

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen.svg)](https://typemon.agula.xyz/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)

---

## 🚀 Overview

TypeMon combines the thrill of competitive gaming with the utility of typing practice. Whether you're looking to improve your WPM (Words Per Minute) or compete for the top spot on the leaderboard, TypeMon provides the tools to track your progress and hone your skills.

<p align="center">
  <img width="100%" alt="TypeMon Screenshot" src="screenshot/screenshot.png">
</p>

## ✨ Key Features

- **🌐 Multiplayer Battles**: Create or join lobbies with up to 4 players for real-time typing races.
- **⚡ Real-time Feedback**: Visualize your progress and your opponents' positions instantly using Socket.IO.
- **📊 Comprehensive Stats**: Track WPM (Words Per Minute), CPM (Characters Per Minute), and accuracy for every session.
- **🌍 Multi-language Support**: Practice typing in various languages, with a focus on Mongolian and English.
- **🔐 Secure Authentication**: Integrated NextAuth for secure login via Email/Password, GitHub, or Google.
- **📈 Personal History**: Monitor your growth over time with a detailed history of your typing tests.

## 🛠️ Tech Stack

- **Frontend**: [Next.js 14](https://nextjs.org/) (App Router), [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Real-time**: [Socket.IO](https://socket.io/)
- **Backend / Database**: [Node.js](https://nodejs.org/), [Prisma](https://www.prisma.io/), [MongoDB](https://www.mongodb.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Monorepo Management**: [Turborepo](https://turbo.build/repo), [pnpm](https://pnpm.io/)

## 📂 Project Structure

This project is a monorepo managed by Turborepo:

- `apps/web`: The core Next.js application, including the custom Socket.IO server.
- `packages/*`: Shared configurations and utilities (extensible for future packages).

## 🚦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v22.0.0 or higher)
- [pnpm](https://pnpm.io/) (v7.0.0 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas instance)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/OthyTenk/typemon.git
   cd typemon
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Environment Setup**:
   Create a `.env` file in `apps/web/` based on `.env.example`:
   ```bash
   cp apps/web/.env.example apps/web/.env
   ```
   Fill in your `DATABASE_URL`, authentication secrets, and provider keys.

4. **Initialize Database**:
   ```bash
   pnpm --filter @typemon/web prisma generate
   ```

### Running Locally

To start the development server for the web app:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

Refer to [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">Made with ❤️ for the typing community.</p>
