# conversion-progress

A small NodeJS script to measure the progress of converting a project from one set of filenames to another.

## usage

```bash
node index.js
measuring progress converting [".js",".jsx"] to [".ts",".tsx"]
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
