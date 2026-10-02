# Contributing to AEL Brand & Operating System

Thank you for your interest in contributing.

## Code of Conduct
By participating, you agree to uphold our [Code of Conduct](CODE_OF_CONDUCT.md).

## How to Contribute

### Reporting Bugs
1. Check existing [Issues](../../issues).
2. Open a new issue using the **Bug Report** template.

### Suggesting Features
1. Open a new issue using the **Feature Request** template.

### Submitting Changes
1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/your-feature`.
3. Follow the code style.
4. Write clear commit messages (Conventional Commits).
5. Push and open a Pull Request.

## Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation only
- `style:` formatting
- `refactor:` code refactoring
- `perf:` performance
- `test:` tests
- `chore:` maintenance

Example: `feat(identity): add accessibility statement section`

## Code Style

### HTML
- 2-space indentation
- Semantic elements
- ARIA labels on interactive elements

### CSS
- Design tokens via CSS custom properties
- Mobile-first media queries
- `prefers-reduced-motion` respected

### JavaScript
- Vanilla JS only (zero dependencies)
- IIFE with `'use strict'`
- No `innerHTML` for user data

## Branch Naming
- `feat/` feature
- `fix/` bugfix
- `docs/` documentation
- `refactor/` refactoring
- `chore/` maintenance

## Pull Request Process
1. Update the CHANGELOG.md under `## [Unreleased]`.
2. Ensure all links work and accessibility is maintained.
3. Request review from @aymanelmasryael.
4. Squash and merge once approved.

## Questions?
Open a [Discussion](../../discussions) or email `ayman@aymanelmasry.me`.
