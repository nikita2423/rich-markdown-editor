"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const theme_1 = require("../theme");
const __1 = __importDefault(require(".."));
const docSearchResults = [
    {
        title: "Hiring",
        subtitle: "Created by Jane",
        url: "/doc/hiring",
    },
    {
        title: "Product Roadmap",
        subtitle: "Created by Tom",
        url: "/doc/product-roadmap",
    },
    {
        title: "Finances",
        subtitle: "Created by Coley",
        url: "/doc/finances",
    },
    {
        title: "Security",
        subtitle: "Created by Coley",
        url: "/doc/security",
    },
    {
        title: "Super secret stuff",
        subtitle: "Created by Coley",
        url: "/doc/secret-stuff",
    },
    {
        title: "Supero notes",
        subtitle: "Created by Vanessa",
        url: "/doc/supero-notes",
    },
    {
        title: "Meeting notes",
        subtitle: "Created by Rob",
        url: "/doc/meeting-notes",
    },
];
class YoutubeEmbed extends React.Component {
    render() {
        const { attrs } = this.props;
        const videoId = attrs.matches[1];
        return (React.createElement("iframe", { className: this.props.isSelected ? "ProseMirror-selectednode" : "", src: `https://www.youtube.com/embed/${videoId}?modestbranding=1` }));
    }
}
function Example(props) {
    const { body } = document;
    if (body)
        body.style.backgroundColor = props.dark
            ? theme_1.dark.background
            : theme_1.light.background;
    return (React.createElement("div", { style: { padding: "1em 2em" } },
        React.createElement(__1.default, Object.assign({ onCreateLink: (title) => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (title !== "error") {
                            return resolve(`/doc/${encodeURIComponent(title.toLowerCase())}`);
                        }
                        else {
                            reject("500 error");
                        }
                    }, 1500);
                });
            }, onSearchLink: async (term) => {
                console.log("Searched link: ", term);
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(docSearchResults.filter((result) => result.title.toLowerCase().includes(term.toLowerCase())));
                    }, Math.random() * 500);
                });
            }, uploadImage: (file) => {
                console.log("File upload triggered: ", file);
                return new Promise((resolve) => {
                    setTimeout(() => resolve("https://picsum.photos/600/600"), 1500);
                });
            }, uploadFile: (file) => {
                console.log("File upload triggered: ", file);
                return new Promise((resolve) => {
                    setTimeout(() => resolve("https://static.due.work/HO-v6EQZ1/documents/84p04VWklC_JYvBlJliI.xlsx"), 1500);
                });
            }, embeds: [
                {
                    title: "YouTube",
                    keywords: "youtube video tube google",
                    icon: () => (React.createElement("img", { src: "https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_%282017%29.svg", width: 24, height: 24 })),
                    matcher: (url) => {
                        return !!url.match(/(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([a-zA-Z0-9_-]{11})$/i);
                    },
                    component: YoutubeEmbed,
                },
            ] }, props))));
}
exports.default = Example;
//# sourceMappingURL=index.js.map