# timelines-spa

## Local Development

**requirements:**

- Docker and Docker Compose (Docker Desktop comes with both binaries)

**developing with a containerized env:**

`package.json`, `package(-lock).json` are mounted so that your local LSP will can discover code from `node_modules`, and so that we can add packages from within a containerized env.
```bash
# e.g. start with npm ci to get node_modules on host
docker compose run --rm frontend npm ci
# or add dependency using the containerized env, and `package(-lock).json` changes will appear on host
docker compose run --rm frontend npm install tailwindcss @tailwindcss/vite
```

**running locally:**

```bash
docker compose up --watch
```
