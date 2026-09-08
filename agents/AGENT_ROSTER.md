# WDA Ω∞ Agent Roster

The team is intentionally hierarchical: semantic authority is centralized, while analysis is specialized and parallelizable.

| ID | Agent | Primary responsibility | Authority | Can mutate state? |
|---|---|---|---|---|
| A00 | ORCHESTRATOR | workflow, routing, dependency graph, state transitions | SYSTEM | yes, via validated transitions |
| A01 | INTENT | normalize user intent and creative boundary | P0 | proposed intent only |
| A02 | REFERENCE | assign semantic roles and resolve reference conflicts | P1 | reference graph |
| A03 | IDENTITY | identity firewall, identity consistency | P2 | identity lock proposals |
| A04 | STATE | immutable/flexible/modified/removed/added/derived classification | P3/P4 | visual state |
| A05 | SPATIAL | x/y/scale/rotation/depth/occlusion/contact/perspective | P5 | spatial graph |
| A06 | COMPOSITION | framing, crop, negative space and visual hierarchy | P6 | composition proposal |
| A07 | ANATOMY | anatomy and human plausibility | P7 | validation + repair suggestions |
| A08 | KINESIOLOGY | center of gravity, load, axes, joints and contacts | P7 | validation + repair suggestions |
| A09 | ENVIRONMENT | scene, architecture, depth and atmosphere | P8 | environment proposal |
| A10 | LIGHT | complete light-field reconstruction | P9 | lighting proposal |
| A11 | CAMERA | camera/lens/perspective/DOF consistency | P10 | camera proposal |
| A12 | MATERIAL | surface microstructure and light response | P11 | material proposal |
| A13 | COLOR | white balance, tonal system, hue relationships and grading | P12 | color proposal |
| A14 | REALISM | anti-CGI and photographic plausibility | P13 | realism QA |
| A15 | COMPOSITING | edges, hair, contact/cast shadows, spill and depth matching | P5/P9/P11 | compositing proposal |
| A16 | TYPOGRAPHY | exact text and layout fidelity | P1/P6 | text state |
| A17 | STYLE | aesthetic language without unauthorized content mutation | P14 | style proposal |
| A18 | RISK | adversarial failure prediction and countermeasures | cross-cutting | risk register |
| A19 | COMPILER | compile semantic state into destination-model instructions | output layer | rendered prompt |
| A20 | VALIDATOR | final gate, invariants, counterfactual checks | SYSTEM GATE | pass/fail only |
| A21 | CRITIC | independent second-pass critique | SYSTEM GATE | findings only |
| A22 | MEMORY | current-state versioning and rejected-alternative ledger | persistence | state snapshots |

## Agent independence rule

Specialists must not silently reinterpret upstream authority. They consume the canonical state and return structured proposals/findings. The orchestrator resolves proposals according to priority and conflict rules.

## Two-pass quality model

1. **Constructive pass:** derive the best technically coherent specification.
2. **Adversarial pass:** attempt to break it; validate invariants; repair only the smallest failed domain.

No final output is considered complete without the second pass.
