#!/bin/bash
nodemon --watch data/ --watch lib/ -e js,html,css,png,gif,jpg,svg --exec ./reload.sh
