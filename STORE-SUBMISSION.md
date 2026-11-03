# Chrome Web Store submission preparation

Name: Orbit — Local Consumer Intelligence
Single purpose: transfer explicitly approved browsing history to the user's local-processing consumer intelligence dashboard.

History justification: optional chrome.history access retrieves visited URLs, titles, and visit times for the period the user selects, only after explicit permission and Analyze. No passwords, authentication tokens, raw cookies, or private accounts are accessed. No required permissions or broad host access. Content script restricted to https://kcolwell1.github.io/consumer-profile/* solely for local dashboard communication.

Privacy disclosure draft: This extension accesses browsing history only after the user grants optional permission and starts analysis. Records are sent only to the authorized dashboard in the same browser. Neither extension nor dashboard sends records to a server, analytics system or external AI service. The extension does not persist records. The dashboard stores records in session memory until removed or the page reloads. URL query strings, fragments and credentials are discarded; page titles and URL paths can contain private information. Revocation stops future history reads; delete dashboard session data to clear previously transferred records. No sale, advertising, credit eligibility decisions or third-party sharing.

Before submission: publish this disclosure at a stable privacy URL, obtain the developer's support contact, provide actual screenshots from a consenting installation, verify the extension in Chrome, prepare required store promotional assets, complete data-use declarations for browsing history/website content, package extension/, pay any developer registration fee, submit and await approval. Icons 16/48/128 included. Do not invent a store listing URL. Replace the testing download with the actual approved listing only after verification.
