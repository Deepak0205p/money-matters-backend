'use client';

import { useEffect, useCallback } from 'react';
/** Full list of shortcuts for display in the help dialog */
export const shortcutsList = [
// Navigation
{
  keys: ['Alt', '1'],
  description: 'Strategy 1 — Zindagi Ka Safar',
  category: 'Navigation'
}, {
  keys: ['Alt', '2'],
  description: 'Strategy 2 — Paise Ka GPS',
  category: 'Navigation'
}, {
  keys: ['Alt', '3'],
  description: 'Strategy 3 — Kya Hota Agar',
  category: 'Navigation'
}, {
  keys: ['Alt', '4'],
  description: 'Strategy 4 — Chhupa Hua Chor',
  category: 'Navigation'
}, {
  keys: ['Alt', '5'],
  description: 'Strategy 5 — Budget Khel',
  category: 'Navigation'
}, {
  keys: ['Alt', '6'],
  description: 'Strategy 6 — Ghar Ka Budget',
  category: 'Navigation'
}, {
  keys: ['Alt', '7'],
  description: 'Strategy 7 — Debt Trap Ka Darwaza',
  category: 'Navigation'
}, {
  keys: ['Alt', '8'],
  description: 'Strategy 8 — Power of Compounding',
  category: 'Navigation'
}, {
  keys: ['Alt', '9'],
  description: 'Strategy 9 — Report Card',
  category: 'Navigation'
}, {
  keys: ['Alt', '0'],
  description: 'Strategy 10 — Rupaiya Dictionary',
  category: 'Navigation'
}, {
  keys: ['Alt', '-'],
  description: 'Strategy 11 — Ek Din Ka Kharcha',
  category: 'Navigation'
}, {
  keys: ['Alt', '='],
  description: 'Strategy 12 — Mistake Market',
  category: 'Navigation'
},
// Tools
{
  keys: ['Alt', 'D'],
  description: 'Achievement Dashboard kholo',
  category: 'Tools'
}, {
  keys: ['Alt', 'G'],
  description: 'Goal Tracker kholo',
  category: 'Tools'
},
// General
{
  keys: ['Alt', 'K'],
  description: 'Keyboard shortcuts help',
  category: 'General'
}, {
  keys: ['Alt', '/'],
  description: 'Keyboard shortcuts help',
  category: 'General'
}, {
  keys: ['Escape'],
  description: 'Koi bhi dialog band karo',
  category: 'General'
}, {
  keys: ['?'],
  description: 'Keyboard shortcuts dikhao (jab input focus nahi hai)',
  category: 'General'
}];

/**
 * Map keyboard key to strategy number.
 * 1-9 → strategies 1-9, 0 → 10, - → 11, = → 12
 */
function keyToStrategy(key) {
  const mapping = {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '0': 10,
    '-': 11,
    '=': 12
  };
  return mapping[key] ?? null;
}

/**
 * Dispatch a custom DOM event so any component (e.g. Navbar) can listen
 * and open its own dialogs without shared state.
 */
export function dispatchShortcutEvent(name) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('rupaiya-shortcut', {
      detail: name
    }));
  }
}

/**
 * Hook that registers global keyboard shortcuts for the Money Matters app.
 * Shortcuts do NOT trigger when typing in input/textarea/contenteditable fields.
 */
export function useKeyboardShortcuts(config) {
  const {
    onSwitchStrategy,
    onOpenDashboard,
    onOpenGoalTracker,
    onOpenShortcutsHelp,
    onCloseDialog
  } = config;
  const handleKeyDown = useCallback(e => {
    // Don't trigger when typing in input fields
    const target = e.target;
    const tagName = target.tagName.toLowerCase();
    const isInputField = tagName === 'input' || tagName === 'textarea' || tagName === 'select' || target.isContentEditable;

    // Escape should always work (even in inputs to close dialogs)
    if (e.key === 'Escape') {
      e.preventDefault();
      onCloseDialog?.();
      dispatchShortcutEvent('close-dialog');
      return;
    }

    // For all other shortcuts, skip if in input field
    if (isInputField) return;

    // Alt + number/symbol → Switch strategy
    if (e.altKey && !e.ctrlKey && !e.metaKey) {
      const strategyNum = keyToStrategy(e.key);
      if (strategyNum !== null) {
        e.preventDefault();
        onSwitchStrategy?.(strategyNum);
        return;
      }

      // Alt + D → Dashboard
      if (e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        onOpenDashboard?.();
        dispatchShortcutEvent('open-dashboard');
        return;
      }

      // Alt + G → Goal Tracker
      if (e.key === 'g' || e.key === 'G') {
        e.preventDefault();
        onOpenGoalTracker?.();
        dispatchShortcutEvent('open-goal-tracker');
        return;
      }

      // Alt + K → Keyboard Shortcuts Help
      if (e.key === 'k' || e.key === 'K') {
        e.preventDefault();
        onOpenShortcutsHelp?.();
        return;
      }

      // Alt + / → Keyboard Shortcuts Help
      if (e.key === '/') {
        e.preventDefault();
        onOpenShortcutsHelp?.();
        return;
      }
    }

    // ? key (without modifiers, when no input focused) → Show shortcuts
    if (e.key === '?' && !e.altKey && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      onOpenShortcutsHelp?.();
      return;
    }
  }, [onSwitchStrategy, onOpenDashboard, onOpenGoalTracker, onOpenShortcutsHelp, onCloseDialog]);
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
}