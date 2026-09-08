import { randomUUID } from 'node:crypto';

const STAGES = [
  ['intake', ['A01']],
  ['reference-mapping', ['A02']],
  ['state-lock', ['A03', 'A04']],
  ['scene-analysis', ['A05', 'A06', 'A09']],
  ['technical-analysis', ['A07', 'A08', 'A10', 'A11', 'A12', 'A13', 'A14', 'A15', 'A16', 'A17']],
  ['risk-analysis', ['A18', 'A21']],
  ['compile', ['A19']],
  ['final-gate', ['A20']]
];

const VALID_CHANGE_BUDGETS = new Set(['MICRO','LOCAL','REGIONAL','GLOBAL','CREATIVE_REBUILD']);

export function createRequest(rawRequest, destinationModel = 'unspecified') {
  return {
    request_id: randomUUID(),
    state_version: 0,
    status: 'RECEIVED',
    raw_request: rawRequest,
    destination_model: destinationModel,
    visual_state: emptyState(),
    events: []
  };
}

export function emptyState() {
  return {
    version: 'Ω∞',
    intent: { raw_request: '', normalized_intent: '', primary_goal: '', secondary_goals: [], creative_boundary: '' },
    references: { items: [], identity_source: null, conflicts: [], resolution_strategy: '' },
    state: { source: {}, locked: [], modified: [], removed: [], added: [], derived: [] },
    subject: { count: null, identity: '', identity_lock: true },
    constraints: {
      negative: [],
      change_budget: 'LOCAL',
      edit_scope: '',
      immutable_elements: [],
      secondary_changes_allowed: [],
      global_regeneration: false,
      attention: { critical: [], high: [], medium: [], low: [] }
    },
    output: { destination_model: 'unspecified', medium: 'photographic' },
    validation: { passed: false, checks: {}, risks: [], recompile_required: false }
  };
}

export function applyPatch(state, patch, { reason = 'agent proposal', agentId = 'unknown' } = {}) {
  const next = structuredClone(state);
  if (patch?.constraints?.change_budget && !VALID_CHANGE_BUDGETS.has(patch.constraints.change_budget)) {
    throw new Error(`Invalid change budget: ${patch.constraints.change_budget}`);
  }
  merge(next, patch);
  return next;
}

function merge(target, patch) {
  for (const [key, value] of Object.entries(patch ?? {})) {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      target[key] ??= {};
      merge(target[key], value);
    } else if (value !== undefined) {
      target[key] = value;
    }
  }
}

export function validateInvariants(state) {
  const checks = {
    subject_count: state.subject?.count == null || state.subject.count >= 0,
    identity_lock: state.subject?.identity_lock !== false,
    no_global_regeneration_for_local: !(state.constraints?.global_regeneration === true && ['MICRO','LOCAL'].includes(state.constraints?.change_budget)),
    no_unknown_change_budget: VALID_CHANGE_BUDGETS.has(state.constraints?.change_budget),
    no_duplicate_references: new Set((state.references?.items ?? []).map(r => r.id)).size === (state.references?.items ?? []).length
  };
  return { passed: Object.values(checks).every(Boolean), checks };
}

export function buildPlan() {
  return STAGES.map(([id, agents]) => ({ id, agents }));
}
