import assert from 'node:assert/strict';
import { OPS_SCOPE, OPS_OBJECT_TYPES } from '@x12i/memorix-ops-pack';
import { readFile } from 'node:fs/promises';
const fixture = JSON.parse(await readFile(new URL(import.meta.resolve('@x12i/memorix-ops-pack/fixtures/ops-source-data.json')), 'utf8'));
const requested = [OPS_OBJECT_TYPES[0], 'outside-the-pack'];
const allowed = new Set(OPS_OBJECT_TYPES);
const selected = requested.filter(objectType => allowed.has(objectType));
assert.equal(selected.length, 1);
const plan = { scope: structuredClone(OPS_SCOPE), objectTypes: selected, fixtureCollections: Object.keys(fixture) };
assert(plan.fixtureCollections.length > 0);
assert.equal(plan.scope.agentIds.length, 1);
console.log(plan);
// This selects fixture scope and content. It does not seed Catalox or run the acceptance harness.
