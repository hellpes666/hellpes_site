"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdChatboxes } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { ChatWindow } from '@/widgets/Chat/ChatWindow';

export const ChatButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 
                   bg-gradient-to-r from-violet-500 to-purple-500 rounded-full shadow-lg 
                   hover:shadow-xl transition-shadow duration-300 text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                role="button"
                aria-label="Open chat"
            >
                {isOpen ? (
                    <IoClose className="w-6 h-6" />
                ) : (
                    <IoMdChatboxes className="w-6 h-6" />
                )}
            </motion.button>

            <AnimatePresence>
                {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
            </AnimatePresence>
        </>
    );
};