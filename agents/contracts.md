# Agent Contract Standard

Every specialist in WAO-AI-2 follows the same contract.

## Input

```yaml
request_id: string
state_version: integer
objective: string
visual_state: object
reference_graph: object
constraints: object
upstream_findings: array
```

## Output

```yaml
agent_id: string
state_version_seen: integer
status: PROPOSE | PASS | FAIL | BLOCKED
confidence: 0.0..1.0
findings: []
proposals: []
risks: []
required_repairs: []
evidence: []
```

## Hard rules

1. Never override an explicit higher-priority instruction.
2. Never convert missing information into invented facts.
3. Never mutate another agent's domain silently.
4. Distinguish observation, inference and proposal.
5. Attach every proposal to the smallest valid change scope.
6. State whether a proposal is `DERIVED` or explicitly requested.
7. Surface contradictions instead of burying them.
8. Preserve current state across iterative turns.
9. Treat reference identity and role assignments as scoped data.
10. Return machine-readable findings first; prose is secondary.

## Evidence levels

- `OBSERVED`: directly supported by supplied visual/text evidence.
- `INFERRED`: reasoned from observed evidence; must carry confidence.
- `ASSUMED`: only acceptable when explicitly permitted by the orchestrator.
- `UNSPECIFIED`: unknown; do not invent.
