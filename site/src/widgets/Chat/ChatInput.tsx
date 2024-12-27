import { useState, KeyboardEvent } from 'react';

interface ChatInputProps {
    onSendMessage: (text: string) => void;
}

export const ChatInput = ({ onSendMessage }: ChatInputProps) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (message.trim()) {
            onSendMessage(message.trim());
            setMessage('');
        }
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="p-4 border-t border-slate-800">
            <div className="flex gap-2">
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Напишите сообщение..."
                    className="flex-1 bg-slate-800 rounded-lg p-2 resize-none h-[40px] 
                             text-white placeholder-slate-400 focus:outline-none focus:ring-2 
                             focus:ring-violet-500"
                    rows={1}
                />
                <button
                    onClick={handleSend}
                    disabled={!message.trim()}
                    className="bg-violet-500 text-white px-4 rounded-lg hover:bg-violet-600 
                             transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    →
                </button>
            </div>
        </div>
    );
};