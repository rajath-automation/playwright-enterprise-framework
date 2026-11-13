# Playwright Enterprise Automation Framework

[![Playwright Enterprise CI](https://github.com/rajath-automation/playwright-enterprise-framework/actions/workflows/playwright.yml/badge.svg)](https://github.com/rajath-automation/playwright-enterprise-framework/actions/workflows/playwright.yml)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-1.50+-2EAD33?logo=playwright&logoColor=white)

A scalable, maintainable End-to-End (E2E) test automation framework engineered with **Playwright** and **TypeScript**, implementing the **Page Object Model (POM)**, custom Playwright fixtures, environment-driven configuration, and automated **GitHub Actions CI/CD** pipelines.

---

## Key Architectural Highlights

* **Page Object Model (POM):** Encapsulates page locators and user interactions inside modular classes (`BasePage`, `LoginPage`, `InventoryPage`) to eliminate code duplication and simplify UI maintenance.
* **Custom Playwright Fixtures:** Leverages `baseFixtures.ts` to inject initialized Page Objects directly into test specs with zero boilerplate[cite: 2].
* **Environment & Test Data Isolation:** Separates environment variables (`.env` / `.env.example`) from structured JSON test datasets (`test-data/credentials.json`) for clean, secure execution across local and CI environments[cite: 2].
* **Tag-Based Execution:** Supports targeted suite execution (`@smoke`, `@regression`) via npm scripts for fast feedback loops[cite: 2].
* **Automated CI/CD & Reporting:** Executes headless browser tests on Ubuntu via GitHub Actions on every push and pull request, automatically archiving HTML test reports (`playwright-report`) as build artifacts.

---

## Project Structure

```text
playwright-enterprise-framework/
├── .github/
│   └── workflows/
│       └── playwright.yml        # GitHub Actions CI/CD workflow
├── fixtures/
│   └── baseFixtures.ts           # Custom Playwright test fixtures for POM injection
├── pages/
│   ├── BasePage.ts               # Shared navigation, waits, and wrapper utilities
│   ├── LoginPage.ts              # Authentication locators and login workflows
│   └── InventoryPage.ts          # Product catalog and cart action methods
├── test-data/
│   └── credentials.json          # Structured test user roles and test data
├── tests/
│   ├── auth.spec.ts              # Authentication & negative login test suites
│   ├── e2e-purchase.spec.ts      # End-to-end checkout flow scenarios
│   └── example.spec.ts           # Baseline framework verification tests
├── .env.example                  # Environment variable template
├── .gitignore                    # Excludes node_modules, reports, and local .env secrets
├── package.json                  # Project dependencies and test execution scripts
└── playwright.config.ts          # Global Playwright configuration (browsers, retries, reporters)
