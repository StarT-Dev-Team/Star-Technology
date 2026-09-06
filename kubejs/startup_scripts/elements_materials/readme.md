# startup_scripts/elements_materials/

Registers custom GregTech materials (alloys, elements, fluids).

## Structure

| Path                     | Description                                                                                                                                                                                                                                                          |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`elements/`](elements/) | Element definitions used as building blocks for compound materials. Organized by progression zone (abydos, nether, end, gate, nuclear, netherite, extras). `helpers.js` contains shared element-building utilities; `modifications.js` patches existing GT elements. |
| [`material/`](material/) | Compound material registrations and helpers.                                                                                                                                                                                                                         |
