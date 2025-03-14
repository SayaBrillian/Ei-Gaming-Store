# Ei-Gaming-Store
# Git Commands and Their Functions

## 1. Initial Configuration
```sh
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## 2. Initialize Repository
```sh
git init  # Initialize a new Git repository
git clone <repository_url>  # Clone an existing repository
```

## 3. Check Status and Logs
```sh
git status  # Check repository status
git log  # View commit history
git log --oneline --graph --all  # Compact log view with branch visualization
```

## 4. Branch Management
```sh
git branch  # List all branches
git branch <branch_name>  # Create a new branch
git checkout <branch_name>  # Switch to a branch
git switch <branch_name>  # Alternative command to switch branches
git checkout -b <branch_name>  # Create and switch to a new branch
git switch -c <branch_name>  # Alternative to create and switch branches
git branch -d <branch_name>  # Delete a local branch (if merged)
git branch -D <branch_name>  # Force delete a local branch
git push origin --delete <branch_name>  # Delete a remote branch
```

## 5. Staging and Managing Files
```sh
git add <file>  # Stage specific file
git add .  # Stage all changes
git reset <file>  # Unstage file without discarding changes
git reset --hard  # Revert all changes to the last commit
```

## 6. Commit Changes
```sh
git commit -m "Commit message"  # Commit with a message
git commit --amend -m "New message"  # Modify the last commit message
```

## 7. Remote Repository Management
```sh
git remote -v  # View remote repositories
git remote add origin <repository_url>  # Add a remote repository
git remote remove origin  # Remove a remote repository
```

## 8. Push and Pull Changes
```sh
git push origin <branch>  # Push changes to remote repository
git pull origin <branch>  # Fetch and merge changes from remote repository
git fetch origin  # Fetch latest updates from remote without merging
```

## 9. Merging and Rebasing Branches
```sh
git merge <branch>  # Merge a branch into the current branch
git rebase <branch>  # Rebase current branch onto another branch
```

## 10. Resolving Merge Conflicts
```sh
git mergetool  # Open a merge tool
git status  # Check for conflicts
git add <file>  # Mark conflicts as resolved
git commit -m "Resolved merge conflict"  # Commit resolved merge
```

## 11. Reverting and Resetting Changes
```sh
git revert <commit_id>  # Revert a specific commit
git reset --soft <commit_id>  # Reset to commit, keeping changes staged
git reset --hard <commit_id>  # Reset to commit, discarding all changes
```

## 12. Stashing Temporary Changes
```sh
git stash  # Stash changes temporarily
git stash list  # List all stashes
git stash apply  # Apply stashed changes
git stash drop  # Remove a stash
```

## 13. Viewing Differences
```sh
git diff  # View unstaged changes
git diff --staged  # View staged changes
git diff <branch1> <branch2>  # Compare two branches
```

## 14. Creating Tags
```sh
git tag <tag_name>  # Create a new tag
git tag -a <tag_name> -m "Tag message"  # Create an annotated tag
git push origin <tag_name>  # Push tag to remote repository
```

## 15. Deleting Files in Git
```sh
git rm <file>  # Remove a file from repository and staging
git rm --cached <file>  # Remove file from repository but keep it locally
