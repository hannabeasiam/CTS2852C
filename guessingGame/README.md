# CTS2852C - Unit 3 Assignment

## Instructions

After joining and then cloning the remote repository from GitHub to a local repository for this assignment, complete the following steps:

1. Each team member is to set their user name and email using the `git config` command. Check that the correct username and email is set using the `git config -l` command. This needs to be done every time the remote repository is cloned to a local repository.
1. One team member must create a branch named `develop` off the master branch and push the branch to the remote repository. Creation of files for the assignment cannot start until the `develop` branch has been pushed to the remote repository. 
1. Each team member must contribute JavaScript code to the assignment. It is the responsibility of all team members to ensure that other team members contribute JavaScript code to the assignment.

## Steps to make changes

1. Check that the correct username and email is set using the `git config -l` command.
1. Checkout the `develop` branch and execute a `git pull` to get the latest code from the remote repository.
1. Create a new branch and checkout the new branch.
1. Add, modify and/or delete a file(s).
1. When a team member completes their changes:
    1. test the changes
    1. add the file(s) to the staging area
    1. commit the changes
    1. checkout the `develop` branch
    1. execute a `git pull` to get the latest code from the remote repository
    1. merge the changes to the `develop` branch from the new branch previously created
        1. resolve merge conflicts if there are any
        1. add the file(s) fixed from the merge conflict to the staging area
        1. commit the fixed file(s)
        1. test that the code still works after the merge conflict is fixed
    1. push the `develop` branch to the remote repository
    1. create a pull request on the remote repository (GitHub) from the `develop` branch to the `master` branch.
    1. request that a fellow team member review the pull request and merge to the master branch on the remote repository
1. Delete the branch previously created for coding the changes from the local repository.

Repeat these steps each time changes are to be made. **NOTE**: Ensure that a `git pull` is regularly executed while checked out on the `develop` branch to get any changes team mates have pushed to the develop branch.

## Requirements

The following requirements must be completed:

1. Before any team member starts writing HTML, CSS or JavaScript code, a file named `algorithm.html` must be created listing the algorithm that will be used by the team to solve the problem(s) specified in the requirements. This file must go through the **Steps to make changes** process before any coding starts.
1. A file `contributions.html` must be created that lists the name of each team member and what they did for the assignment. Each team member must follow the  **Steps to make changes** process  to add their name and their contributions to this file.
1. See the **Unit 3 Assignment Requirements** page in D2L for JavaScript programming requirements.
1. Ensure that all changes made for the assignment are on the `master` branch.
1. Once all requirements are met, one team member is to download the `master` branch of the remote repository (GitHub) and submit it before the due date and time to the `Assignment 3` dropbox in D2L. **Note**: The correct filename will have the repository name followed by `-master.zip`. Any team member can submit the assignment. Multiple submissions to the dropbox are allowed by any team member and multiple team members can each submit to the dropbox. The last submission before the due date and time will be graded.

## Grading Rubric

A total of 20 points are available for completing this assignment as a team. 12 points are awarded to the team and 8 points are awarded to the individual team member for their participation.

| Points | Requirements                                    |
| ------ | ----------------------------------------------- |
| 2      | Team followed instructions                      |
| 5      | Requirements completed                          |
| 2      | Documentation and comments                      |
| 3      | Aesthetics and usability of web pages submitted |
| 8      | Participation by team member                    |