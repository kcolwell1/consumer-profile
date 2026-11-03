# Orbit · Consumer Intelligence Lab

React, TypeScript, Vite and Cytoscape dashboard for local, explainable consumer activity exploration. No personal data is bundled. No external AI service, analytics, database, cookies or localStorage. Imports and feedback live in memory; reload clears them.

## Development
Node 22+, pnpm 11.25.0: `pnpm install --frozen-lockfile --ignore-scripts`, `pnpm test`, `pnpm dev`, `pnpm build`.

## Deployment
Push main to run `.github/workflows/pages.yml`. GitHub repository Settings → Pages → Source: GitHub Actions may require repository administrator action. Expected URL (verify deployment before treating as live): https://kcolwell1.github.io/consumer-profile/.

## Chrome testing installation
Extension is not published in the Chrome Web Store. Extract the dashboard's extension ZIP, open chrome://extensions, enable Developer mode, Load unpacked and choose the extracted folder. Open the deployed dashboard and reload it. Open Orbit's popup, explicitly approve the optional history permission, select a period and Analyze. No history is accessed before approval and the Analyze action. Remove permission in the popup or dashboard; deleting session data is a separate control.

Only the production dashboard path is supported by the release extension. Local previews deliberately do not have extension access. The popup sends data to a content script, which exists only on the authorized dashboard. Scope is both origin and project path; other GitHub Pages projects cannot receive data. Extension no longer injects after revocation? The bridge remains, but history permission is removed; no new reads succeed.

## Supported input
JSON arrays or CSV with `url,title,time` (time ISO date or milliseconds), Chrome history `lastVisitTime`, Takeout `Browser History` with `time_usec`, My Activity `titleUrl,time`, ChatGPT `conversations.json`, and catalogs with `name,url,category,price`. Extract ZIP exports first. 50 MB per file. Unsupported timestamps or URLs skipped. Dedupe uses stripped URL plus timestamp. Titles/paths may still contain private text. Query strings, URL credentials and fragments are discarded.

Conversation import considers only links in user messages. Assistant text and Markdown blockquotes excluded; embedded quotation cannot reliably be distinguished. Arbitrary shopping exports require mapping to supported CSV; order-specific parsers are not provided.

## Methods and limits
Keyword rules assign six broad non-sensitive categories. Explicit sensitive keywords are unclassified; this is not a comprehensive sensitive-content detector. Activity share = category records / all filtered records. Fewer than three supporting records yields INSUFFICIENT DATA, 3–9 low confidence, 10+ moderate. Visits never establish purchases or psychological traits. Graph edges connect top 120 domains to keyword categories, weighted by visit counts; these are rule-based groups, not an algorithmic community detection model. No cross-interest relationships or brand extraction is asserted. Heatmap counts visits by local weekday/hour. No duration estimate.

Catalog recommendations match exact category labels, sorted by category activity share. Negative feedback suppresses corresponding recommendations. Imported prices are unverified; no live prices, ratings, images, availability or scraping is asserted. Open retailer URLs to research actual products. Product page capture is not implemented. No price comparison or premium/value inference is made without suitable evidence. Radial timelines, category flows and longitudinal change models are not implemented.

## QA
`pnpm test` checks URL sanitization, unsafe schemes, CSV quoting, Takeout timestamps, conversation attribution, missing dates, deduplication, uncertainty, manifest scope and bridge origin checks. Synthetic fixtures are tests only and never loaded in the dashboard. These tests do not constitute an installed-extension test, real-history test, store review or full browser accessibility/performance audit.

## Store submission checklist
See STORE-SUBMISSION.md. Chrome Web Store requires a developer account, listing assets, accurate disclosure, submission and review. No approved listing exists in this project.
