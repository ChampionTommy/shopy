#!/bin/sh
pnpm run infra |
while read line;
do
  if [[ ${line} =~ "Replication done" ]]
    then
      echo $line
      pnpm run turbo-start &
    else echo $line
  fi;
done
