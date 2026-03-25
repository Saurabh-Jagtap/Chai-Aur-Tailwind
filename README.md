<<<<<<< HEAD
# Chai Tailwind

## Video explaining the project:
Twitter Link - https://x.com/SaurabhJag004/status/2035706997564424498
=======
# ☕ Chai CSS Engine

A runtime-first utility CSS engine inspired by tea and speed. Skip the build step and generate functional CSS utilities on the fly using a robust, rule-based engine.

---

## ⚡ Key Features

* **Instant Runtime**: Class names are parsed into styles immediately upon DOM injection, requiring no pre-compilation.
* **Dynamic Rules**: Define properties like padding, margins, and borders with simple logic-based rules.
* **Zero Config**: No configuration files or PostCSS required.
* **Lightweight**: A single-file JavaScript engine that handles utility generation automatically.

---

## 🚀 Installation

### Option 1: CDN (Easiest)
For a quick setup, include the script directly in your HTML. The engine will automatically initialize and run once the DOM is loaded.

```html
<script src="[https://unpkg.com/chaisheet@1.0.0/chaisheet.js](https://unpkg.com/chaisheet@1.0.0/chaisheet.js)"></script>
```
### Option 2: NPM
Install the package via npm to use it in modern JavaScript environments:

```html
npm install chaisheet
```

## 🛠️ Usage
### 1. Static Utilities
Chai CSS comes with built-in static utilities for common layouts and colors:

```html
<div class="chai-flex chai-items-center chai-justify-between chai-bg-dark">
  <h1 class="chai-text-orange chai-fw-bold">Brewing Speed</h1>
  <p class="chai-text-gray">Utility-first, runtime-ready.</p>
</div>
```

### 2. Dynamic Rules
Generate specific styles by appending values directly to the utility prefix:

Padding/Margins: chai-p-20 (20px padding), chai-m-10 (10px margin).

Dimensions: chai-w-200 (200px width), chai-h-50 (50px height).

Typography: chai-font-18 (18px font size).

Visuals: chai-rounded-12 (12px border radius), chai-opacity-50 (0.5 opacity).

## ⚙️ JavaScript API
If you are importing the engine as a module, you can manually control when it runs.

```javascript
import { ChaiEngine } from 'chaisheet';

const chai = new ChaiEngine();

// Styles the entire document
chai.run(); 

// Or style a specific container
const myElement = document.querySelector('#app');
chai.run(myElement);
```

📝 Configuration Reference
The engine supports several dynamic prefixes out of the box:


| Prefix | CSS Property | Example |
|----------|----------|----------|
| chai-p-  | padding | chai-p-30 |
| chai-m-  | margin | chai-m-15 |
| chai-w-  | width | chai-w-100 |
| chai-h-  | height | chai-h-100 |
| chai-font-  | fontSize | chai-font-12 |
| chai-bg-  | backgroundColor | chai-bg-red |
| chai-border-  | border | chai-border-2 |

## 🤝 Community & Support
Author: Saurabh Jagtap

Repository: [chaisheet](https://github.com/Saurabh-Jagtap/chaisheet.git)

## License: MIT

© 2026 Chai CSS Engine. Built for the modern web.
>>>>>>> c58546f (Initial release: ChaiSheet Engine + Playground)
