## Making Changes and Submitting Pull Requests

1. Make a new feature branch off the HEAD of updated develop branch.
  - `git checkout develop && git pull`
  - `git checkout -b <feature-branch-name>`
2. Validate code changes, then add your desired changes and commit changes
  - `git diff add ./file1 ./components/file2.jsx`
  - `git add ./file1 ./components/file2.jsx`
  - `git commit` and add commit message and save commit
3. Squash commits into purposeful and consice commits only
  - Ensure you have squashed additional commits into specfic and purposeful and consice messages. Idealy one commit per feature.
4. Rebase on HEAD of develop, fix conflicts, if needed
  - `git checkout develop && git pull`
  - Push feature branch to origin so PR can be created
  - `git push`
6. Create Pull Request
  - Visit https://github.com/naed11/Bitfaced-Web-App/branches 
  - Find the pushed feature branch
  - Create a Pull Request of <feature-branch-name> into develop, and submit PR
7. Pull Request - Code Reviews, discussions, and feedback
  - Monitor and respond to feedback or questions on PR.
  - Submit changes to feature branch, if required.
8. If/when PR approved, merge into develop.
  - Visit PR on Github, and merge PR once approvals given

#### When changes are merged into master, it will kick off the deployment job on jenkins. A PR of develop into master needs to raised, approved, and merged, to begin the deployment cycle
