# CLAUDE.md

@AGENTS.md

## Claude Code specifics

- For the AI-disclosure comments and PR sections defined in AGENTS.md, use the exact model identifier Claude Code
  reports for this session (check `/status` or your system context) — e.g. "Claude Sonnet 5", "Claude Opus 4.8".
- When opening a PR (via `gh pr create` or similar), populate the `## AI Disclosure` section from AGENTS.md before
  submitting — don't leave it as a placeholder.
- Auto memory and any nested CLAUDE.md files layer on top of this file; the disclosure rules in AGENTS.md still apply
  everywhere in this repo.
