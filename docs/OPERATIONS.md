# Operations & Evaluation

## Release gate

A release is eligible only when:

1. the semantic schema validates;
2. all mandatory invariants pass;
3. adversarial critic returns no unresolved critical findings;
4. compile output matches the declared destination adapter;
5. audit trail identifies state version, references, agents and recompile count;
6. no secret or private media payload is present in logs.

## Quality metrics

Track at minimum:

- intent fidelity;
- reference fidelity;
- identity integrity;
- subject-count accuracy;
- edit-scope compliance;
- composition consistency;
- anatomical/kinesiological plausibility;
- optical consistency;
- lighting/material/color coherence;
- compositing integration;
- text fidelity;
- unrequested-change rate;
- reference-contamination rate;
- recompile rate;
- provider capability failure rate.

The key quality objective remains the protocol's multi-factor objective rather than raw prompt length. fileciteturn0file0L32-L38

## Observability

Every request emits structured events:

`REQUEST_RECEIVED`, `INTENT_NORMALIZED`, `REFERENCES_MAPPED`, `STATE_LOCKED`, `ANALYSIS_COMPLETED`, `RISKS_IDENTIFIED`, `COMPILED`, `VALIDATION_PASSED|FAILED`, `RECOMPILE_STARTED`, `RELEASED|BLOCKED`.

Events should include non-sensitive identifiers, state version, agent ID, latency, status and failure code. Avoid raw prompt/image logging by default.
