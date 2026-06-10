# Project Approval Process

This document outlines the evaluation steps required for new feature requests.

```mermaid
flowchart TD
    %% Define Nodes and Styles
    Start([Receive Request]) --> Decision{Is it feasible?}
    
    %% Branching Logic
    Decision -- Yes --> Design[Create Technical Spec]
    Decision -- No --> Reject[/Send Rejection Email/]
    
    Design --> Review{Team Approval?}
    
    Review -- Approved --> Implement[Add to Sprint backlog]
    Review -- Changes Needed --> Design
    
    %% Ending Nodes
    Implement --> End([Process Complete])
    Reject --> End
```

## How to Edit This Diagram
To customize the flowchart, use these basic structural components:

* **Directions**: Change `TD` (Top-Down) to `LR` (Left-to-Right) to rotate the graph layout.
* **Shapes**: Use brackets to set the block style.
  * `([Stadium])` for start/end boundaries.
  * `[Square]` for standard operations/processes.
  * `{Diamond}` for logical decision splits.
  * `[/Parallelogram/]` for data input or outputs.
* **Arrows**: Use `-->` to create standard connection lines with an arrow tip.
* **Text on Links**: Use `-- Text -->` to display labels directly on the connecting lines.
