1. Make a new feature branch off the HEAD of the update to date develop branch.
2. Change your desired changes and commit
3. Squash commits into purposeful and consice commits only
4. Rebase on HEAD of develop, fix conflicts, if needed
5. Make PR agaisnt develop branch, PR should have detailed summary and UI screenshots/vids, if applicable.
6. Code Reviews on PR
7. Revisions, if needed
8. If/when PR approved, merge into develop.

**When changes are merged into master, 
it will kick off the deployment job on jenkins.
A PR of develop into master needs to raised,
approved, and merged, to begin the deployment cycle.**
