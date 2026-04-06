# Design Fixes — April 6, 2026

Backup tag: `pre-design-fixes-v1`
Backup files: `_backup-pre-design-fix/` (index.html, styles.css, app.js)

## Changes

| File | Change | Location |
|------|--------|----------|
| `index.html` | Swapped section order: CV Archive now 06, Portfolio Studio now 07 | ~lines 258–290 |
| `index.html` | Updated section-index spans (06↔07 swap) | Both section heads |
| `index.html` | Swapped nav link order: CV Archive before Portfolio Studio | Nav bar (~line 60) |
| `index.html` | Added contact form HTML (4 fields: name, email, type, message) | Inside `section id="studio"` after studio-grid |
| `styles.css` | Added `align-items: start` to `.theme-grid` to fix empty space in research tiles | ~line 780 |
| `styles.css` | Added full contact form CSS (`.contact-panel`, `.contact-form`, `.form-row`, `.form-group`, inputs, select, textarea, status) | New block after `.studio-card` (~line 1056) |
| `styles.css` | Added `.form-row` to 860px responsive breakpoint (collapse to 1 column) | ~line 1363 |
| `app.js` | Added `initContactForm()` handler with fetch-based Formspree submission | After `initGoogleAvatar()` |
| `app.js` | Updated 3rd studio card link from `mailto:` to `#contactForm` | In `studioProjects` data |

## Rollback

```bash
# Full revert (recommended)
git reset --hard pre-design-fixes-v1 && git push origin main --force

# File-only revert
cp _backup-pre-design-fix/* .
```

## Notes

- Contact form uses Formspree endpoint: `https://formspree.io/f/xpwdkqpl`
- Form action is POST to Formspree — no backend needed
- Built-in honeypot spam filtering via Formspree
- Form submit is handled via JS fetch with success/error states
- Fallback email address shown on error
