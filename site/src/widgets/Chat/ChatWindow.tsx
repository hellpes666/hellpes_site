import { motion } from 'framer-motion';
import { ChatHistory } from './ChatHistory';
import { ChatInput } from './ChatInput';
import { useChatStore } from './store/chat.store';

interface ChatWindowProps {
    onClose: () => void;
}

export const ChatWindow = ({ onClose }: ChatWindowProps) => {
    const { messages, addMessage } = useChatStore();

    const handleSendMessage = (text: string) => {
        addMessage(text, 'user');

        // Пример автоответа (можно удалить или модифицировать)
        setTimeout(() => {
            addMessage('Спасибо за сообщение! Я обязательно отвечу вам позже.', 'admin');
        }, 1000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-40 w-[350px] h-[500px] 
                     bg-slate-900 border border-slate-800 rounded-lg shadow-2xl
                     flex flex-col"
        >
            <div className="p-4 border-b border-slate-800 flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-semibold text-white">Чат</h3>
                    <p className="text-xs text-slate-400">Обычно отвечаю в течение часа</p>
                </div>
                <button
                    onClick={onClose}
                    className="text-slate-400 hover:text-white transition-colors"
                >
                    ✕
                </button>
            </div>

            <ChatHistory messages={messages} />
            <ChatInput onSendMessage={handleSendMessage} />
        </motion.div>
    );
};