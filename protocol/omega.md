# WDA Ω∞ — Canonical Semantic Contract

## Purpose

This document defines the non-negotiable semantic layer used by every agent. The uploaded WDA Ω∞ master prompt is the source protocol: the system identifies itself as a Virtual Director of Visual Intelligence and optimizes for intent fidelity, reference fidelity, control, physical plausibility and visual quality. fileciteturn0file0L8-L38

## Processing law

`RAW REQUEST → SEMANTIC INTENT → VISUAL STATE → CONSTRAINT GRAPH → TECHNICAL SPECIFICATION → MODEL-SPECIFIC PROMPT`

The key design decision is that the prompt is a compiled artifact rather than the source of truth.

## Priority

P0 explicit user intent → P1 reference assignment → P2 identity → P3 immutable state → P4 transformation → P5 spatial relationships → P6 composition → P7 anatomy/kinesiology → P8 environment → P9 lighting → P10 optics → P11 materials → P12 color → P13 microrealism → P14 style → P15 decorative enhancement. Higher priorities override lower priorities. fileciteturn0file0L68-L118

## Visual states

Every significant element is represented as:

`SOURCE → ROLE → STATE → TRANSFORMATION → TARGET`

States are `LOCKED`, `FLEXIBLE`, `MODIFIED`, `REMOVED`, `ADDED`, and `DERIVED`. Only physically required `DERIVED` changes may be introduced without an explicit user instruction. fileciteturn0file0L124-L150 fileciteturn0file0L276-L298

## Reference firewall

Every reference receives an explicit semantic role. Identity, pose, composition, environment, lighting, wardrobe, color and other visual dimensions are independently assignable. A pose reference must not become an identity source by implication. fileciteturn0file0L162-L205

## Edit discipline

The default editing policy is `LOCAL EDIT > GLOBAL REGENERATION`. Change budget determines the maximum authorized footprint: MICRO, LOCAL, REGIONAL, GLOBAL or CREATIVE_REBUILD. fileciteturn0file0L318-L355

## Invariants

The runtime must enforce, at minimum:

- expected subject count equals final subject count;
- explicit identity remains attached to its authoritative reference;
- no reference contamination across roles;
- no unrequested elements are added;
- locked elements remain stable;
- camera parameters remain optically coherent;
- shadows have plausible causes;
- materials respond plausibly to light;
- text is immutable when supplied;
- iterative requests mutate current state instead of resetting it;
- failed validation triggers targeted recompilation. fileciteturn0file0L252-L270 fileciteturn0file0L487-L500 fileciteturn0file0L1418-L1478

## Iteration law

`CURRENT STATE + NEW INSTRUCTION = NEXT STATE`

A user correction is a high-priority signal. The system identifies the faulty variable, repairs that failure domain and preserves unrelated variables. fileciteturn0file0L845-L877 fileciteturn0file0L883-L910

## Output law

The final instruction must combine intent, reference roles, locked state, transformation, spatial relationships, light, optics, materials, color and negative constraints. Before release, the validation gate checks identity, reference assignment, subject count, edit scope, composition, pose, anatomy, background, lighting, camera, materials, color, edge/shadow integration, text, realism, drift and contamination. fileciteturn0file0L1368-L1416 fileciteturn0file0L1420-L1478
