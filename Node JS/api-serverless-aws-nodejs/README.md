similar to sam
sls create

sls invoke local -f hello

sls deploy

sls remove

-----------

sls deply --stage prod


sls deply --stage prod -f add // function add ko sirf


sls logs -s prod  -f hello  prod --startTime 5m // to fech logs of function for last 5mins


sls logs -f add -s prod --tail  // loop






