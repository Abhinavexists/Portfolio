# Portfolio

A responsive and interactive portfolio website built with TypeScript and React.

>
> The Project is no longer maintained -> if any issue arises feel free to fix it yourself
>

![Portfolio Preview](src/assets/images/Display.png)

## 📂 Project Structure
```
public/
│
src/
├── app/              # Application files
│   ├── favicon,io 
│   ├── globals.css   # Global styling
│   ├── layout.tsx    # Main layout configuration
│   ├── page.tsx      # Entry page of the application
│
├── assets/
│
├── components/       # Reusable UI components
│   ├── Card.tsx
│   ├── CardHeader.tsx
│   ├── Orbit.tsx
│   ├── Particle.tsx
│   ├── SectionHeader.tsx
│   ├── smoothScroll.tsx
│   ├── TechIcon.tsx
│   ├── TechToolBox.tsx
│   ├── ToolboxItems.tsx
│
├── lib/
│   ├── utils.ts      # Utility functions
│
├── sections/         # Website sections
│   ├── About.tsx
│   ├── Achievements.tsx
│   ├── Footer.tsx
│   ├── Game.tsx
│   ├── Header.tsx
│   ├── Profile.tsx
│   ├── Projects.tsx
│   ├── Tape.tsx
```

## 🚀 Features
- **Responsive Design**: Adapts seamlessly across various devices
- **Dynamic Animations**: Smooth scrolling, particle effects, and orbit animations
- **Modular Components**: Clean and reusable components for better maintainability
- **TypeScript Integration**: Ensures type safety and better code quality
- **Interactive Sections**: Includes About, Projects, Achievements, and more

## 🛠️ Technology Stack
### Core
- **Framework**: React with Next.js
- **Language**: TypeScript
- **Styling**: CSS modules

### Libraries
- Particle.js for background effects
- Smooth scrolling for navigation
- Icons and assets for visual enhancement

## 💻 Development Setup

### Prerequisites
- Node.js
- npm or yarn
- Git

### Installation
1. **Clone the repository**
```bash
git clone https://github.com/Abhinavexists/Portfolio.git
cd Portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

### Build & Preview
1. **Build for production**
```bash
npm run build
```

2. **Preview the build**
```bash
npm run start
```

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a pull request

## 📄 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
