Make a new feature branch with your changes off the HEAD of the develop branch.
Change your desired changes and commit
Squash commits into purposeful and consice commits only
Rebase on HEAD of develop, fix conflicts, if needed
Make PR agaisnt develop branch, PR should have detailed summary and UI screenshots/vids, if applicable.
Code Reviews on PR
Revisions, if needed
If/when PR approved, merge into develop.

When changes are merged into master, 
it will kick off the deployment job on jenkins.
A PR of develop into master needs to raised,
approved, and merged, to begin the deployment cycle.
