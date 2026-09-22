# Riddle Me This

A study-help web app for students. A student uploads notes or slides (or types a question), picks a topic they already know well (e.g. football), and a chatbot explains the confusing concept in terms of that topic. The chatbot is a cartoon Aristotle. Full plan: [SPEC.md](SPEC.md).

Visual direction: forest green main theme, silver accents, sleek and simple.

## Standing rule: the API key never enters the repository

- The AI API key lives only in a local `.env` file.
- `.env` must be listed in `.gitignore` and must never be tracked by Git.
- No tracked file may contain the key, not even in examples, comments, or tests. Use a placeholder like `ANTHROPIC_API_KEY=your-key-here` in `.env.example`.
- The app must fail with a clear error message if the key is missing, never silently.

Check before every commit:

```bash
git ls-files | grep -E '^\.env$' || echo "OK: .env is not tracked"
```
