# yi-jian-mei (一剪梅)

[![Coverage Status](https://coveralls.io/repos/github/chrisgzf/yi-jian-mei/badge.svg?branch=master)](https://coveralls.io/github/chrisgzf/yi-jian-mei?branch=master)

_"xue hua piao piao bei feng xiao xiao"_

NPM package that returns you the chorus lyrics of [Fei Yu-ching's song, 一剪梅](https://www.youtube.com/watch?v=W8x4m-qpmJ8). This package is [published on the NPM registry](https://www.npmjs.com/package/yi-jian-mei) and is also [available on GitHub](https://github.com/chrisgzf/yi-jian-mei).

## Why?

Good question.

## How to use

1. Install [NodeJS](https://nodejs.org/en/download/package-manager/) and [yarn](https://yarnpkg.com/getting-started/install) (or use npm, it comes installed with NodeJS).

1. Go to an existing project or create a new project with:

   ```bash
   $ yarn init
   ```

1. Install the `yi-jian-mei` NPM package with:

   ```bash
   $ yarn add yi-jian-mei
   ```

1. Voila! You can now use the package in your code! For example:

   ```javascript
   const yiJianMei = require('yi-jian-mei');

   const chorus = yiJianMei();
   // `chorus` should now be '雪花飘飘，北风萧萧'

   console.log(chorus);
   // You should now see '雪花飘飘，北风萧萧'
   ```

## Setting up the development environment

1.  Clone the repository

    ```bash
    $ git clone https://github.com/chrisgzf/yi-jian-mei
    ```

    or

    ```bash
    $ git clone git@github.com:chrisgzf/yi-jian-mei
    ```

    if you use SSH with GitHub (you really should!)

1.  Change directory to the source folder

    ```bash
    $ cd yi-jian-mei
    ```

1.  Install dependencies

    ```bash
    yi-jian-mei $ yarn install
    ```

1.  You can now edit the source code for this package!

1.  To run tests, you can run:

    ```bash
    yi-jian-mei $ yarn test
    ```

1.  Please note that as a community, we have decided to enforce strict testing, linting and styling. If you would like to contribute to the codebase, your PR
    has to pass all CI checks. You can run these checks locally with:

    ```bash
    yi-jian-mei $ yarn test && yarn lint-check && yarn prettier-check
    ```

## Contributing

We accept PRs!
