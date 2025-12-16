// src/hooks/useKeyboardShortcut.js
import { useEffect, useCallback } from 'react';

export const useKeyboardShortcut = (keys, callback) => {
  const handleKeyDown = useCallback((e) => {
    const pressedKeys = [];
    if (e.metaKey) pressedKeys.push('Meta');
    if (e.ctrlKey) pressedKeys.push('Control');
    if (e.shiftKey) pressedKeys.push('Shift');
    if (e.altKey) pressedKeys.push('Alt');
    if (e.key && !['Meta', 'Control', 'Shift', 'Alt'].includes(e.key)) {
      pressedKeys.push(e.key.toLowerCase());
    }

    const requiredKeys = keys.map(k => k.toLowerCase());
    const allKeysPressed = requiredKeys.every(key => 
      pressedKeys.map(k => k.toLowerCase()).includes(key)
    );

    if (allKeysPressed) {
      e.preventDefault();
      callback();
    }
  }, [keys, callback]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
};