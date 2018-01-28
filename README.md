# Sample Lerna project

This project is an example of how Lerna can be used to manage dependencies that are react components.

* The 'host' directory contiains an app that's the consumer app of those components
* The 'packages' directory contains three modules:
    * `cat` and `dog`, each of which are direct dependencies of the host project
    * `pet-utils`, which is a dependency of both cat and dog, as well as the host

Each project is versioned independently.

## Running the project

* Install Lerna. `npm install -g lerna`
* Link the packages together and install their external dependencies. `lerna bootstrap`
    * This runs `yarn install` on each package and `yarn link` on each package that lives in this project.
* Start things up: `lerna run dev --parallel`
    * This runs the `dev` task specified in each package's `package.json`. In app, this spins up a dev server and watches for changes. In the child projects, this runs webpack in watch mode to pick up changes to those projects.
* Once the server is up and running, try to make a change in cat, dog, or pet-utils and see that change immediately propagated to the running app.

For more info, official Lerna docs can be found here: https://github.com/lerna/lerna