import characterData from '@/assets/data/assessment_characters.json';
import React, {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useReducer,
    useRef,
    useState,
} from 'react';
import { TextInput } from 'react-native';

export type MessageType = 'user' | 'bot' | 'system';

export interface Message {
  id: string;
  text: string;
  type: MessageType;
}

interface ChatState {
  status: 'idle' | 'loading' | 'error';
  id: string;
  name: string;
  profile_pic_url: string;
  messages: Message[];
}

type Action =
  | { type: 'LOAD_START' }
  | {
      type: 'LOAD_SUCCESS';
      payload: {
        id: string;
        name: string;
        profile_pic_url: string;
        messages: Message[];
      };
    }
  | { type: 'SEND_MESSAGE'; payload: Message }
  | { type: 'DELETE_MESSAGE'; payload: { id: string } }
  | { type: 'EDIT_MESSAGE'; payload: { id: string; text: string } }
  | { type: 'LOAD_FAILURE' };

const ChatContext = createContext<{
  state: ChatState;
  inputRef: React.RefObject<any>;
  messageValue: { id?: string; text: string };
  setMessageValue: (text: { id?: string; text: string } ) => void;
  sendMessage: (text: string) => void;
  deleteMessage: (id: string) => void;
  switchCharacter: () => void;
} | undefined>(undefined);

const initialState: ChatState = {
  status: 'idle',
  id: '',
  name: '',
  profile_pic_url: '',
  messages: [],
};

function chatReducer(state: ChatState, action: Action): ChatState {
  switch (action.type) {
    case 'LOAD_START':
      return { ...state, status: 'loading' };

    case 'LOAD_SUCCESS':
      return {
        ...state,
        status: 'idle',
        id: action.payload.id,
        name: action.payload.name,
        profile_pic_url: action.payload.profile_pic_url,
        messages: action.payload.messages,
      };

    case 'SEND_MESSAGE':
      return {
        ...state,
        messages: [action.payload, ...state.messages],
      };

    case 'DELETE_MESSAGE':
      return {
        ...state,
        messages: state.messages.filter((msg) => msg.id !== action.payload.id),
      };

    case 'EDIT_MESSAGE':
      return {
        ...state,
        messages: state.messages.map((msg) =>
          msg.id === action.payload.id ? { ...msg, text: action.payload.text } : msg
        ),
      };

    case 'LOAD_FAILURE':
      return { ...state, status: 'error' };

    default:
      return state;
  }
}

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);
  const inputRef = useRef<TextInput>(null);
  const [messageValue, setMessageValue] = useState<{ id?: string; text: string }>({ id: undefined, text: ''  });

  const sendMessage = (text: string) => {
    if (messageValue?.id) {
      dispatch({ type: 'EDIT_MESSAGE', payload: { id: messageValue.id, text } });
    } else {
      const newMessage: Message = {
        id: Date.now().toString(),
        text,
        type: 'user',
      };
      dispatch({ type: 'SEND_MESSAGE', payload: newMessage });
    }
    setMessageValue({ id: undefined, text: '' });
  };

  const deleteMessage = (id: string) => {
    dispatch({ type: 'DELETE_MESSAGE', payload: { id } });
  };

  const loadCharacter = (characterIndex: number) => {
    dispatch({ type: 'LOAD_START' });

    const character = characterData[characterIndex];
    const messages: Message[] = [
      {
        id: character.id,
        type: 'bot',
        text: character.greeting,
      },
      {
        id: `system-${character.id}`,
        type: 'system',
        text:
          "Professional Business Consultant - Experienced advisor specializing in strategic planning, operational excellence, and organizational development. Committed to delivering actionable insights and practical solutions to help your business thrive in today's competitive market.",
      },
    ];

    setTimeout(() => {
      dispatch({
        type: 'LOAD_SUCCESS',
        payload: {
          id: character.id,
          name: character.name,
          profile_pic_url: character.profile_pic_url,
          messages,
        },
      });
    }, 500);
  };

  const switchCharacter = useCallback(() => {
    if (characterData.length < 2 || !state.id) return;

    const available = characterData.filter((c) => c.id !== state.id);
    if (available.length === 0) return;

    const random = available[Math.floor(Math.random() * available.length)];
    const newIndex = characterData.findIndex((c) => c.id === random.id);

    if (newIndex !== -1) {
      loadCharacter(newIndex);
    }
  }, [state.id]);

  useEffect(() => {
    loadCharacter(0);
  }, []);

  return (
    <ChatContext.Provider
      value={{
        state,
        messageValue,
        inputRef,
        setMessageValue,
        sendMessage,
        deleteMessage,
        switchCharacter,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error('useChat must be used within a ChatProvider');
  return context;
};
