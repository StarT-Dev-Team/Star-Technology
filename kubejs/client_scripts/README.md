# client_scripts/

Client-side scripts, reloaded with `F3+T`.  
Handles JEI/EMI recipe viewer events, item tooltips, item hiding, and Create ponder scenes.

## Structure

| Path | Description |
|---|---|
| [`common/`](common/) | Scripts that run in both all packmodes. |
| [`hardmode/`](hardmode/) | Scripts that run only in hardmode packmode. |
| [`ponder/`](ponder/) | Create mod ponder scene definitions for custom machines and mechanics. |

## Packmode filtering

Scripts use `// packmode: hard` or `// packmode: default` comments at the top to restrict execution to a specific packmode.  
Files in `common/` have no packmode restriction and always run.
