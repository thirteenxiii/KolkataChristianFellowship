'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
  onClick?: () => void;
  as?: 'div' | 'button';
}

export default function GlassCard({
  children,
  className = '',
  hoverScale = 1.05,
  onClick,
  as = 'div',
}: GlassCardProps) {
  const Component = motion[as as keyof typeof motion] as React.ElementType;

  return (
    <Component
      whileHover={{ scale: hoverScale }}
      onClick={onClick}
      className={`glass-card rounded-2xl p-6 md:p-8 cursor-pointer group ${className}`}
    >
      {children}
    </Component>
  );
}
