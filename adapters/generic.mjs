export const genericAdapter = {
  id: 'generic',
  capabilities() {
    return {
      structured_state: true,
      reference_roles: true,
      negative_constraints: true,
      iterative_state: true,
      provider_specific_syntax: false
    };
  },
  compile(state) {
    const lines = [];
    lines.push(`EXECUTE THE USER'S VISUAL INTENT.`);
    lines.push(`REFERENCE ROLES: ${formatReferences(state.references?.items ?? []) || 'none specified'}.`);
    lines.push(`LOCKED STATE: ${formatArray(state.state?.locked)}.`);
    lines.push(`TRANSFORMATION: ${formatArray(state.state?.modified) || 'none explicitly listed'}.`);
    lines.push(`DERIVED CHANGES ALLOWED ONLY FOR PHYSICALLY NECESSARY INTEGRATION: ${formatArray(state.state?.derived) || 'none'}.`);
    lines.push(`CHANGE BUDGET: ${state.constraints?.change_budget ?? 'UNSPECIFIED'}.`);
    lines.push(`NEGATIVE CONSTRAINTS: ${formatArray(state.constraints?.negative) || 'none specified'}.`);
    lines.push(`DESTINATION MODEL: ${state.output?.destination_model ?? 'unspecified'}.`);
    return lines.join('\n');
  }
};

function formatArray(value) {
  return Array.isArray(value) && value.length ? value.join('; ') : '';
}
function formatReferences(refs) {
  return refs.map(r => `${r.id}=${r.role}`).join('; ');
}
