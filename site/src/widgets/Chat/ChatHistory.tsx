import { Message } from './store/chat.store';
import { motion } from 'framer-motion';

interface ChatHistoryProps {
    messages: Message[];
}

export const ChatHistory = ({ messages }: ChatHistoryProps) => {
    const formatTime = (timestamp: Date) => {
        if (!(timestamp instanceof Date)) {
            timestamp = new Date(timestamp);
        }
        return timestamp.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
                <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                    <div
                        className={`max-w-[80%] p-3 rounded-lg ${message.sender === 'user'
                            ? 'bg-violet-500 text-white rounded-br-none'
                            : 'bg-slate-800 text-white rounded-bl-none'
                            }`}
                    >
                        <p className="text-sm">{message.text}</p>
                        <span className="text-xs opacity-75 mt-1 block">
                            {formatTime(message.timestamp)}
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};