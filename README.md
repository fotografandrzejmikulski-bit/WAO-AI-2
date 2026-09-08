# WAO-AI-2 — WDA Ω∞ Agentic Visual Intelligence

A production-oriented multi-agent architecture for transforming visual intent into deterministic, reference-faithful, physically coherent image specifications and model-specific prompts.

## Core philosophy

- **Intent is authority.**
- **Reference is data.**
- **Identity is locked when specified.**
- **Unrequested elements are not creative opportunities.**
- **Local edits require local change.**
- **Global regeneration is a last resort.**
- **Unknown information remains `UNSPECIFIED`; it is never silently invented.**

The original WDA Ω∞ protocol is preserved as the semantic foundation; this repository adds execution architecture, agent contracts, orchestration, validation, adapters, observability, security, tests, and ChatGPT/MCP integration boundaries.

## Architecture

```text
User / ChatGPT
      │
      ▼
┌──────────────────────┐
│ Intake & Intent Agent│
└──────────┬───────────┘
           ▼
┌──────────────────────┐
│ Reference Graph Agent│
└──────────┬───────────┘
           ▼
┌─────────────────────────┐
│ Visual State / Lock Agent│
└──────────┬──────────────┘
           ▼
┌─────────────────────────┐
│ Scene & Spatial Analyst  │
└──────────┬──────────────┘
           ▼
┌──────────┴─────────────────────────────────────┐
│ Specialized parallel analysis agents            │
│ Identity · Pose · Camera · Light · Material     │
│ Color · Environment · Compositing · Typography  │
└──────────┬─────────────────────────────────────┘
           ▼
┌─────────────────────────┐
│ Constraint Graph / Risk │
│ & Failure Analysis Agent│
└──────────┬──────────────┘
           ▼
┌─────────────────────────┐
│ Prompt Compiler Agent   │
│ (model-specific adapter) │
└──────────┬──────────────┘
           ▼
┌─────────────────────────┐
│ Adversarial QA / Gate   │
└──────────┬──────────────┘
           ▼
      Final specification
```

## Repository layout

- `protocol/` — canonical Ω∞ semantic contract and JSON schema.
- `agents/` — role contracts and agent specifications.
- `orchestrator/` — deterministic workflow/state-machine definitions.
- `adapters/` — model/provider-neutral compilation interfaces.
- `mcp/` — ChatGPT/MCP integration boundary.
- `security/` — threat model, data-handling and secrets policy.
- `tests/` — contract, invariant and adversarial regression suites.
- `examples/` — reference workflows and sample state documents.
- `docs/` — architecture, operations, extension and evaluation guidance.

## Execution contract

Every request follows:

`ANALYZE → MAP → LOCK → TRANSFORM → COMPILE → VALIDATE → OUTPUT`

The system never treats a prompt as the authoritative internal representation. The authoritative object is the structured visual state and constraint graph; prompts are compiled artifacts.

## Safety and determinism

The system uses least-authority tool access, explicit reference roles, immutable-state tracking, change budgets, subject-count invariants, contradiction resolution, failure-domain repair, and a final validation gate before output.

No API key or provider secret belongs in source control. Runtime secrets must be injected through the deployment environment.

## Status

Foundation release: architecture, protocol, agent contracts, orchestration, schemas, tests and integration contracts are included. Provider adapters are intentionally isolated so model APIs can evolve independently from WDA semantics.
