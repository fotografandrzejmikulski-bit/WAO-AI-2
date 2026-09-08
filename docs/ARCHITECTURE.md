# Architecture Decision Record — WDA Ω∞ Agentic System

## 1. Semantic core vs provider adapters

WDA semantics are provider-neutral. Model-specific syntax lives exclusively under `adapters/`. This preserves the Ω∞ control layer while allowing ChatGPT, Gemini or future vision models to evolve independently.

## 2. Constraint-first orchestration

Agents produce structured observations, proposals and risks. The orchestrator resolves them using the priority hierarchy and applies changes as versioned state transitions. This is preferable to a free-form swarm because it makes authority and mutation boundaries auditable.

## 3. Parallel specialist analysis

Independent technical domains run in parallel after state locking. Dependencies remain explicit: e.g. compositing depends on environment/light/material analysis, while compilation waits for risk analysis.

## 4. Adversarial gate

The system has an independent critic and validator. Failure is classified by domain (identity drift, reference contamination, subject-count error, background/composition drift, anatomy, lighting, materials, optics, style, text, over-edit or under-edit) and repaired at the smallest possible scope. fileciteturn0file0L914-L959

## 5. Temporal state and memory

Each iteration carries forward the current visual state, including identity/reference assignments, locks, prior transformations and rejected alternatives. The original protocol explicitly requires this continuity. fileciteturn0file0L865-L877

## 6. Unknowns are first-class values

The system uses `UNSPECIFIED` as a valid semantic value. It never turns missing visual evidence into invented facts. This implements the protocol's anti-hallucination principle. fileciteturn0file0L693-L717

## 7. Change budget as a control primitive

Change scope is not merely descriptive; it is a guardrail that prevents a local request from escalating to global regeneration. The runtime rejects contradictory scope decisions before release.

## 8. Quality function

Conceptually:

`QUALITY = INTENT_FIDELITY × REFERENCE_FIDELITY × CONTROL × PHYSICAL_PLAUSIBILITY × VISUAL_QUALITY`

This follows the protocol's optimization objective. fileciteturn0file0L32-L38
