# Security & Trust Model

## Assets

Visual references, user prompts, session state, generated specifications, provider credentials and audit metadata.

## Threats

- prompt injection embedded in reference images or user text;
- reference-role confusion;
- cross-session state leakage;
- stale-state overwrite;
- secret exfiltration through agent output;
- arbitrary network/tool execution;
- unbounded generation or denial-of-service;
- malicious or malformed media payloads;
- accidental persistence of sensitive visual data.

## Controls

1. Treat visual/textual content as untrusted input, never as system-level instructions.
2. Keep system policy and semantic protocol outside user-controlled state.
3. Use allowlisted tools/providers and least-privilege capabilities per agent.
4. Validate MIME type, size, dimensions and decode safety before media analysis.
5. Redact credentials and private media from logs.
6. Bind every write to `session_id + state_version`.
7. Reject conflicting/stale state writes rather than last-write-wins.
8. Apply resource/time/token budgets to every stage.
9. Keep secrets in deployment secret stores; never commit them.
10. Separate audit metadata from raw image bytes where possible.
11. Make destructive persistence explicit and reversible.
12. Run adversarial tests against prompt injection and reference contamination.

## Trust boundary

`User/reference → untrusted intake → semantic state → constrained agents → compiler → validation gate → output`

Only the orchestrator and final validator can advance the lifecycle state. Specialist agents cannot authorize themselves to bypass constraints.
