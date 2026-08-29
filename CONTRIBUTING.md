# Contributing to Point of Sales

Thank you for your interest in contributing! 🎉

## Git Workflow

This repository uses **Git Flow** with the following branches:

| Branch | Fungsi |
|--------|--------|
| `main` | Production. Only updated from PRs `development` |
| `development` | Integrasi. Feature branch merge via PR |
| `feature/*` | Feature work. Branch from `development`, PR to `development` |
| `fix/*` | Hotfix. Branch from `main`, PR to `main` + `development` |
| `release/*` | Release candidate. From `development`, merge to `main` |

## Cara Berkontribusi

### 1. Clone & Setup

```bash
git clone https://github.com/aryadwiputra/pointst-of-sales.git
cd pointst-of-sales
cp .env.example .env
composer install && npm install
php artisan key:generate
php artisan migrate --seed
php artisan storage:link
npm run dev
php artisan serve
```

### 2. Create Branch Features

```bash
git checkout development
git checkout -b feature/name-feature-anda
```

### 3. Kerja & Commit

Use **Conventional Commits**:

```
feat: add feature X
fix: fix bug Y
docs: update documentation Z
chore: update dependency
refactor: refactor fungsi A
test: add tests for B
```

### 4. Before Pull Request

Make sure everything passes:

```bash
vendor/bin/pint                    # PHP formatter
php artisan test                   # All tests pass
npm run build                      # Production build OK
```

### 5. Pull Request

1. Push branch to GitHub
2. Create a PR to branch `development`
3. Describe the changes:
   - **What changed**
   - **Why it changed**
   - **Cara testing**
4. Make sure PR title mengikuti conventional commits

### 6. After PR

- PR will be reviewed by a maintainer
- If changes are requested, push to the same branch
- After approval, the maintainer will merge

## Development Tips

- Set `tax_rate=0` on `Product::create` in tests to avoid changing `grand_total`
- Jalankan `php artisan migrate` if modul baru not yet punya tabel
- Read `AGENTS.md` for developer command information
- View `docs/` for feature documentation

## Reporting Bugs

Open a new issue in GitHub with template Bug Report.

## Feature Request

Open a new issue in GitHub with template Feature Request.
