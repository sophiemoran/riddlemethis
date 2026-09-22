# Riddle Me This: Spec

## Purpose

Help students study for tests by clearing up confusion. The app explains a hard concept in terms of a topic the student already knows well, so new ideas connect to things they already understand.

## Users

Students studying for tests. Each student has an account.

## Core flow

1. **Sign in.** The student creates an account or logs in.
2. **Add material.** The student does one or both of:
   - uploads a PDF (slides or notes)
   - types a specific question about what's confusing them
3. **Pick the terms.** The student types any topic they know well (e.g. football).
4. **Get the explanation.** Aristotle explains the concept in those terms, using the uploaded PDF as context, and ends with an "In real terms" summary.
5. **Keep chatting.** The student can ask follow-up questions in the same conversation.
6. **Come back later.** Past chats are saved to the student's account and can be reopened.

Example: *"Can you explain what arbitrage pricing is in football terms so I can understand?"*

## Features

### Accounts
- Students sign up and log in.
- Each student sees only their own chat history.
- Passwords are never stored in plain text. Use an established sign-in service or library rather than building login from scratch.

### Uploads
- **PDF only** (covers both slides and notes).
- Other file types are rejected with a clear message telling the student to upload a PDF.

### Chatbot
- Answers questions about the uploaded PDF or a typed question.
- Frames every explanation in the student's chosen topic.
- **Any topic allowed.** If the chosen topic can't make a good explanation for the concept, the chatbot says so and asks the student to pick a different topic. It does not force a weak analogy.
- **Every explanation ends with an "In real terms" section** that states the actual concept correctly, with no analogy, so the student knows the real definition for the test.
- Supports follow-up questions.

### Chat history
- Every conversation is saved to the student's account.
- Students can browse and reopen past chats.

### Chatbot character: Aristotle
- The chatbot is a **cartoon version of Aristotle**.
- Same character for every topic.
- Friendly and approachable, a wise teacher rather than a stiff lecturer.

## Visual direction

- **Main theme:** forest green
- **Accents:** silver
- **Style:** sleek and simple

## Technical notes

- **Frontend:** the website students use (sign-in, uploads, chat, chat history, Aristotle).
- **Backend:** a server that holds the AI API key, talks to the AI service, reads PDFs, and saves accounts and chats.
- **Database:** stores accounts and chat history.
- **API key:** stored only in a local `.env` file, never committed. See the standing rule in [CLAUDE.md](CLAUDE.md).
- **Hosting:** the site will eventually be public online, so it must be built to deploy to a hosting service. It will be developed and tested locally first.
- **Stack:** TBD.

## Open questions

- How should students sign up: email and password, "Sign in with Google", or both?
- Is there a maximum PDF size or page count?
- Can a student upload more than one PDF per chat?
- Who draws the Aristotle character: you, an artist, or should we start with a simple placeholder?
