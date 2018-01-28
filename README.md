# Sample Lerna project

This project is an example of how Lerna can be used to manage dependencies that are react components.

* The 'host' directory contiains an app that's the consumer app of those components
* The 'packages' directory contains three modules:
    * `cat` and `dog`, each of which are direct dependencies of the host project
    * `pet-utils`, which is a dependency of both cat and dog, as well as the host

Each project is versioned independently.