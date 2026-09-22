# Riddle Me This

A study tool that explains confusing concepts in terms of something you already know.

Stuck on a topic before a test? Upload your notes or slides, ask your question, and pick a subject you know well. Riddle Me This explains the concept through that subject. For example:

> "Can you explain arbitrage pricing in football terms?"

Your guide is a cartoon Aristotle.

## Features (planned)

- Create an account and revisit your past chats
- Upload lecture slides or notes as PDFs
- Ask a specific question about what's confusing you
- Choose any topic you want the explanation framed in
- Get an explanation that ends with an "In real terms" summary of the actual concept

## Status

Early planning. See [SPEC.md](SPEC.md) for the full plan.

## Running locally

Requires [Node.js](https://nodejs.org). Built with Next.js.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

The app needs an AI API key, stored in a local `.env` file. Never commit this file.
