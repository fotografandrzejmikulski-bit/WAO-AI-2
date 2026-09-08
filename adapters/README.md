# Model Adapter Layer

Adapters translate the canonical WDA Ω∞ state into provider-specific instruction syntax.

## Adapter contract

```ts
export interface ModelAdapter {
  readonly id: string;
  compile(input: CanonicalVisualState): CompiledInstruction;
  capabilities(): ModelCapabilities;
}
```

An adapter may change wording, ordering and syntax, but may not change semantic priority, reference authority, locked state, change scope, negative constraints or validation requirements.

Recommended adapters:

- `chatgpt` — natural-language hierarchical instruction with explicit reference roles and preservation constraints.
- `gemini` — explicit reference mapping and detailed relationship-first transformation specification.
- `generic` — provider-neutral structured serialization for future models.

Provider-specific capabilities are declarative. Unsupported capabilities must be surfaced as limitations rather than silently approximated.
