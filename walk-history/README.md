# measure conversion progress across git history

algo:

1. start at most recent commit
2. run conversion-progress
3. collect resulting % converted
4. repeat 2) & 3) for next commit
5. stop when conversion progress is 0% for two consecutive commits
