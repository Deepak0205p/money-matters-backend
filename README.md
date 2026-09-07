# ⚙️ Money Matters Backend — AI Financial Intelligence & API Services 🧠

> **Microservices and API orchestration layer powering the Money Matters intelligent financial mentor, real-time grounded search, and conversation management.**

[![Node.js](https://img.shields.io/badge/Node.js-v20-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Express.js / Next.js API](https://img.shields.io/badge/API_Routes-Next.js%20%26%20Express-black?style=for-the-badge)](https://nextjs.org/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-3.5_Flash_Lite-4285F4?style=for-the-badge&logo=google)](https://deepmind.google/technologies/gemini/)
[![Tavily Search](https://img.shields.io/badge/Tavily-Real--Time%20Grounding-4F46E5?style=for-the-badge)](https://tavily.com/)

---

## 🌟 About the Backend

The **Money Matters Backend** acts as the financial intelligence engine for the platform. It handles:
1. **Financial Education Guardrails**: Ensures the AI mentor educates users on foundational personal finance principles and firmly refuses speculative stock tips, get-rich-quick schemes, and financial gambling.
2. **Dynamic Model Fallback**: Primary integration with `gemini-3.5-flash-lite` and automatic fallback to `gemini-3.1-flash-lite` for high availability and sub-second token latency.
3. **Real-Time Web Grounding**: Orchestrates Tavily search queries for current Indian economic indicators, inflation rates, and RBI benchmark policies.
4. **Stateful Conversation Session Store**: In-memory and persistent conversation message histories with token trimming and summarization.

---

## 🚀 Key Endpoints & Architecture

### 1. `POST /api/chatbot/chat`
- Processes user financial questions.
- Applies strict educational system instructions (SIP, budgeting, compounding, risk diversification).
- Streams markdown responses with real-time sources and citations.

### 2. `GET /api/chatbot/conversations`
- Retrieves recent financial chat threads and conversation summaries.

### 3. `DELETE /api/chatbot/conversations/:id`
- Purges specific conversation history.

### 4. `GET /api/chatbot/health`
- Diagnostics endpoint checking Gemini API connectivity and search latency.

---

## 🛠️ Technology Stack

- **Runtime**: Node.js v18+ / v20+
- **LLM Engine**: Google Generative AI SDK (`gemini-3.5-flash-lite`, `gemini-3.1-flash-lite`)
- **Search Engine**: Tavily Search API
- **Data Stores**: In-Memory Thread Cache & Firestore Sync

---

## 📦 Local Setup & Installation

### 1. Clone the Backend
```bash
git clone https://github.com/Deepak0205p/money-matters-backend.git
cd money-matters-backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create `.env.local` or `.env`:
```env
PORT=5000
GEMINI_API_KEY=your_gemini_api_key
TAVILY_API_KEY=your_tavily_api_key
```

### 4. Start Server
```bash
npm run dev
```
Server runs locally at [http://localhost:5000](http://localhost:5000).

---

## 👥 Hackathon Showcase Details
Built for Hackathon presentation to demonstrate agentic AI guardrails, latency-optimized streaming, and educational financial safety.
