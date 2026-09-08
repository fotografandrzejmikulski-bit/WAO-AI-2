# ChatGPT / MCP Integration Contract

## Boundary

WAO-AI-2 exposes a provider-neutral semantic service. A ChatGPT-facing MCP server should expose only narrowly scoped tools and structured resources.

## Recommended tools

### `wao_intake`
Normalize a user visual request into an intent object.

### `wao_map_references`
Assign semantic roles to provided references and report conflicts.

### `wao_build_state`
Construct source/locked/transformed/constraint/target state.

### `wao_compile`
Compile canonical semantic state for a declared destination model.

### `wao_validate`
Run invariants, adversarial checks and the final Ω∞ gate.

### `wao_run`
Execute the full pipeline for a request. This is the high-level convenience tool and should return both the final artifact and a machine-readable audit summary.

## Tool security

MCP tools must not accept arbitrary shell commands, arbitrary network destinations or raw secret values. Tool inputs are schema-validated. Network and image-provider capabilities are explicit allowlists. Logging must exclude credentials and raw private image bytes.

## Session state

Conversation turns use `session_id`, `state_version`, and an append-only event log. A stale `state_version` must produce a conflict rather than overwrite newer visual state.

## Output envelope

```json
{
  "request_id": "...",
  "state_version": 7,
  "status": "RELEASED",
  "visual_state": {},
  "compiled_instruction": "...",
  "validation": {
    "passed": true,
    "checks": {},
    "risks": []
  },
  "audit": {
    "agents": [],
    "references": [],
    "change_budget": "LOCAL",
    "recompile_cycles": 0
  }
}
```
