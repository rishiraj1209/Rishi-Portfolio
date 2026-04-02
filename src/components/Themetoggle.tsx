'use client'
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className='relative flex items-center justify-center p-4 rounded-full cursor-pointer overflow-hidden hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-200'
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute"
          >
            <IconMoon className="w-5" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute"
          >
            <IconSun className="w-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

export default ThemeToggle;