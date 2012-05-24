Getting started with RequireJS
==============================

This is a small code based guide to getting started with [RequireJS](http://requirejs.org/).

Each branch in the repository takes small steps to show how to use RequireJS, they are explained below.

Most of the JavaScript files write to the console, so using a browser that has a console, makes it much easier to figure out what is going on.

In order to see what's going on in the browser, you should serve the /src/ folder with a web server. On OSX this can be done like so:

    cd src
    python -m SimpleHTTPServer 8000

And then point your browser to <http://localhost:8000>.

## Master

The master branch shows a common scheme in organising and loading files that should be familiar to most web developers.

## 1-add-requirejs

In this branch, we are adding require.js to the /src/js/ folder and are loading it from index.html. We are setting the baseUrl, so RequireJS can figure out where to load our modules from.

We have also added r.js to the root of the project.

## 2-define-modules

## 3-define-dependencies

## 4-define-main.js

## 5-css

## 6-optimise

## 7-dynamic-loading-still
