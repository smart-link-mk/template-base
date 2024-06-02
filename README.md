# Smart-Link Template Base

Welcome to the Smart-Link Template Base project! This repository provides a foundation to create custom templates for the Smart-Link Content Management System (CMS) using HTML and LiquidJS. It includes the basic structure, files, and guidelines to help you get started quickly and efficiently.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
  - [Development](#development)
  - [Building](#building)
  - [Testing](#testing)
- [License](#license)

## Introduction

Smart-Link Template Base is designed to streamline the process of developing templates for the Smart-Link using HTML and LiquidJS. By using this boilerplate, developers can focus on creating unique designs and functionalities without worrying about the initial setup and configuration.

## Features

- **Simple HTML Structure**: Easy-to-understand HTML file structure.
- **LiquidJS Integration**: Utilize LiquidJS for dynamic templating.
- **Sample Template**: Example template to demonstrate best practices and provide a starting point.
- **Development Server**: Local development server.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (version 16.x or higher)
- [npm](https://www.npmjs.com/) (version 6.x or higher)
- [Smart-Link](https://smartlink.mk/) (active account with an API Key)

### Installation

1. **Clone the Repository**

   ```sh
   git clone https://github.com/muametgrooby/smart-link-template-base.git
   cd smart-link-template-base
   ```

2. **Install Dependencies**

   Using npm:

   ```sh
   npm install
   ```

## Project Structure

```sh
smart-link-cms-templates-boilerplate/
├── template/
│   ├── index.liquid        # Main HTML/Liquid file
│   ├── style.css           # Basic CSS file included in index.liquid
├── .github/workflows
│   ├── publish.yml         # Github workflow file to automatically release the template
├── .theme-check.yml        # Liquid extension configuration
├── .prettierrc             # Prettier configuration
├── package.json            # Project metadata and dependencies
├── config.json             # Project configuration
├── dev.js                  # The code for running the dev server
├── publish.js              # The code for publishing to Smart-Link using Smart-Link API
└── README.md               # Project documentation
```

## Usage

### Development

To start the development server:

```sh
npm run dev
```

### Publishing

To publish the template in your account:

```sh
npm run publish <API_KEY>
```

---

Happy coding! If you have any questions or need further assistance, feel free to open an issue or contact the repository owner.
