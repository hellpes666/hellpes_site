import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Message = {
  id: string;
  text: string;
  sender: "user" | "admin";
  timestamp: Date;
};

interface ChatState {
  messages: Message[];
  addMessage: (text: string, sender: "user" | "admin") => void;
  clearMessages: () => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    set => ({
      messages: [
        {
          id: "1",
          text: "Привет! Я Алексей, Frontend разработчик. Как я могу помочь вам?",
          sender: "admin",
          timestamp: new Date(),
        },
      ],
      addMessage: (text, sender) =>
        set(state => ({
          messages: [
            ...state.messages,
            {
              id: Date.now().toString(),
              text,
              sender,
              timestamp: new Date(),
            },
          ],
        })),
      clearMessages: () => set({ messages: [] }),
    }),
    {
      name: "chat-storage",
      partialize: state => ({ messages: state.messages }),
      // Добавляем обработку дат при восстановлении состояния
      serialize: state => JSON.stringify(state),
      deserialize: str => {
        const state = JSON.parse(str);
        return {
          ...state,
          messages: state.messages.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp),
          })),
        };
      },
    }
  )
);
