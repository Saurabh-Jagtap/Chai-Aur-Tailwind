const elements = document.querySelectorAll("*")

elements.forEach((el) => {
    let classes = el.classList;

    classes.forEach((cl) => {
        const chaiClass = {
            //border
            "chai-border-black-1": { property: "border", value: "1px solid black" },
            "chai-border-black-2": { property: "border", value: "2px solid black" },
            "chai-border-white-3": { property: "border", value: "3px solid white" },
            "chai-border-white-4": { property: "border", value: "4px solid white" },

            //background-color
            "chai-bg-blue": { property: "backgroundColor", value: "blue" },
            "chai-bg-red": { property: "backgroundColor", value: "red" },
            "chai-bg-green": { property: "backgroundColor", value: "green" },
            "chai-bg-pink": { property: "backgroundColor", value: "pink" },
            "chai-bg-black": { property: "backgroundColor", value: "black" },
            "chai-bg-white": { property: "backgroundColor", value: "white" },
            "chai-bg-yellow": { property: "backgroundColor", value: "yellow" },
            "chai-bg-orange": { property: "backgroundColor", value: "orange" },

            //font-size
            "chai-font-10": { property: "fontSize", value: "10px" },
            "chai-font-14": { property: "fontSize", value: "14px" },
            "chai-font-18": { property: "fontSize", value: "18px" },
            "chai-font-22": { property: "fontSize", value: "22px" },
            "chai-font-26": { property: "fontSize", value: "26px" },

            //padding
            "chai-p-10": { property: "padding", value: "10px" },
            "chai-pt-10": { property: "paddingTop", value: "10px" },
            "chai-pb-10": { property: "paddingBottom", value: "10px" },
            "chai-pl-10": { property: "paddingLeft", value: "10px" },
            "chai-pr-10": { property: "paddingRight", value: "10px" },

            //margin
            "chai-m-10": { property: "margin", value: "10px" },
            "chai-mt-10": { property: "marginTop", value: "10px" },
            "chai-mb-10": { property: "marginBottom", value: "10px" },
            "chai-ml-10": { property: "marginLeft", value: "10px" },
            "chai-mr-10": { property: "marginRight", value: "10px" },

            //height
            "chai-h-10": { property: "height", value: "10px" },
            "chai-h-20": { property: "height", value: "20px" },
            "chai-h-50": { property: "height", value: "50px" },

            //width
            "chai-w-10": { property: "width", value: "10px" },
            "chai-w-20": { property: "width", value: "20px" },
            "chai-w-50": { property: "width", value: "50px" },

            //text-props
            "chai-text-center": { property: "textAlign", value: "center" },
            "chai-text-white": { property: "color", value: "white" },
            "chai-text-black": { property: "color", value: "black" },
            "chai-text-red": { property: "color", value: "red" },
            "chai-fw-bold": { property: "fontWeight", value: "bold" },
            "chai-fw-normal": { property: "fontWeight", value: "normal" },

            //text-decoration
            "chai-underline": { property: "textDecoration", value: "underline" },
            "chai-no-underline": { property: "textDecoration", value: "none" },

            //border-radius
            "chai-rounded-5": { property: "borderRadius", value: "5px" },
            "chai-rounded-10": { property: "borderRadius", value: "10px" },
            "chai-rounded-full": { property: "borderRadius", value: "9999px" },

            //display props
            "chai-flex": { property: "display", value: "flex" },
            "chai-items-center": { property: "alignItems", value: "center" },
            "chai-justify-center": { property: "justifyContent", value: "center" },
            "chai-gap-2": { property: "gap", value: "2px" },
            "chai-flex-col": { property: "flexDirection", value: "column" },
            "chai-flex-row": { property: "flexDirection", value: "row" },
            "chai-block": { property: "display", value: "block" },
            "chai-inline-block": { property: "display", value: "inline-block" },
            "chai-hidden": { property: "display", value: "none" },

            //layout-control
            "chai-relative": { property: "position", value: "relative" },
            "chai-absolute": { property: "position", value: "absolute" },
            "chai-fixed": { property: "position", value: "fixed" },

            "chai-top-0": { property: "top", value: "0" },
            "chai-left-0": { property: "left", value: "0" },
            "chai-right-0": { property: "right", value: "0" },
            "chai-bottom-0": { property: "bottom", value: "0" },

            //overflow
            "chai-overflow-hidden": { property: "overflow", value: "hidden" },
            "chai-overflow-scroll": { property: "overflow", value: "scroll" },

            //cursor
            "chai-cursor-pointer": { property: "cursor", value: "pointer" },
            "chai-cursor-not-allowed": { property: "cursor", value: "not-allowed" },

            //opacity
            "chai-opacity-50": { property: "opacity", value: "0.5" },
            "chai-opacity-100": { property: "opacity", value: "1" },

            //z-index
            "chai-z-10": { property: "zIndex", value: "10" },
            "chai-z-50": { property: "zIndex", value: "50" },

            //box-shadow
            "chai-shadow-sm": { property: "boxShadow", value: "0 1px 2px rgba(0,0,0,0.1)" },
            "chai-shadow-md": { property: "boxShadow", value: "0 4px 6px rgba(0,0,0,0.1)" },
        }

        if (Object.hasOwn(chaiClass, cl)) {
            const { property, value } = chaiClass[cl]
            el.style[property] = value;
        }
    })
})