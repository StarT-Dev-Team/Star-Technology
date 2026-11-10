# AI Usage Policy — Star Technology

## Purpose

Generative AI tools can speed up development and lower the barrier to contributing, but they can also introduce unreviewed, low-quality, or legally uncertain content if used carelessly. This policy exists to let contributors benefit from AI tools while keeping Star Technology's code, documentation, and community contributions up to a high level of quality.

## Scope

This policy applies to all contributors to Star Technology, developers, dev helpers and community contributors alike, and to any generative AI tool (LLM chat assistants, AI code completion/autocomplete, AI refactoring or documentation tools, etc.).

## Definitions

- **Assistive use**: AI is used to support a human who is doing and understands the work, e.g. autocomplete, small refactors, boilerplate implementation, drafting/polishing documentation, brainstorming, organizing notes.
- **Substitutive use ("vibecoding")**: AI is used to generate a significant piece of work (a feature, a system, a large PR) with little to no human design input or understanding of the result. **This is not allowed** under this policy, regardless of contributor type.

---

## Internal Contributors

- Generative AI may be used, but only in an **assistive** capacity (autocomplete, small refactors, idea polishing, organization, documentation drafting, etc.).
- Generative AI **may not** be used as a substitute for human work or judgment (e.g. generating an entire feature or system with minimal human design/oversight).
- **You are fully accountable for anything you submit**, whether AI-assisted or not. Before committing, you must personally review, understand, be able to explain every AI-suggested change and assure the code works properly. Treat A.I. generated code exactly as you would code copied from an unfamiliar source.
- **Disclosure**: any non-trivial use of generative AI must be disclosed, e.g. via a commit trailer (`Assisted-by: <tool name>`) or a short note in the PR description covering what was AI-assisted and what wasn't.
- AI-assisted code is subject to the same code review, testing, and security scrutiny as any other contribution. You are responsible for the code you commit, push or PR. "The AI wrote it." is not a valid excuse.

## External Contributors

- Contributions that use generative AI are welcome, but are held to **higher scrutiny** during review.
- All generative AI usage must be disclosed (e.g. in a code comment near the relevant block, in the commit message, or in the PR description.) State roughly what was AI-generated vs. hand-written.
- Reviewers may ask you to explain or walk through AI-generated portions of your contribution to confirm you understand and stand behind the code.
- Undisclosed AI usage that is later discovered may result in the code being refactored and contributor status being revoked, tighter review requirements and for repeat cases, restricted contribution privileges.
- As with internal contributions, **substitutive use** (large, AI-generated changes without meaningful human design or review) in submissions will not be accepted.

## Third-Party / Upstream Components

Some components of the project (e.g. bundled mods) are not developed or owned by us.

- If we believe that either newly suggested mods or updates to ones currently in the pack lower the mods or its own code quality then we withhold ourselves the right to refuse the addition of such mod or to postpone updating it.
- If we are under the impression that a newly suggested mod or updated version of a currently included mod does not hold up a (previous) guarantee of code quality, we withhold the right to deny the addition and/or update of the mod, until a guarantee of quality via playtesting, review or any other appropriate medium is confirmed.
- If no such guarantee materializes within a reasonable window (to be judged case-by-case, e.g. relative to our own release cycle), the mod in question may be permanently pinned to its last trusted version, forked, or replaced with an in-house or alternative solution.

## Licensing & Attribution

- Contributors are responsible for ensuring AI-generated content does not infringe third-party copyright or violate license terms, and warrant that they have the right to submit it under the project's license.
- Be cautious with AI tools that may reproduce training data verbatim (code, text, or assets); don't submit content you can't verify is safe to license.

## Security

- AI-generated code should be reviewed with particular attention to common AI failure modes: insecure patterns, hallucinated or non-existent dependencies, outdated APIs, and subtly incorrect logic. Standard review/testing requirements still apply in full.

## Enforcement

Violations (undisclosed AI use, submission of unreviewed/unaccountable AI output, etc.) are handled case-by-case by maintainers and may result in requested changes, PR rejection, or — for repeated/deliberate violations — restricted contribution access.

## Policy Review

This policy will be revisited periodically as generative AI tools and best practices evolve.
