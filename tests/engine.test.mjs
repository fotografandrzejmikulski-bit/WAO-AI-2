import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequest, applyPatch, validateInvariants, buildPlan } from '../orchestrator/engine.mjs';

test('creates a versioned request with locked identity semantics', () => {
  const r = createRequest('replace the background only', 'ChatGPT');
  assert.equal(r.status, 'RECEIVED');
  assert.equal(r.visual_state.version, 'Ω∞');
  assert.equal(r.visual_state.subject.identity_lock, true);
});

test('applies nested state patches without mutating the source object', () => {
  const r = createRequest('change lighting');
  const next = applyPatch(r.visual_state, {
    intent: { primary_goal: 'change lighting' },
    state: { locked: ['identity', 'wardrobe'] },
    constraints: { change_budget: 'LOCAL' }
  });
  assert.deepEqual(r.visual_state.state.locked, []);
  assert.deepEqual(next.state.locked, ['identity', 'wardrobe']);
});

test('rejects invalid change budgets', () => {
  const r = createRequest('x');
  assert.throws(() => applyPatch(r.visual_state, { constraints: { change_budget: 'UNLIMITED' } }));
});

test('hard invariants pass for default state', () => {
  const r = createRequest('x');
  assert.equal(validateInvariants(r.visual_state).passed, true);
});

test('orchestration contains constructive and adversarial gates', () => {
  const plan = buildPlan();
  assert.equal(plan.at(-2).id, 'compile');
  assert.equal(plan.at(-1).id, 'final-gate');
});
