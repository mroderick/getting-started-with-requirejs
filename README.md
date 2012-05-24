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

In this branch we have modified the three javascript files to use the `define` function.

The script in index.html has been updated to use the `require` function.

In the console we can see that the names `one`, `two` and `Three` are defined.

## 3-define-dependencies

In this branch we introduce a fourth JS file, that is dependendt on the first three files.

In the console we can see that the names `one`, `two` and `Three` have been removed from the local scope as well.

## 4-define-main.js

In this branch we replace the inline script from index.html with a main.js, which is put into the data-main attribute of the RequireJS script tag.

## 5-css

In this branch we create a main-screen.css to prepare for concatenating css files.

## 6-optimise

In this branch we create build.js (our build recipe).

To run the build from the root of the project:

	node r.js -o build.js

Observe that it creates a build folder, that contains optimised versions of both JS and CSS files.

You can serve the build like so:

	cd build
	python -m SimpleHTTPServer 8001

And then point your browser to http://localhost:8001 ... here you should be able to see that we now have a lot fewer requests for both CSS and JavaScript files, and that the JavaScript files have been minified. Note that index.html has not been changed.

## 7-dynamic-loading-still

In this branch we show that it's possible to both have a merged and optimised main.js and still use dynamic loading when needed. You CAN have your cake and eat it too.
