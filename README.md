# RuneKit - The Offline Developer Suite

![RuneKit Logo](https://via.placeholder.com/150) <!-- TODO: Replace with actual logo -->

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

> ### **Why RuneKit?**
> Is it because this tool is a mischievous shapeshifter, masterfully transforming your data from one form to another—turning chaotic JSON into structured CSV, or decoding cryptic tokens into readable text?
> Or is it just a simple shorthand for a **Ru**ne**Kit** **De**veloper toolkit?
> The answer is yes.

## Overview

**RuneKit** is a comprehensive, open-source offline developer toolkit designed to help streamline common development tasks. Built with **privacy-first principles**, all processing happens 100% locally on the user's machine, with absolutely no data transmitted to external servers.

RuneKit provides a CLI tool, Web application, Desktop application, and Docker containers - all powered by a shared TypeScript core library.

## Features

- **Privacy-First**: All processing happens locally. No network requests, no data leaves your device.
- **Multi-Platform**: CLI tool, Web app, Native Desktop app, and Docker containers.
- **Code Reuse**: A single TypeScript `core` library powers all platforms.
- **Open Source**: MIT licensed and driven by community contributions.

## Installation

### CLI Tool

Install the RuneKit CLI tool globally:

```bash
npm install -g runekit
```

Or use npx without installing:

```bash
npx runekit --help
```

### Web Application

Visit [runekit-web.example.com](https://runekit-web.example.com) to use the web version.

For self-hosting, check out our Docker images.

## Usage

### CLI Commands

```bash
# Format JSON
runekit format-json '{"name":"John","age":30}'

# Format XML
runekit format-xml '<root><child>text</child></root>'

# Format YAML
runekit format-yaml 'name: John\nage: 30'

# Convert CSV to JSON
echo 'name,age\nJohn,30' | runekit csv-to-json

# Convert JSON to CSV
echo '[{"name":"John","age":30}]' | runekit csv-to-csv

# Decode JWT token
runekit decode-jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImFnZSI6MzB9.5B8B23GQ3GQ3GQ3GQ3GQ3GQ3GQ3GQ3GQ3GQ3GQ3GQ

# Decode SAML response
echo 'PHNhbWxwOlJlc3BvbnNlIHhtbG5zOnNhbWxwPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6cHJvdG9jb2wiPjwvc2FtbHA6UmVzcG9uc2U+' | runekit decode-saml
```

All commands support reading from stdin when no argument is provided:

```bash
cat data.json | runekit format-json
```

## Platform Support

| Platform | Technology Stack | Use Case | Distribution |
| :--- | :--- | :--- | :--- |
| **CLI Tool** | **Node.js/TypeScript** | Automation, scripting, CI/CD | `npm`, Homebrew, etc. |
| **Web App** | **React/TypeScript** | Quick browser access, no install | Vercel, Docker, Self-hosted |
| **Native App**| **Tauri (Rust/TS)**| Deep system integration, local files| GitHub Releases |
| **Docker**| **Nginx/Alpine** | Self-hosting the web app for teams | Docker Hub, GHCR |

## Development

### Prerequisites

- Node.js >= 16.0.0
- npm or yarn

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/runekit.git
   cd runekit
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build all packages:
   ```bash
   npm run build
   ```

4. Run tests:
   ```bash
   npm test
   ```

### Project Structure

```
runekit/
├── packages/
│   ├── core/         # SHARED OFFLINE LOGIC (TypeScript)
│   │   ├── src/formatters/   # JSON, XML, YAML formatters
│   │   ├── src/converters/   # CSV <> JSON conversion
│   │   ├── src/parsers/      # JWT, SAML decoders
│   │   └── index.ts        # Main export for all functions
│   ├── cli/          # Node.js CLI Tool (consumes `core`)
│   │   ├── src/commands/     # CLI command implementations
│   │   └── package.json
│   ├── web/          # React Web App (consumes `core`)
│   │   ├── src/pages/        # UI for each tool
│   │   └── package.json
│   └── desktop/      # Tauri Native App (consumes `core`)
│       ├── src-tauri/        # Rust backend for system tasks
│       └── package.json
├── docker/           # Docker configs for self-hosting the web app
├── LICENSE           # MIT License
└── README.md
```

## Contributing

We welcome contributions from the community! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to get started.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all contributors who have helped shape RuneKit
- Inspired by the need for privacy-first developer tools
