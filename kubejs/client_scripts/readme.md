# client_scripts/

Client-side scripts, reloaded with `F3+T`.  
Handles JEI/EMI recipe viewer events, item tooltips, and Create ponder scenes.

## Structure

| Path                                               | Description                                                                                                                                                                         |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`machines.js`](machines.js)                       | Defines the `global.addedByStarT` registry — the master list of all machines added by Star Technology, used by tooltip and other client systems.                                    |
| [`crystal_info.js`](crystal_info.js)               | JEI information entries for coordinate crystals (Abydos, Nether, End variants).                                                                                                     |
| [`projectred_tooltips.js`](projectred_tooltips.js) | Adds translated tooltips to all ProjectRed logic gate items.                                                                                                                        |
| [`tooltips.js`](tooltips.js)                       | Adds "Added by Star Technology" tooltips to custom machines, and adds informational tooltips to various GTCEu machines (macerators, ULV fluid inputs, stabilization modules, etc.). |
| [`ponder/`](ponder/)                               | Create mod ponder scene definitions for custom machines and mechanics.                                                                                                              |
