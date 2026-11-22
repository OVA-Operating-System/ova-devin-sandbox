# ova-devin-sandbox

Synthetic-only sandbox for trying an external coding agent (Devin) behind the OVA Paperclip worker.

- Everything here is made-up example code. No company, customer, tenant or financial data, no secrets, no deployment hooks.
- Agents push to `ova/<workflow>-a<n>` branches and open **draft** pull requests only.
- `main` is protected: changes land only through a reviewed pull request that the Founder approves and merges.
- GitHub Actions is disabled for this repository, so nothing in a pull request runs automatically.

Run the tests with Node.js 20 or newer: `npm test` (no dependencies).
