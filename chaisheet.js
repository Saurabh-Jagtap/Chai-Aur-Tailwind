export class ChaiEngine {
    constructor() {
        this.staticUtils = {
            // Layout & Display
            "chai-flex": { display: "flex" },
            "chai-block": { display: "block" },
            "chai-inline-block": { display: "inline-block" },
            "chai-hidden": { display: "none" },
            "chai-relative": { position: "relative" },
            "chai-absolute": { position: "absolute" },
            "chai-fixed": { position: "fixed" },

            // Flexbox Alignment
            "chai-items-center": { alignItems: "center" },
            "chai-items-start": { alignItems: "flex-start" },
            "chai-items-end": { alignItems: "flex-end" },
            "chai-justify-center": { justifyContent: "center" },
            "chai-justify-between": { justifyContent: "space-between" },
            "chai-flex-col": { flexDirection: "column" },
            "chai-flex-row": { flexDirection: "row" },

            // Typography
            "chai-text-center": { textAlign: "center" },
            "chai-fw-bold": { fontWeight: "bold" },
            "chai-uppercase": { textTransform: "uppercase" },

            // Expanded Palette
            "chai-text-red": { color: "#ef4444" },
            "chai-text-blue": { color: "#3b82f6" },
            "chai-text-green": { color: "#22c55e" },
            "chai-text-orange": { color: "#f97316" }, // Original orange 
            "chai-text-white": { color: "white" },
            "chai-text-gray": { color: "#94a3b8" },
            "chai-bg-dark": { backgroundColor: "#0f0f0f" }, // Matches style.css surface

            // Utilities
            "chai-mx-auto": { margin: "auto" },
            "chai-cursor-pointer": { cursor: "pointer" }
        };

        this.rules = [
            // Spacing & Sizing
            { prefix: "chai-p-", property: "padding", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-m-", property: "margin", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-mt-", property: "marginTop", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-mb-", property: "marginBottom", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-w-", property: "width", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-h-", property: "height", validate: (v) => !isNaN(v), transform: (v) => v + "px" },

            // Typography & Visuals
            { prefix: "chai-font-", property: "fontSize", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-opacity-", property: "opacity", validate: (v) => !isNaN(v), transform: (v) => v / 100 },
            { prefix: "chai-z-", property: "zIndex", validate: (v) => !isNaN(v), transform: (v) => v },

            // Borders & Shapes
            { prefix: "chai-border-", property: "border", validate: (v) => !isNaN(v), transform: (v) => `${v}px solid black` },
            { prefix: "chai-rounded-", property: "borderRadius", validate: (v) => !isNaN(v), transform: (v) => v + "px" },

            // Advanced Positioning (New)
            { prefix: "chai-top-", property: "top", validate: (v) => !isNaN(v), transform: (v) => v + "px" },
            { prefix: "chai-left-", property: "left", validate: (v) => !isNaN(v), transform: (v) => v + "px" },

            // Colors
            { prefix: "chai-bg-", property: "backgroundColor", validate: () => true, transform: (v) => v }
        ];
    }

    parseClass(cl) {
        for (let rule of this.rules) {
            if (cl.startsWith(rule.prefix)) {
                const value = cl.slice(rule.prefix.length);
                if (!rule.validate(value)) return null;
                return { property: rule.property, value: rule.transform(value) };
            }
        }
        return null;
    }

    run(root = document) {
        // 1. Initial Style Run
        this.applyStyles(root);

        // 2. Watch for changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) this.applyStyles(node);
                });
            });
        });

        observer.observe(root === document ? document.body : root, {
            childList: true,
            subtree: true
        });
    }

    // Move your logic to a helper method
    applyStyles(root) {
        const elements = root.querySelectorAll ? root.querySelectorAll("*") : [];
        // If the root itself has chai classes, include it
        const targets = root.classList ? [root, ...elements] : elements;

        targets.forEach((el) => {
            const styleMap = {};
            [...el.classList].forEach((cl) => {
                if (!cl.startsWith("chai-")) return;
                if (this.staticUtils[cl]) {
                    Object.assign(styleMap, this.staticUtils[cl]);
                } else {
                    const parsed = this.parseClass(cl);
                    if (parsed) styleMap[parsed.property] = parsed.value;
                }
            });
            Object.assign(el.style, styleMap);
        });
    }
}

// Auto-run if placed in a script tag (for CDN users)
if (typeof window !== "undefined") {
    window.ChaiCSS = new ChaiEngine();
    window.addEventListener('DOMContentLoaded', () => window.ChaiCSS.run());
}

