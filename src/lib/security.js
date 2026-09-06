const MAX_MESSAGE_LENGTH = 2000;
const MAX_MESSAGES_ARRAY = 30;

export function sanitizeString(input) {
  if (typeof input !== 'string') return '';
  return input
    .replace(/<[^>]*>/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim()
    .slice(0, MAX_MESSAGE_LENGTH);
}

export function validateMessage(message) {
  if (!message || typeof message !== 'string') {
    return { valid: false, error: 'Message is required' };
  }
  const sanitized = sanitizeString(message);
  if (sanitized.length === 0) {
    return { valid: false, error: 'Message cannot be empty' };
  }
  return { valid: true, sanitized };
}

export function validateMessagesArray(messages) {
  if (!messages || !Array.isArray(messages)) {
    return { valid: false, error: 'Messages array is required' };
  }
  if (messages.length === 0) {
    return { valid: false, error: 'Messages array cannot be empty' };
  }
  if (messages.length > MAX_MESSAGES_ARRAY) {
    return { valid: false, error: `Maximum ${MAX_MESSAGES_ARRAY} messages allowed` };
  }
  const sanitized = messages.map(m => ({
    role: m.role === 'user' || m.role === 'assistant' ? m.role : 'user',
    content: sanitizeString(m.content || ''),
  })).filter(m => m.content.length > 0);
  return { valid: true, sanitized };
}

export function validateNumericFields(fields) {
  for (const [key, value] of Object.entries(fields)) {
    if (value !== undefined && (typeof value !== 'number' || isNaN(value) || value < 0)) {
      return { valid: false, error: `Invalid value for ${key}` };
    }
  }
  return { valid: true };
}
