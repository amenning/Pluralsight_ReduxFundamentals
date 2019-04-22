#!/bin/bash

# Instal VIM
apt-get update
apt-get install vim

# Instal node modules
./node_modules/.bin/babel --plugins @babel/plugin-transform-react-jsx -o js/example2.min.js js/example2.js

# Start server
node server.js
