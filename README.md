# react-valence-ui-fileviewer
[![Build status][ci-image]][ci-url]

React component for viewing different types of files (HTML, media, documents, etc.).

## Installation

Install NPM dependencies:

```shell
npm install
```

## Testing

This project uses the [Jest](https://facebook.github.io/jest/) unit testing framework. To run the unit tests:

```shell
npm run test:unit
```

Code is also linted using [eslint](http://eslint.org/):

```shell
npm run lint
```

Both unit tests and linting is performed during CI builds as part of the `test` script:

```shell
npm test
```

## Sample

Included is a sample application which allows you to launch the file viewer with many different file types. To build the sample application, run:

```shell
npm run build-sample
```

To serve the sample application, run:

```shell
npm run serve
```

Then open `http://localhost:8080/` in your browser.

## Parameters
FlieViewer has the following parameters:

`progressCallback` Takes a callback function, which should accept a decimal, indicating the percentage loaded out of 100. May or may not be accurate.

## Contributing
Contributions are welcome, please submit a pull request!

### Code Style

This repository is configured with [EditorConfig](http://editorconfig.org) and [eslint](http://eslint.org/) rules and contributions should make use of them.

[ci-url]: https://travis-ci.org/Brightspace/react-valence-ui-fileviewer
[ci-image]: https://img.shields.io/travis/Brightspace/react-valence-ui-fileviewer.svg
