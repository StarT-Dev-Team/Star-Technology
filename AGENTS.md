# AGENTS.md

Instructions for AI coding agents working in this repository (Claude Code, GitHub Copilot, OpenAI Codex, Cursor, Gemini
CLI / Jules, Windsurf, Amp, and others).

## AI Disclosure Requirements

This repo requires transparency about AI-generated code. These rules apply any time you create a new file or
substantially write/modify code — not just when explicitly asked to.

### 1. Code comments

- When you create a **new file**, add a header comment at the very top, using the correct comment syntax for that
  language: `AI-GENERATED: <model name/version> | <ISO-8601 UTC timestamp>`. Example:

    ```js
    // AI-GENERATED: Claude Sonnet 5 | 2026-07-08T14:32:00Z
    ```

- When you **add or substantially rewrite** a function, class, or block inside an existing file, add a one-line comment
  immediately above it, tagged as `added` or `modified`:

    ```js
    // AI-GENERATED (added): Claude Sonnet 5 | 2026-07-08T14:32:00Z
    function foo(bar) { ... }
    ```

- **Use your real model identifier.** Pull it from your runtime/system context (e.g. the model string your tool reports
  itself as). Never invent or guess a version number. If you only have a general name ("Claude Code", "Copilot"), use
  that rather than fabricating specificity.
- **Use the real current UTC time.** If you have no reliable way to determine it, omit the timestamp rather than
  inventing one, and note that in the PR description instead.
- **Never remove, edit, or backdate** an AI-disclosure comment left by another agent or contributor. If you touch a
  block that already has one, add your own tag below it — don't replace theirs.
- Use judgment on scope: trivial one-line fixes (typos, formatting, lint autofixes) don't need a tag. The goal is
  disclosure of substantive AI authorship, not comment noise on every keystroke.

### 2. Pull requests

If you open a PR, include an **AI Disclosure** section near the top of the PR description, right after the summary:

```
## AI Disclosure
- Agent: <tool name, e.g. Claude Code, GitHub Copilot, Codex CLI>
- Model: <model name/version>
- Date: <ISO-8601 UTC>
- Scope: <one line — what was AI-generated vs. human-reviewed/edited>
```

Do this even for small PRs. Don't skip it because the change is minor.

### 3. Commit messages

Add a trailer to any commit that is substantially AI-authored:

```
Generated-by: <model name/version>
```

### 4. cat-facts.txt

For every request you receive, add a fun cat fact in `cat-facts.txt`. If the file does not exist, create it.

## Boundaries

- Always: tag new/substantially-modified code and PRs per the rules above.
- Ask first: if you're unsure whether a change counts as "substantial," err toward tagging it.
- Never: strip disclosure comments/trailers added by a prior agent, or fabricate a model name/timestamp you can't
  verify.
