# !/bin/bash
# cd public

time=$(date "+%Y-%m-%d %H:%M:%S")
echo $time

git add .
git commit -m "🏕️$time"
git push
# exit
 
