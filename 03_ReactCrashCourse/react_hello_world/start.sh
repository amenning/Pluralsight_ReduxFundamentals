#!/bin/bash

# Instal VIM
apt-get update
apt-get install vim

# Instal node modules
./node_modules/.bin/babel --plugins @babel/plugin-transform-react-jsx -o js/example1.min.js js/example1.js

# Start server
node server.js
