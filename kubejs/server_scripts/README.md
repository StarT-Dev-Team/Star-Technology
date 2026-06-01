# server_scripts/

Server-side scripts, reloaded with `/reload`.  
Handles recipe additions, recipe removals, tag modifications, loot tables, and other server events.

## Structure

| Path | Description |
|---|---|
| [`common/`](common/) | Scripts that run in all packmodes. |
| [`default/`](default/) | Scripts that run only in default packmode. |
| [`hardmode/`](hardmode/) | Scripts that run only in hardmode packmode. |
| [`deprecated/`](deprecated/) | Old scripts kept for reference; not part of the active load. |
| [`utils/`](utils/) | Shared utility scripts (constants, helpers, tag loader, recipe helpers). |

## Packmode filtering

Scripts use `// packmode: hard` or `// packmode: default` at the top to restrict to a specific mode.  
`common/` files have no restriction and always run.  
The utility scripts in `utils/` are loaded at high priority (via `// priority:` comments) so they are available to all other scripts.
