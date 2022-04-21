# UgandaEMR 

This is a lerna project containing Uganda EMR specific frontend modules. This package contains the following

- [@uganda/esm-cervical-cancer-app](packages/esm-cervical-cancer-app/)


### Prerequisites

- [Node](https://nodejs.org/en/download) you can use ```nvm``` see how to install nvm [here](https://github.com/nvm-sh/nvm#installing-and-updating)
- [lerna](https://lerna.js.org/) tool for managing javascript monorepos 
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) project uses yarn as the npmClient


### Getting started

To install and setup the repository once you have cloned it. run the following commands

- Install dependencies, make sure you have installed lerna and yarn
    ```sh
    lerna bootstrap or npx lerna bootstrap
    ```
- To develop on a specific package e.g [@uganda/esm-cervical-cancer-app](packages/esm-cervical-cancer-app/)

    ```sh
    npx openmrs develop --sources 'packages/esm-cervical-cancer-app'
    ```

    - You can always use regex

        ```sh
        npx openmrs develop --sources 'packages/esm-{package1,package2}-app/'
        ```
