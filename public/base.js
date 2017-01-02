import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "boxSizing": "border-box"
    },
    "*:before": {
        "boxSizing": "border-box"
    },
    "*:after": {
        "boxSizing": "border-box"
    },
    "html": {
        "fontSize": "100%",
        "MsTextSizeAdjust": "100%",
        "WebkitTextSizeAdjust": "100%",
        "fontFamily": "sans-serif"
    },
    "button": {
        "fontFamily": "sans-serif",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "#363636",
        "font": "inherit",
        "overflow": "visible",
        "textTransform": "none",
        "WebkitAppearance": "button",
        "cursor": "pointer",
        "border": "1px solid #d7d7d7",
        "backgroundColor": "#f3f3f3",
        "lineHeight": "normal",
        "paddingTop": 0.5,
        "paddingRight": 1,
        "paddingBottom": 0.5,
        "paddingLeft": 1,
        "textDecoration": "none",
        "display": "inline-block",
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "input": {
        "fontFamily": "sans-serif",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "inherit",
        "font": "inherit",
        "lineHeight": "normal"
    },
    "select": {
        "fontFamily": "sans-serif",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "inherit",
        "font": "inherit",
        "textTransform": "none",
        "height": 36,
        "paddingTop": 0,
        "paddingRight": 0.4,
        "paddingBottom": 0,
        "paddingLeft": 0.4,
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "overflow": "hidden",
        "lineHeight": 32,
        "position": "relative",
        "display": "block"
    },
    "textarea": {
        "fontFamily": "sans-serif",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "inherit",
        "font": "inherit",
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "overflow": "auto"
    },
    "article": {
        "display": "block"
    },
    "aside": {
        "display": "block"
    },
    "details": {
        "display": "block"
    },
    "figcaption": {
        "display": "block"
    },
    "figure": {
        "display": "block",
        "marginTop": 1,
        "marginRight": 40,
        "marginBottom": 1,
        "marginLeft": 40
    },
    "footer": {
        "display": "block"
    },
    "header": {
        "display": "block"
    },
    "hgroup": {
        "display": "block"
    },
    "main": {
        "display": "block"
    },
    "nav": {
        "display": "block"
    },
    "section": {
        "display": "block"
    },
    "summary": {
        "display": "block"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "sans-serif",
        "fontSize": 1,
        "lineHeight": 1.375,
        "color": "#585858",
        "fontWeight": "400",
        "background": "#fff"
    },
    "form": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 1,
        "paddingBottom": 1
    },
    "fieldset": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "legend": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": 1.125,
        "lineHeight": 1.5,
        "fontWeight": "700"
    },
    "audio": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "canvas": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "progress": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "video": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "audio:not([controls])": {
        "display": "none",
        "height": 0
    },
    "[hidden]": {
        "display": "none"
    },
    "template": {
        "display": "none"
    },
    "img": {
        "border": 0
    },
    "svg:not(:root)": {
        "overflow": "hidden"
    },
    "p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0
    },
    "a": {
        "color": "#cd5c5c",
        "background": "transparent",
        "textDecoration": "underline"
    },
    "a:active": {
        "outline": 0,
        "textDecoration": "none"
    },
    "a:hover": {
        "outline": 0,
        "textDecoration": "none"
    },
    "h1": {
        "fontFamily": "sans-serif",
        "marginTop": 0.7,
        "marginRight": 0,
        "marginBottom": 0.5,
        "marginLeft": 0,
        "fontSize": 2,
        "lineHeight": 2.375,
        "color": "#343434",
        "fontWeight": "400"
    },
    "h2": {
        "fontFamily": "sans-serif",
        "marginTop": 1.4,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "fontSize": 1.625,
        "lineHeight": 2,
        "color": "#343434",
        "fontWeight": "400"
    },
    "h3": {
        "fontFamily": "sans-serif",
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "fontSize": 1.375,
        "lineHeight": 1.75,
        "color": "#343434",
        "fontWeight": "400"
    },
    "h4": {
        "fontFamily": "sans-serif",
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "fontSize": 1.125,
        "lineHeight": 1.5,
        "color": "#343434",
        "fontWeight": "400"
    },
    "h5": {
        "fontFamily": "sans-serif",
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 0.1,
        "marginLeft": 0,
        "fontSize": 1,
        "lineHeight": 1.375,
        "color": "#343434",
        "fontWeight": "400"
    },
    "h6": {
        "fontFamily": "sans-serif",
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 0.1,
        "marginLeft": 0,
        "fontSize": 0.875,
        "lineHeight": 1.25,
        "color": "#343434",
        "fontWeight": "400"
    },
    "b": {
        "fontWeight": "700"
    },
    "strong": {
        "fontWeight": "700"
    },
    "em": {
        "fontStyle": "italic"
    },
    "abbr[title]": {
        "borderBottom": "1px dotted"
    },
    "dfn": {
        "fontStyle": "italic"
    },
    "small": {
        "fontSize": "80%"
    },
    "mark": {
        "background": "#ff0",
        "color": "#000"
    },
    "sub": {
        "fontSize": "75%",
        "lineHeight": 0,
        "position": "relative",
        "verticalAlign": "baseline",
        "bottom": -0.25
    },
    "sup": {
        "fontSize": "75%",
        "lineHeight": 0,
        "position": "relative",
        "verticalAlign": "baseline",
        "top": -0.5
    },
    "del": {
        "textDecoration": "line-through"
    },
    "hr": {
        "boxSizing": "content-box",
        "height": 1,
        "background": "#eee",
        "border": 0,
        "marginTop": 1,
        "marginBottom": 1
    },
    "ul": {
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 40
    },
    "ol": {
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 40
    },
    "ul li": {
        "marginBottom": 5
    },
    "ol li": {
        "marginBottom": 5
    },
    "dl:before": {
        "content": " ",
        "display": "table"
    },
    "dl:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "dl dt": {
        "float": "left",
        "width": "25%",
        "display": "block",
        "fontWeight": "400"
    },
    "dl dd": {
        "overflow": "hidden",
        "display": "block"
    },
    "blockquote": {
        "fontFamily": "sans-serif",
        "fontWeight": "400",
        "color": "#424242",
        "fontStyle": "italic",
        "marginTop": 3,
        "marginRight": 0,
        "marginBottom": 3,
        "marginLeft": 0
    },
    "blockquote p": {
        "fontSize": 1.375,
        "lineHeight": 1.75,
        "marginBottom": 0.4
    },
    "blockquote cite": {
        "fontSize": 0.8125,
        "lineHeight": 1.1875,
        "fontWeight": "700",
        "fontStyle": "normal",
        "color": "#777"
    },
    "caption": {
        "fontSize": 1.125,
        "lineHeight": "normal",
        "fontWeight": "700",
        "textAlign": "left",
        "paddingTop": 0.5,
        "paddingRight": 0,
        "paddingBottom": 0.5,
        "paddingLeft": 0,
        "borderBottom": "1px solid #d7d7d7"
    },
    "table": {
        "fontSize": 0.875,
        "borderCollapse": "collapse",
        "borderSpacing": 0,
        "width": "100%",
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "textAlign": "left"
    },
    "table thead td": {
        "color": "#585858",
        "paddingTop": 0.8,
        "paddingRight": 0.5,
        "paddingBottom": 0.8,
        "paddingLeft": 0.5,
        "borderBottom": "1px solid #e9e9e9"
    },
    "table thead th": {
        "color": "#585858",
        "paddingTop": 0.8,
        "paddingRight": 0.5,
        "paddingBottom": 0.8,
        "paddingLeft": 0.5,
        "borderBottom": "1px solid #e9e9e9"
    },
    "table tbody td": {
        "color": "#585858",
        "paddingTop": 0.8,
        "paddingRight": 0.5,
        "paddingBottom": 0.8,
        "paddingLeft": 0.5,
        "borderBottom": "1px solid #e9e9e9"
    },
    "table tbody th": {
        "color": "#585858",
        "paddingTop": 0.8,
        "paddingRight": 0.5,
        "paddingBottom": 0.8,
        "paddingLeft": 0.5,
        "borderBottom": "1px solid #e9e9e9"
    },
    "table tfoot td": {
        "color": "#585858",
        "paddingTop": 0.8,
        "paddingRight": 0.5,
        "paddingBottom": 0.8,
        "paddingLeft": 0.5,
        "borderBottom": "1px solid #e9e9e9"
    },
    "table tfoot th": {
        "color": "#585858",
        "paddingTop": 0.8,
        "paddingRight": 0.5,
        "paddingBottom": 0.8,
        "paddingLeft": 0.5,
        "borderBottom": "1px solid #e9e9e9"
    },
    "code": {
        "fontSize": 0.8125,
        "lineHeight": 1.125,
        "wordWrap": "break-word",
        "fontFamily": "\"courier new\", monospace, serif",
        "color": "#272727",
        "backgroundColor": "#f1f1f1",
        "fontWeight": "normal",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "whiteSpace": "pre-wrap"
    },
    "kbd": {
        "fontSize": 0.8125,
        "lineHeight": 1.125,
        "wordWrap": "break-word",
        "fontFamily": "\"courier new\", monospace, serif",
        "color": "#272727",
        "backgroundColor": "#f1f1f1",
        "fontWeight": "normal",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "whiteSpace": "pre-wrap"
    },
    "pre": {
        "fontSize": 0.8125,
        "lineHeight": 1.125,
        "wordWrap": "break-word",
        "fontFamily": "\"courier new\", monospace, serif",
        "color": "#272727",
        "backgroundColor": "#f1f1f1",
        "fontWeight": "normal",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "whiteSpace": "pre-wrap",
        "overflow": "auto",
        "border": "1px solid #d7d7d7"
    },
    "samp": {
        "fontSize": 0.8125,
        "lineHeight": 1.125,
        "wordWrap": "break-word",
        "fontFamily": "\"courier new\", monospace, serif",
        "color": "#272727",
        "backgroundColor": "#f1f1f1",
        "fontWeight": "normal",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "whiteSpace": "pre-wrap"
    },
    "label": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "optgroup": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontWeight": "700"
    },
    "input[type=\"text\"]": {
        "height": 36,
        "paddingTop": 0,
        "paddingRight": 0.4,
        "paddingBottom": 0,
        "paddingLeft": 0.4,
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "WebkitAppearance": "none",
        "MozAppearance": "textfield",
        "borderRadius": 0
    },
    "input[type=\"email\"]": {
        "height": 36,
        "paddingTop": 0,
        "paddingRight": 0.4,
        "paddingBottom": 0,
        "paddingLeft": 0.4,
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "WebkitAppearance": "none",
        "MozAppearance": "textfield",
        "borderRadius": 0
    },
    "input[type=\"password\"]": {
        "height": 36,
        "paddingTop": 0,
        "paddingRight": 0.4,
        "paddingBottom": 0,
        "paddingLeft": 0.4,
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "WebkitAppearance": "none",
        "MozAppearance": "textfield",
        "borderRadius": 0
    },
    "input[type=\"tel\"]": {
        "height": 36,
        "paddingTop": 0,
        "paddingRight": 0.4,
        "paddingBottom": 0,
        "paddingLeft": 0.4,
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "WebkitAppearance": "none",
        "MozAppearance": "textfield",
        "borderRadius": 0
    },
    "input[type=\"number\"]": {
        "height": 36,
        "paddingTop": 0,
        "paddingRight": 0.4,
        "paddingBottom": 0,
        "paddingLeft": 0.4,
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "WebkitAppearance": "none",
        "MozAppearance": "textfield",
        "borderRadius": 0
    },
    "input[type=\"date\"]": {
        "height": 36,
        "paddingTop": 0,
        "paddingRight": 0.4,
        "paddingBottom": 0,
        "paddingLeft": 0.4,
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "WebkitAppearance": "none",
        "MozAppearance": "textfield",
        "borderRadius": 0
    },
    "input[type=number]::-webkit-inner-spin-button": {
        "WebkitAppearance": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "input[type=number]::-webkit-outer-spin-button": {
        "WebkitAppearance": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "input[type=\"date\"]::-webkit-inner-spin-button": {
        "display": "none",
        "WebkitAppearance": "none"
    },
    "input[type=\"checkbox\"]": {
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=\"radio\"]": {
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=\"number\"]::-webkit-inner-spin-button": {
        "height": "auto"
    },
    "input[type=\"number\"]::-webkit-outer-spin-button": {
        "height": "auto"
    },
    "input[type=\"search\"]": {
        "WebkitAppearance": "textfield",
        "MozAppearance": "textfield",
        "boxSizing": "content-box"
    },
    "input[type=\"search\"]::-webkit-search-cancel-button": {
        "WebkitAppearance": "none"
    },
    "input[type=\"search\"]::-webkit-search-decoration": {
        "WebkitAppearance": "none"
    },
    "html input[type=\"button\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=\"reset\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=\"submit\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "button[disabled]": {
        "cursor": "default"
    },
    "html input[disabled]": {
        "cursor": "default"
    },
    "button::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "::-webkit-input-placeholder": {
        "color": "#999"
    },
    ":-moz-placeholder": {
        "color": "#999"
    },
    "::-moz-placeholder": {
        "color": "#999"
    },
    ":-ms-input-placeholder": {
        "color": "#999"
    },
    "button:hover": {
        "textDecoration": "none",
        "background": "#f9f9f9"
    },
    "button:active": {
        "textDecoration": "none"
    },
    "button-link": {
        "color": "#cd5c5c",
        "textDecoration": "underline",
        "border": 0,
        "background": "transparent",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "button-link:hover": {
        "textDecoration": "none"
    },
    "button-link:active": {
        "outline": 0
    },
    "select:before": {
        "content": "",
        "border": "6px solid transparent",
        "borderTopColor": "#676767",
        "top": "50%",
        "right": 10,
        "marginTop": -3,
        "pointerEvents": "none",
        "position": "absolute"
    },
    "select select": {
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "width": "120%",
        "height": 36,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "lineHeight": "normal",
        "border": 0,
        "background": "transparent",
        "display": "block"
    },
    "select select:focus": {
        "outline": 0
    },
    "clear:before": {
        "content": " ",
        "display": "table"
    },
    "clear:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "row:before": {
        "content": "",
        "display": "table"
    },
    "row:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "row": {
        "position": "relative",
        "marginLeft": -15,
        "marginRight": -15
    },
    "container": {
        "paddingLeft": 15,
        "paddingRight": 15,
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "container-full": {
        "paddingLeft": 0,
        "paddingRight": 0,
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "col-1": {
        "paddingLeft": 15,
        "paddingRight": 15,
        "position": "relative",
        "float": "left",
        "width": "8.33333%"
    },
    "col-2": {
        "paddingLeft": 15,
        "paddingRight": 15,
        "position": "relative",
        "float": "left",
        "width": "16.66667%"
    },
    "col-3": {
        "paddingLeft": 15,
        "paddingRight": 15,
        "position": "relative",
        "float": "left",
        "width": "25%"
    },
    "col-4": {
        "paddingLeft": 15,
        "paddingRight": 15,
        "position": "relative",
        "float": "left",
        "width": "33.33333%"
    },
    "col-5": {
        "paddingLeft": 15,
        "paddingRight": 15,
        "position": "relative",
        "float": "left",
        "width": "41.66667%"
    },
    "col-6": {
        "paddingLeft": 15,
        "paddingRight": 15,
        "position": "relative",
        "float": "left",
        "width": "50%"
    },
    "col-7": {
        "paddingLeft": 15,
        "paddingRight": 15,
        "position": "relative",
        "float": "left",
        "width": "58.33333%"
    },
    "col-8": {
        "paddingLeft": 15,
        "paddingRight": 15,
        "position": "relative",
        "float": "left",
        "width": "66.66667%"
    },
    "col-9": {
        "paddingLeft": 15,
        "paddingRight": 15,
        "position": "relative",
        "float": "left",
        "width": "75%"
    },
    "col-10": {
        "paddingLeft": 15,
        "paddingRight": 15,
        "position": "relative",
        "float": "left",
        "width": "83.33333%"
    },
    "col-11": {
        "paddingLeft": 15,
        "paddingRight": 15,
        "position": "relative",
        "float": "left",
        "width": "91.66667%"
    },
    "col-12": {
        "paddingLeft": 15,
        "paddingRight": 15,
        "position": "relative",
        "float": "left",
        "width": "100%"
    },
    "push-1": {
        "left": "8.33333%"
    },
    "push-2": {
        "left": "16.66667%"
    },
    "push-3": {
        "left": "25%"
    },
    "push-4": {
        "left": "33.33333%"
    },
    "push-5": {
        "left": "41.66667%"
    },
    "push-6": {
        "left": "50%"
    },
    "push-7": {
        "left": "58.33333%"
    },
    "push-8": {
        "left": "66.66667%"
    },
    "push-9": {
        "left": "75%"
    },
    "push-10": {
        "left": "83.33333%"
    },
    "push-11": {
        "left": "91.66667%"
    },
    "pull-1": {
        "left": "-8.33333%"
    },
    "pull-2": {
        "left": "-16.66667%"
    },
    "pull-3": {
        "left": "-25%"
    },
    "pull-4": {
        "left": "-33.33333%"
    },
    "pull-5": {
        "left": "-41.66667%"
    },
    "pull-6": {
        "left": "-50%"
    },
    "pull-7": {
        "left": "-58.33333%"
    },
    "pull-8": {
        "left": "-66.66667%"
    },
    "pull-9": {
        "left": "-75%"
    },
    "pull-10": {
        "left": "-83.33333%"
    },
    "pull-11": {
        "left": "-91.66667%"
    },
    "row-top-5": {
        "paddingTop": 5
    },
    "row-top-10": {
        "paddingTop": 10
    },
    "row-top-15": {
        "paddingTop": 15
    },
    "row-top-20": {
        "paddingTop": 20
    },
    "row-top-25": {
        "paddingTop": 25
    },
    "row-top-30": {
        "paddingTop": 30
    },
    "row-top-35": {
        "paddingTop": 35
    },
    "row-top-40": {
        "paddingTop": 40
    },
    "row-top-45": {
        "paddingTop": 45
    },
    "row-top-50": {
        "paddingTop": 50
    },
    "row-top-55": {
        "paddingTop": 55
    },
    "row-top-60": {
        "paddingTop": 60
    },
    "row-bottom-5": {
        "paddingBottom": 5
    },
    "row-bottom-10": {
        "paddingBottom": 10
    },
    "row-bottom-15": {
        "paddingBottom": 15
    },
    "row-bottom-20": {
        "paddingBottom": 20
    },
    "row-bottom-25": {
        "paddingBottom": 25
    },
    "row-bottom-30": {
        "paddingBottom": 30
    },
    "row-bottom-35": {
        "paddingBottom": 35
    },
    "row-bottom-40": {
        "paddingBottom": 40
    },
    "row-bottom-45": {
        "paddingBottom": 45
    },
    "row-bottom-50": {
        "paddingBottom": 50
    },
    "row-bottom-55": {
        "paddingBottom": 55
    },
    "row-bottom-60": {
        "paddingBottom": 60
    },
    "no-margin": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "no-padding": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "no-float": {
        "float": "none"
    },
    "no-background": {
        "background": "transparent"
    },
    "no-border": {
        "border": 0
    },
    "no-select": {
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none",
        "cursor": "default"
    },
    "font-100": {
        "fontWeight": "100"
    },
    "font-200": {
        "fontWeight": "200"
    },
    "font-300": {
        "fontWeight": "300"
    },
    "font-400": {
        "fontWeight": "400"
    },
    "font-500": {
        "fontWeight": "500"
    },
    "font-600": {
        "fontWeight": "600"
    },
    "font-700": {
        "fontWeight": "700"
    },
    "font-800": {
        "fontWeight": "800"
    },
    "font-900": {
        "fontWeight": "900"
    },
    "font-normal": {
        "fontStyle": "normal"
    },
    "font-italic": {
        "fontStyle": "italic"
    },
    "uppercase": {
        "textTransform": "uppercase"
    },
    "lowercase": {
        "textTransform": "lowercase"
    },
    "capitalize": {
        "textTransform": "capitalize"
    },
    "text-left": {
        "textAlign": "left"
    },
    "text-right": {
        "textAlign": "right"
    },
    "text-center": {
        "textAlign": "center"
    },
    "text-justify": {
        "textAlign": "justify"
    },
    "relative": {
        "position": "relative"
    },
    "absolute": {
        "position": "absolute"
    },
    "static": {
        "position": "static"
    },
    "fixed": {
        "position": "fixed"
    },
    "none": {
        "display": "none"
    },
    "block": {
        "display": "block"
    },
    "inline-block": {
        "display": "inline-block"
    },
    "inline": {
        "display": "inline"
    },
    "flex": {
        "display": "flex"
    },
    "flex-row": {
        "WebkitBoxOrient": "horizontal",
        "WebkitBoxDirection": "normal",
        "WebkitFlexDirection": "row",
        "MsFlexDirection": "row",
        "flexDirection": "row"
    },
    "flex-column": {
        "WebkitBoxOrient": "vertical",
        "WebkitBoxDirection": "normal",
        "WebkitFlexDirection": "column",
        "MsFlexDirection": "column",
        "flexDirection": "column"
    },
    "flex-space-around": {
        "WebkitJustifyContent": "space-around",
        "MsFlexPack": "distribute",
        "justifyContent": "space-around"
    },
    "flex-space-between": {
        "WebkitBoxPack": "justify",
        "WebkitJustifyContent": "space-between",
        "MsFlexPack": "justify",
        "justifyContent": "space-between"
    },
    "flex-start": {
        "WebkitBoxPack": "start",
        "WebkitJustifyContent": "flex-start",
        "MsFlexPack": "start",
        "justifyContent": "flex-start"
    },
    "flex-center": {
        "WebkitBoxPack": "center",
        "WebkitJustifyContent": "center",
        "MsFlexPack": "center",
        "justifyContent": "center"
    },
    "flex-end": {
        "WebkitBoxPack": "end",
        "WebkitJustifyContent": "flex-end",
        "MsFlexPack": "end",
        "justifyContent": "flex-end"
    },
    "flex-wrap": {
        "WebkitFlexWrap": "wrap",
        "MsFlexWrap": "wrap",
        "flexWrap": "wrap"
    },
    "flex-nowrap": {
        "WebkitFlexWrap": "nowrap",
        "MsFlexWrap": "nowrap",
        "flexWrap": "nowrap"
    },
    "left": {
        "float": "left"
    },
    "right": {
        "float": "right"
    },
    "center-element": {
        "float": "none",
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "sr": {
        "border": 0,
        "clip": "rect(0 0 0 0)",
        "height": 1,
        "marginTop": -1,
        "marginRight": -1,
        "marginBottom": -1,
        "marginLeft": -1,
        "overflow": "hidden",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "position": "absolute",
        "width": 1
    },
    "list-unstyled": {
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "list-unstyled li": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "list-inline": {
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "list-inline li": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "display": "inline-block"
    },
    "img-fluid": {
        "maxWidth": "100%"
    },
    "img-left": {
        "float": "left",
        "marginRight": 20
    },
    "img-right": {
        "float": "right",
        "marginLeft": 20
    },
    "field-group": {
        "paddingTop": 0.5,
        "paddingBottom": 0.5,
        "overflow": "hidden"
    },
    "field-group label": {
        "paddingTop": 8
    },
    "field": {
        "width": "100%"
    },
    "disabled": {
        "pointerEvents": "none",
        "opacity": 0.5
    },
    "checkbox": {
        "display": "inline-block",
        "position": "relative",
        "marginTop": 0.5,
        "marginBottom": 0.5
    },
    "radio": {
        "display": "inline-block",
        "position": "relative",
        "marginTop": 0.5,
        "marginBottom": 0.5
    },
    "checkbox label": {
        "paddingLeft": 20,
        "paddingTop": 0,
        "display": "inline-block"
    },
    "radio label": {
        "paddingLeft": 20,
        "paddingTop": 0,
        "display": "inline-block"
    },
    "checkbox input[type=\"checkbox\"]": {
        "position": "absolute",
        "top": 4,
        "left": 0
    },
    "checkbox input[type=\"radio\"]": {
        "position": "absolute",
        "top": 4,
        "left": 0
    },
    "radio input[type=\"checkbox\"]": {
        "position": "absolute",
        "top": 4,
        "left": 0
    },
    "radio input[type=\"radio\"]": {
        "position": "absolute",
        "top": 4,
        "left": 0
    },
    "animate": {
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationFillMode": "both",
        "animationFillMode": "both"
    },
    "animate-infinite": {
        "WebkitAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite"
    },
    "fade-in": {
        "WebkitAnimationName": "fadeIn",
        "animationName": "fadeIn"
    },
    "fade-in-down": {
        "WebkitAnimationName": "fadeInDown",
        "animationName": "fadeInDown"
    },
    "fade-in-down-big": {
        "WebkitAnimationName": "fadeInDownBig",
        "animationName": "fadeInDownBig"
    },
    "fade-in-left": {
        "WebkitAnimationName": "fadeInLeft",
        "animationName": "fadeInLeft"
    },
    "fade-in-left-big": {
        "WebkitAnimationName": "fadeInLeftBig",
        "animationName": "fadeInLeftBig"
    },
    "fade-in-right": {
        "WebkitAnimationName": "fadeInRight",
        "animationName": "fadeInRight"
    },
    "fade-in-right-big": {
        "WebkitAnimationName": "fadeInRightBig",
        "animationName": "fadeInRightBig"
    },
    "fade-in-up": {
        "WebkitAnimationName": "fadeInUp",
        "animationName": "fadeInUp"
    },
    "fade-in-up-big": {
        "WebkitAnimationName": "fadeInUpBig",
        "animationName": "fadeInUpBig"
    }
});