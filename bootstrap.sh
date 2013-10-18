#!/bin/sh

set -e

autoreconf --install --no-recursive
./configure CC=gcc CXX=g++ CFLAGS='-m64 -ggdb3 -O0 -Wall -Wextra' CXXFLAGS='-m64 -ggdb3 -O0 -Wall -Wextra'
