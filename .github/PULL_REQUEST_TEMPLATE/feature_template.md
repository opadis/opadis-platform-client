## Pull Request Preparation

Please confirm the following before submitting:

- [ ] Changes are made on a separate branch prefixed with `feature/`
- [ ] Only one commit, or commits are properly squashed
- [ ] Descriptive commit message provided
- [ ] All tests pass locally (`npm test`)
- [ ] Pull request targets the `staging` branch
- [ ] Pull request is not a duplicate of an open one

---

## Summary
Briefly describe the new feature. Indicate the affected roles (user, admin, filial, visitor) and UI components or views.

## Related Issue
Closes #____ or relates to #____

---

## Checklist
- [ ] Code follows ESLint and Prettier rules
- [ ] Component is responsive and accessible
- [ ] Unit or integration tests added or updated
- [ ] All tests pass (`npm run test`)
- [ ] Storybook updated (if applicable)

---

## How to Test
1. Run: `npm install && npm start`
2. Navigate to the affected route or component
3. Test the full user interaction
4. Confirm the expected UI behavior

---

## Additional Context (optional)
Add screenshots, design links, or technical notes if helpful.
