# Chat Application

A modern React Native chat application built with Expo, featuring an intuitive interface for real-time messaging with AI characters.

## 🚀 Features

### Core Functionality
1. **Send Messages** - Send text messages in real-time chat conversations
2. **Edit Messages** - Modify your previously sent messages by long-pressing and selecting edit (user messages only)
3. **Delete Messages** - Remove unwanted messages from the conversation
4. **Copy Messages** - Copy message content to clipboard for easy sharing
5. **Change Chat** - Switch between different AI characters by swiping up

### User Experience
- **Intuitive Interface** - Clean, modern design with smooth animations
- **Message Types** - Support for user, bot, and system messages with distinct styling
- **Message Formatting** - Support for bold and italic text using *asterisk* formatting
- **Long Press Actions** - Quick access to message actions (edit for user messages, delete, copy)
- **Gesture Navigation** - Swipe gestures for character switching
- **Loading States** - Visual feedback during message processing
- **Keyboard Handling** - Proper keyboard avoidance and input management

## 🛠 Technology Stack

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and tooling
- **TypeScript** - Type-safe JavaScript
- **React Navigation** - Navigation library
- **React Native Gesture Handler** - Gesture recognition
- **React Native Reanimated** - Smooth animations
- **Expo Linear Gradient** - Gradient backgrounds
- **Lucide React Native** - Icon library

## 📱 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Expo CLI
- iOS Simulator or Android Emulator (or physical device)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd assessment
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your preferred platform:
```bash
npm run ios     # iOS Simulator
npm run android # Android Emulator
npm run web     # Web browser
```

## 🏗 Architecture

### Project Structure
```
├── app/                    # App router pages
│   ├── (tabs)/            # Tab navigation screens
│   ├── _layout.tsx        # Root layout
│   └── +not-found.tsx     # 404 page
├── components/            # Reusable components
│   ├── ChatList.tsx       # Message list component
│   ├── ChatMessage.tsx    # Individual message component
│   ├── ChatHeader.tsx     # Chat header with user info
│   ├── Input.tsx          # Message input component
│   └── ...
├── context/               # React context providers
│   └── ChatContext.tsx    # Chat state management
├── styles/                # Separated styling system
│   ├── shared/           # Shared constants (colors, dimensions)
│   ├── components/       # Component-specific styles
│   └── pages/           # Page-specific styles
└── hooks/                # Custom React hooks
```

### Key Design Patterns
- **Separation of Concerns** - Styles separated from component logic
- **Context API** - Centralized state management for chat functionality
- **Custom Hooks** - Reusable logic extraction
- **TypeScript** - Type safety throughout the application
- **Barrel Exports** - Clean import statements

## 🎨 Styling System

The application uses a well-organized styling system:

- **Shared Constants** - Centralized colors, dimensions, and typography
- **Component Styles** - Dedicated style files for each component
- **Type Safety** - TypeScript interfaces for style consistency
- **Maintainability** - Easy to update and maintain design system

## 🔮 Possible Improvements

### New Chat Functionalities

#### Message Features
- **Message Reactions** - Add emoji reactions to messages
- **Message Threading** - Reply to specific messages with threaded conversations
- **Message Search** - Search through chat history
- **Enhanced Message Formatting** - Support for code blocks, links, and more formatting options
- **File Attachments** - Send images, documents, and media files
- **Voice Messages** - Record and send audio messages
- **Message Status** - Read receipts and delivery confirmations
- **Message Timestamps** - Show detailed time information

#### Chat Management
- **Chat History** - Persistent message storage and retrieval
- **Multiple Chats** - Support for multiple concurrent conversations
- **Chat Export** - Export conversation history
- **Chat Backup** - Cloud backup and sync across devices
- **Chat Templates** - Predefined message templates
- **Chat Analytics** - Conversation insights and statistics

#### AI Enhancement
- **Character Personalities** - More diverse AI character traits
- **Context Awareness** - Better conversation context understanding
- **Smart Suggestions** - Predictive text and quick replies
- **Language Support** - Multi-language conversations
- **Custom Characters** - User-created AI personalities

#### Real-time Features
- **Live Typing Indicators** - Show when someone is typing
- **Online Status** - User presence indicators
- **Push Notifications** - Real-time message alerts
- **Background Sync** - Message sync when app is backgrounded

### React Native Best Practices

#### Performance Optimizations
```typescript
// Implement React.memo for expensive components
const ChatMessage = React.memo(({ message }) => {
  // Component logic
});

// Use FlatList for large datasets
<FlatList
  data={messages}
  keyExtractor={(item) => item.id}
  getItemLayout={(data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  })}
  removeClippedSubviews={true}
  maxToRenderPerBatch={10}
  windowSize={10}
/>

// Implement lazy loading for heavy components
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
```

#### State Management Improvements
```typescript
// Use useReducer for complex state logic
const chatReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    case 'DELETE_MESSAGE':
      return { 
        ...state, 
        messages: state.messages.filter(m => m.id !== action.payload) 
      };
    default:
      return state;
  }
};

// Implement proper error boundaries
class ChatErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Chat error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

#### Code Quality Enhancements
```typescript
// Implement proper TypeScript interfaces
interface Message {
  id: string;
  text: string;
  type: 'user' | 'bot' | 'system';
  timestamp: Date;
  edited?: boolean;
  reactions?: Reaction[];
}

// Use custom hooks for reusable logic
const useMessageActions = () => {
  const deleteMessage = useCallback((id: string) => {
    // Delete logic
  }, []);

  const editMessage = useCallback((id: string, newText: string) => {
    // Edit logic
  }, []);

  return { deleteMessage, editMessage };
};

// Implement proper error handling
const useChatApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (text: string) => {
    try {
      setLoading(true);
      setError(null);
      // API call
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading, error };
};
```

#### Testing Strategy
- **Unit Tests** - Test individual components and utilities
- **Integration Tests** - Test component interactions
- **E2E Tests** - Test complete user flows
- **Accessibility Tests** - Ensure app is accessible to all users

#### Security Considerations
- **Input Sanitization** - Prevent XSS attacks
- **Data Encryption** - Encrypt sensitive data
- **Secure Storage** - Use secure storage for tokens
- **API Security** - Implement proper authentication

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions, please open an issue in the repository or contact the development team.

---

Built with ❤️ using React Native and Expo
