# LCM Master - Interactive Learning Game 🎮

A gamified educational application for learning Least Common Multiple (LCM) concepts through interactive gameplay, visual demonstrations, and engaging challenges.

## 🌟 Features

### 🎯 Core Learning Modes
- **Learn Mode**: Interactive visual demonstrations of LCM calculations
- **Quiz Mode**: Multiple-choice questions with varying difficulty levels
- **Level Map**: Progressive adventure through themed levels
- **Mini Games**: Drag-and-drop activities for hands-on learning

### 🎮 Gamification Elements
- **Character Companion**: Animated buddy that provides encouragement and hints
- **Achievement System**: Unlock badges and rewards for progress
- **Reward System**: Earn coins, gems, and stars for correct answers
- **Level Progression**: 10 themed levels with increasing difficulty
- **Visual Feedback**: Confetti effects and animations for positive reinforcement

### 🎨 Themed Adventures
1. **Space Explorer** 🚀 - Easy difficulty, 5 questions
2. **Ocean Adventure** 🌊 - Easy difficulty, 5 questions  
3. **Jungle Quest** 🦁 - Medium difficulty, 7 questions
4. **Candy Land** 🍭 - Medium difficulty, 7 questions
5. **Desert Safari** 🐪 - Medium difficulty, 8 questions
6. **Arctic Expedition** 🐧 - Hard difficulty, 10 questions
7. **Volcano Valley** 🌋 - Hard difficulty, 10 questions
8. **Magic Garden** 🌺 - Hard difficulty, 12 questions
9. **Royal Castle** 👑 - Hard difficulty, 12 questions
10. **Beach Paradise** 🏝️ - Hard difficulty, 15 questions

### 🛠️ Interactive Features
- **Hint System**: Get help when stuck (costs coins)
- **Settings Panel**: Customize sound, music, and difficulty
- **Score Tracking**: Monitor progress and high scores
- **Visual Multiples Display**: See how LCM calculations work step-by-step
- **Animated Backgrounds**: Dynamic themes matching each level

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Vaultboard/app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
app/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── page.tsx           # Home page (redirects to LCM Master)
│   │   ├── lcm-master/        # LCM Master game route
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   └── lcm-master/        # Game components
│   │       ├── LCMMasterGame.tsx      # Main game component
│   │       ├── AchievementPopup.tsx   # Achievement notifications
│   │       ├── AnimatedBackground.tsx # Dynamic backgrounds
│   │       ├── CharacterCompanion.tsx # Animated character
│   │       ├── ConfettiEffect.tsx     # Celebration effects
│   │       ├── DragDropGame.tsx      # Mini-game component
│   │       ├── HintSystem.tsx        # Hint functionality
│   │       ├── LevelMap.tsx          # Level selection
│   │       ├── NumberInputForm.tsx   # Input form
│   │       ├── QuizMode.tsx          # Quiz interface
│   │       ├── RewardSystem.tsx      # Coins/gems display
│   │       ├── ScoreDisplay.tsx      # Score tracking
│   │       ├── SettingsDialog.tsx    # Settings panel
│   │       └── VisualMultiplesDisplay.tsx # LCM visualization
│   ├── data/
│   │   └── lcmMasterMockData.ts      # Mock data for development
│   ├── types/
│   │   ├── schema.ts                 # TypeScript type definitions
│   │   └── enums.ts                  # Enum definitions
│   └── utils/
│       ├── lcmCalculator.ts          # LCM calculation utilities
│       └── formatters.ts             # Data formatting utilities
├── public/                    # Static assets
└── package.json              # Dependencies and scripts
```

## 🧮 How LCM Master Works

### Learning Process
1. **Visual Learning**: Enter two numbers to see their multiples and common multiples
2. **Interactive Calculation**: Watch step-by-step LCM calculation process
3. **Practice Mode**: Test knowledge with multiple-choice questions
4. **Progressive Levels**: Advance through themed adventures with increasing difficulty

### Game Mechanics
- **Scoring**: Earn points for correct answers (50-150 points based on difficulty)
- **Currency**: Collect coins and gems for achievements and hints
- **Stars**: Earn 1-3 stars per level based on performance (90%+ = 3 stars)
- **Achievements**: Unlock badges for milestones and streaks
- **Character Moods**: Companion reacts to your performance with different animations

### Difficulty Levels
- **Easy**: Numbers 2-10, 50 points per correct answer
- **Medium**: Numbers 6-20, 100 points per correct answer  
- **Hard**: Numbers 12-30, 150 points per correct answer

## 🛠️ Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Key Technologies
- **Next.js 15.5.4** - React framework with app router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling
- **Material-UI 7.3.4** - Component library
- **Emotion** - CSS-in-JS styling

### Component Architecture
- **Modular Design**: Each game feature is a separate component
- **Type Safety**: Full TypeScript coverage with defined schemas
- **State Management**: React hooks for local state management
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🎯 Educational Value

### Learning Objectives
- Understand the concept of Least Common Multiple (LCM)
- Learn to identify multiples of numbers
- Practice finding common multiples
- Develop mental math skills
- Build confidence through gamified learning

### Target Audience
- Elementary and middle school students
- Math educators and tutors
- Parents helping with homework
- Anyone wanting to improve LCM skills

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm run start
```

### Deploy to Render (Recommended)
The easiest deployment option is using Render:

#### Option 1: One-Click Deploy with render.yaml
1. **Push your code to GitHub** (make sure `render.yaml` is in the root)
2. **Go to [Render Dashboard](https://dashboard.render.com)**
3. **Click "New +" → "Web Service"**
4. **Connect your GitHub repository**
5. **Render will automatically detect the `render.yaml` configuration**
6. **Click "Create Web Service"**
7. **Your app will be deployed automatically!**

#### Option 2: Manual Configuration
1. **Go to [Render Dashboard](https://dashboard.render.com)**
2. **Click "New +" → "Web Service"**
3. **Connect your GitHub repository**
4. **Configure the service:**
   - **Name**: `lcm-master` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free (or choose paid plan)
5. **Click "Create Web Service"**
6. **Your app will be available at `https://your-app-name.onrender.com`**

### Deploy to Vercel (Alternative)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and configure deployment
3. Your app will be available at `https://your-app.vercel.app`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with Next.js and React
- Styled with Tailwind CSS and Material-UI
- Icons from Material-UI Icons
- Educational game design principles
- Modern web development best practices

---

**LCM Master** - Making math learning fun and engaging! 🎮✨