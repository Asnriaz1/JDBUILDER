#!/bin/bash

echo "deploying $1"

ssh ubuntu@3.134.252.39

echo "Stoping Old Container"
docker container stop aspnetcore_5005_candiateflowapi

echo "Pulling & Starting New Latest Container With Tag: $1"
docker run -d -it --rm -p 5005:80 --name aspnetcore_5005_candiateflowapi mad33l/atitudetestapi:$1

echo "Container is successfully running on the :5005"