# @x12i/memorix-ops-pack usage example

Permanent ops/fieldstone acceptance pack: agent metadata, fixtures, ops-source, harness.

This consuming application demonstrates **build a scoped request from the bundled acceptance universe** using the published npm package, pinned to `3.0.3`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Run the Ops acceptance harness with its fixtures.
- Install the acceptance pack's package-owned metadata.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/memorix-ops-pack)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

This example consumes bundled assets or deterministic local fixtures. It does not contact providers, acquire real records, seed a database, or persist a production graph. Report examples check HTML generation only. Theme examples generate `preview.html`; visual appearance still needs browser review.
