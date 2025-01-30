# Spark Toolbox ⚡️

[![npm version](https://badge.fury.io/js/spark.svg)](https://badge.fury.io/js/spark)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A toolbox of UI components, utilities, and styles built with **Vue 3**, **TypeScript**, and **Tailwind CSS** for West Shore Home (WSH) / Lighthouse Studio (LHS) applications.

**`spark` is currently in active development.**

## Table of Contents

*   [Features](#features)
*   [Installation](#installation)
*   [Usage](#usage)
    *   [Import the CSS](#import-the-css)
    *   [Components](#components)
        *   [Accordion](#accordion)
        *   [Alert Dialog](#alert-dialog)
        *   [Button](#button)
        *   [Carousel](#carousel)
        *   [Checkbox](#checkbox)
        *   [Code](#code)
        *   [Dialog](#dialog)
        *   [Input](#input)
        *   [Label](#label)
        *   [Navigation Menu](#navigation-menu)
        *   [Omni Controller](#omni-controller)
        *   [Progress](#progress)
        *   [Radio Group](#radio-group)
        *   [Scroll Area](#scroll-area)
        *   [Select](#select)
        *   [Sheet](#sheet)
        *   [Tabs](#tabs)
        *   [Textarea](#textarea)
        *   [Tooltip](#tooltip)
*   [Styling](#styling)
*   [Development](#development)
    *   [Prerequisites](#prerequisites)
    *   [Setup](#setup)
    *   [Building the Library](#building-the-library)
    *   [Linking for Local Development](#linking-for-local-development)
    *   [Running Tests](#running-tests)
*   [Contributing](#contributing)
*   [License](#license)

## Features

*   **Vue 3 Components:** A set of reusable, accessible UI components built with Vue 3's Composition API.
*   **Tailwind CSS:** Pre-configured with Tailwind CSS for easy styling and customization, including WSH/LHS specific design tokens.
*   **TypeScript:** Built with TypeScript for type safety and improved developer experience.
*   **Radix Vue:** Leverages Radix Vue for accessible, unstyled primitive components.
*   **Lucide Icons:** Includes Lucide Icons (via `lucide-vue-next`) for a wide variety of icons.
*   **Headless UI:** Provides unstyled components to allow full control over styling using Tailwind CSS.

## Installation

To use `spark` in your project, you need to install it along with its peer dependencies:

```bash
npm install spark vue@^3.4.15 radix-vue@^1.6.3 lucide-vue-next@^0.371.0
or
yarn add spark vue@^3.4.15 radix-vue@^1.6.3 lucide-vue-next@^0.371.0

