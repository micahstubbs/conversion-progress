# conversion-progress

A small NodeJS script to measure the progress of converting a project from one set of filenames to another.

I wrote this when I wanted to know how far along I am converting from React Javascript's `[".js",".jsx"]` file extensions to TypeScript's [".ts",".tsx"] file extensions.

That said, this script should be generally useful for other kinds of file-extension-changing project conversions as well, if you modify `sourceExts` and
`targetExts` arrays in [./index.js](./index.js) to match your project goals.

## usage

```bash
node index.js
measuring progress converting to [".ts",".tsx"]
7 [".js",".jsx"] files
5 [".ts",".tsx"] files
42% converted
```

to reproduce the example shown above,

```
// clone an example project
git clone https://github.com/microsoft/TypeScript-React-Conversion-Guide

// clone this repo
git clone https://github.com/micahstubbs/conversion-progress

// change directory and install depedencies
cd conversion-progress
yarn

// measure conversion progress
node index.js
```

## roadmap

- packaging & publishing to npm
- fancy progress bar in the terminal
- web UI with tree map showing conversion progress by directory
