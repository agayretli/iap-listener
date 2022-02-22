<h1 align="center">
  Listener for iap-backoffice
</h1>

<p align="center">The application for [iap-backoffice](https://github.com/agayretli/iap-backoffice) listener service.</p>

<p align="center"><a href="https://github.com/create-go-app/cli/releases" target="_blank"><img src="https://img.shields.io/badge/version-v1.0.0-blue?style=for-the-badge&logo=none" alt="cli version" /></a>&nbsp;<img src="https://img.shields.io/badge/license-apache_2.0-red?style=for-the-badge&logo=none" alt="license" /></p>

## Installation

Download and install VSCode from [https://code.visualstudio.com](https://code.visualstudio.com)

Then, download the GitHub repo:

```bash
git clone https://github.com/agayretli/iap-listener.git

cd iap-listener
cp .env.example .env
npm install
```

Before starting to write code, open a terminal to install some extensions for linting and formatting:

* Note: `code --help` should give an output.

```bash
code --install-extension dbaeumer.vscode-eslint
code --install-extension rvest.vs-code-prettier-eslint
```

Then, restart VSCode to activate these extensions.

## Running

In the server folder:

```bash
npm run prod
```

The listener will be opened at [http://localhost:8080](http://localhost:8080).

