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
const memoize_1 = __importDefault(require("lodash/memoize"));
const prosemirror_state_1 = require("prosemirror-state");
const prosemirror_dropcursor_1 = require("prosemirror-dropcursor");
const prosemirror_gapcursor_1 = require("prosemirror-gapcursor");
const prosemirror_view_1 = require("prosemirror-view");
const prosemirror_model_1 = require("prosemirror-model");
const prosemirror_inputrules_1 = require("prosemirror-inputrules");
const prosemirror_keymap_1 = require("prosemirror-keymap");
const prosemirror_commands_1 = require("prosemirror-commands");
const prosemirror_utils_1 = require("prosemirror-utils");
const styled_components_1 = __importStar(require("styled-components"));
const theme_1 = require("./theme");
const dictionary_1 = __importDefault(require("./dictionary"));
const Flex_1 = __importDefault(require("./components/Flex"));
const SelectionToolbar_1 = __importDefault(require("./components/SelectionToolbar"));
const BlockMenu_1 = __importDefault(require("./components/BlockMenu"));
const LinkToolbar_1 = __importDefault(require("./components/LinkToolbar"));
const Tooltip_1 = __importDefault(require("./components/Tooltip"));
const EmojiPopup_1 = __importDefault(require("./components/EmojiPopup"));
const ExtensionManager_1 = __importDefault(require("./lib/ExtensionManager"));
const ComponentView_1 = __importDefault(require("./lib/ComponentView"));
const headingToSlug_1 = __importDefault(require("./lib/headingToSlug"));
const Doc_1 = __importDefault(require("./nodes/Doc"));
const Text_1 = __importDefault(require("./nodes/Text"));
const Emoji_1 = __importDefault(require("./nodes/Emoji"));
const Mention_1 = __importDefault(require("./nodes/Mention"));
const Blockquote_1 = __importDefault(require("./nodes/Blockquote"));
const BulletList_1 = __importDefault(require("./nodes/BulletList"));
const CodeBlock_1 = __importDefault(require("./nodes/CodeBlock"));
const CodeFence_1 = __importDefault(require("./nodes/CodeFence"));
const CheckboxList_1 = __importDefault(require("./nodes/CheckboxList"));
const CheckboxItem_1 = __importDefault(require("./nodes/CheckboxItem"));
const Embed_1 = __importDefault(require("./nodes/Embed"));
const HardBreak_1 = __importDefault(require("./nodes/HardBreak"));
const Heading_1 = __importDefault(require("./nodes/Heading"));
const HorizontalRule_1 = __importDefault(require("./nodes/HorizontalRule"));
const Image_1 = __importDefault(require("./nodes/Image"));
const FileDoc_1 = __importDefault(require("./nodes/FileDoc"));
const ListItem_1 = __importDefault(require("./nodes/ListItem"));
const Notice_1 = __importDefault(require("./nodes/Notice"));
const OrderedList_1 = __importDefault(require("./nodes/OrderedList"));
const Paragraph_1 = __importDefault(require("./nodes/Paragraph"));
const Table_1 = __importDefault(require("./nodes/Table"));
const TableCell_1 = __importDefault(require("./nodes/TableCell"));
const TableHeadCell_1 = __importDefault(require("./nodes/TableHeadCell"));
const TableRow_1 = __importDefault(require("./nodes/TableRow"));
const Bold_1 = __importDefault(require("./marks/Bold"));
const Code_1 = __importDefault(require("./marks/Code"));
const Highlight_1 = __importDefault(require("./marks/Highlight"));
const Italic_1 = __importDefault(require("./marks/Italic"));
const Link_1 = __importDefault(require("./marks/Link"));
const Strikethrough_1 = __importDefault(require("./marks/Strikethrough"));
const Placeholder_1 = __importDefault(require("./marks/Placeholder"));
const Underline_1 = __importDefault(require("./marks/Underline"));
const BlockMenuTrigger_1 = __importDefault(require("./plugins/BlockMenuTrigger"));
const History_1 = __importDefault(require("./plugins/History"));
const Keys_1 = __importDefault(require("./plugins/Keys"));
const MaxLength_1 = __importDefault(require("./plugins/MaxLength"));
const Placeholder_2 = __importDefault(require("./plugins/Placeholder"));
const SmartText_1 = __importDefault(require("./plugins/SmartText"));
const TrailingNode_1 = __importDefault(require("./plugins/TrailingNode"));
const MarkdownPaste_1 = __importDefault(require("./plugins/MarkdownPaste"));
const EmojiIconsTrigger_1 = __importDefault(require("./plugins/EmojiIconsTrigger"));
const MentionPlugin_1 = require("./plugins/MentionPlugin");
const helper_1 = require("./helper");
var server_1 = require("./server");
exports.schema = server_1.schema;
exports.parser = server_1.parser;
exports.serializer = server_1.serializer;
exports.renderToHtml = server_1.renderToHtml;
var Extension_1 = require("./lib/Extension");
exports.Extension = Extension_1.default;
exports.theme = theme_1.light;
const HTTP_LINK_REGEX = /\bhttps?:\/\/[\w_\/\.]+/g;
class RichMarkdownEditor extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            isEditorFocused: false,
            selectionMenuOpen: false,
            blockMenuOpen: false,
            linkMenuOpen: false,
            blockMenuSearch: "",
            emojiIconsOpen: false,
        };
        this.getMentionSuggestionsHTML = (items) => {
            return ('<div class="suggestion-item-list">' +
                items
                    .map((i) => {
                    const icon = i.icon;
                    const imageUrl = i.imageUrl;
                    if (imageUrl) {
                        return ('<div class="suggestion-item"><span class="suggestion-item-image"><img src=' +
                            i.imageUrl +
                            " alt=" +
                            i.imageUrl +
                            "/></span>" +
                            i.type +
                            '<span class="suggestion-item-name">(' +
                            i.name +
                            ")</span></div>");
                    }
                    if (icon) {
                        return ('<div class="suggestion-item"><span class="suggestion-item-icon">' +
                            i.icon +
                            "</span>" +
                            i.type +
                            '<span class="suggestion-item-name">(' +
                            i.name +
                            ")</span></div>");
                    }
                })
                    .join("") +
                "</div>");
        };
        this.importMentionPlugin = () => {
            const { mentionUsers } = this.props;
            return MentionPlugin_1.getMentionsPlugin({
                getSuggestions: (type, text, done) => {
                    setTimeout(() => {
                        if (type === "mention") {
                            done(mentionUsers);
                        }
                    }, 0);
                },
                getSuggestionsHTML: (items, type) => {
                    if (type === "mention") {
                        return this.getMentionSuggestionsHTML(items);
                    }
                },
            });
        };
        this.importLinkifyPlugin = () => {
            return new prosemirror_state_1.Plugin({
                props: {
                    transformPasted: (slice) => {
                        return new prosemirror_model_1.Slice(helper_1.linkify(slice.content), slice.openStart, slice.openEnd);
                    },
                },
            });
        };
        this.value = () => {
            if (this.serializer) {
                return this.serializer.serialize(this.view.state.doc);
            }
            return "";
        };
        this.handleChange = () => {
            if (!this.props.onChange)
                return;
            this.props.onChange(() => {
                return {
                    markdownText: this.value(),
                    json: this.view.state.doc,
                };
            });
        };
        this.handleSave = () => {
            const { onSave } = this.props;
            if (onSave) {
                onSave({ done: false });
            }
        };
        this.handleSaveAndExit = () => {
            const { onSave } = this.props;
            if (onSave) {
                onSave({ done: true });
            }
        };
        this.handleEditorBlur = () => {
            this.setState({ isEditorFocused: false });
        };
        this.handleEditorFocus = () => {
            this.setState({ isEditorFocused: true });
        };
        this.handleOpenSelectionMenu = () => {
            this.setState({ blockMenuOpen: false, selectionMenuOpen: true });
        };
        this.handleCloseSelectionMenu = () => {
            this.setState({ selectionMenuOpen: false });
        };
        this.handleOpenLinkMenu = () => {
            this.setState({ blockMenuOpen: false, linkMenuOpen: true });
        };
        this.handleCloseLinkMenu = () => {
            this.setState({ linkMenuOpen: false });
        };
        this.handleOpenBlockMenu = (search) => {
            this.setState({ blockMenuOpen: true, blockMenuSearch: search });
        };
        this.handleCloseBlockMenu = () => {
            if (!this.state.blockMenuOpen)
                return;
            this.setState({ blockMenuOpen: false });
        };
        this.handleOpenEmojiIcons = () => {
            this.setState({
                emojiIconsOpen: true,
            });
        };
        this.handleCloseEmojiIcons = () => {
            if (!this.state.emojiIconsOpen)
                return;
            this.setState({
                emojiIconsOpen: false,
            });
        };
        this.handleSelectRow = (index, state) => {
            this.view.dispatch(prosemirror_utils_1.selectRow(index)(state.tr));
        };
        this.handleSelectColumn = (index, state) => {
            this.view.dispatch(prosemirror_utils_1.selectColumn(index)(state.tr));
        };
        this.handleSelectTable = (state) => {
            this.view.dispatch(prosemirror_utils_1.selectTable(state.tr));
        };
        this.focusAtStart = () => {
            const selection = prosemirror_state_1.Selection.atStart(this.view.state.doc);
            const transaction = this.view.state.tr.setSelection(selection);
            this.view.dispatch(transaction);
            this.view.focus();
        };
        this.focusAtEnd = () => {
            const selection = prosemirror_state_1.Selection.atEnd(this.view.state.doc);
            const transaction = this.view.state.tr.setSelection(selection);
            this.view.dispatch(transaction);
            this.view.focus();
        };
        this.getHeadings = () => {
            const headings = [];
            const previouslySeen = {};
            this.view.state.doc.forEach((node) => {
                if (node.type.name === "heading") {
                    const slug = headingToSlug_1.default(node);
                    let id = slug;
                    if (previouslySeen[slug] > 0) {
                        id = headingToSlug_1.default(node, previouslySeen[slug]);
                    }
                    previouslySeen[slug] =
                        previouslySeen[slug] !== undefined ? previouslySeen[slug] + 1 : 1;
                    headings.push({
                        title: node.textContent,
                        level: node.attrs.level,
                        id,
                    });
                }
            });
            return headings;
        };
        this.theme = () => {
            return this.props.theme || (this.props.dark ? theme_1.dark : theme_1.light);
        };
        this.dictionary = memoize_1.default((providedDictionary) => {
            return Object.assign(Object.assign({}, dictionary_1.default), providedDictionary);
        });
        this.getEmoji = () => {
            const { emojiData } = this.props;
            const emojiList = emojiData && emojiData.length
                ? emojiData
                : [
                    "👍",
                    "😀",
                    "😃",
                    "😄",
                    "😁",
                    "😆",
                    "😅",
                    "😂",
                    "🤣",
                    "😊",
                    "😇",
                    "🙂",
                    "🙃",
                    "😉",
                    "😌",
                    "😍",
                    "🥰",
                    "😘",
                    "😗",
                    "😙",
                    "😚",
                    "😋",
                    "😛",
                    "😝",
                    "😜",
                    "🤪",
                    "🤨",
                    "🧐",
                    "🤓",
                    "😎",
                    "🤩",
                    "🥳",
                    "😏",
                    "😒",
                    "😞",
                    "😔",
                    "😟",
                    "😕",
                    "🙁",
                    "😣",
                    "😖",
                    "😫",
                    "😩",
                    "🥺",
                    "😢",
                    "😭",
                    "😤",
                    "😠",
                    "😡",
                    "🤬",
                    "🤯",
                    "😳",
                    "🥵",
                    "🥶",
                    "😱",
                    "😨",
                    "😰",
                    "😥",
                    "😓",
                    "🤗",
                    "🤔",
                    "🤭",
                    "🤫",
                    "🤥",
                    "😶",
                    "😐",
                    "😑",
                    "😬",
                    "🙄",
                    "😯",
                    "😦",
                    "😧",
                    "😮",
                    "😲",
                    "😴",
                    "🤤",
                    "😪",
                    "😵",
                    "🤐",
                    "🥴",
                ];
            return emojiList;
        };
        this.render = () => {
            const { readOnly, readOnlyWriteCheckboxes, style, tooltip, className, onKeyDown, hideUpload, } = this.props;
            const dictionary = this.dictionary(this.props.dictionary);
            return (React.createElement(Flex_1.default, { onKeyDown: onKeyDown, style: style, className: className, align: "flex-start", justify: "center", column: true },
                React.createElement(styled_components_1.ThemeProvider, { theme: this.theme() },
                    React.createElement(React.Fragment, null,
                        React.createElement(StyledEditor, { readOnly: readOnly, readOnlyWriteCheckboxes: readOnlyWriteCheckboxes, ref: (ref) => (this.element = ref) }),
                        !readOnly && this.view && (React.createElement(React.Fragment, null,
                            React.createElement(SelectionToolbar_1.default, { view: this.view, dictionary: dictionary, commands: this.commands, isTemplate: this.props.template === true, onOpen: this.handleOpenSelectionMenu, onClose: this.handleCloseSelectionMenu, onSearchLink: this.props.onSearchLink, onClickLink: this.props.onClickLink, onCreateLink: this.props.onCreateLink, tooltip: tooltip }),
                            React.createElement(LinkToolbar_1.default, { view: this.view, dictionary: dictionary, isActive: this.state.linkMenuOpen, onCreateLink: this.props.onCreateLink, onSearchLink: this.props.onSearchLink, onClickLink: this.props.onClickLink, onShowToast: this.props.onShowToast, onClose: this.handleCloseLinkMenu, tooltip: tooltip }),
                            React.createElement(BlockMenu_1.default, { view: this.view, commands: this.commands, dictionary: dictionary, isActive: this.state.blockMenuOpen, search: this.state.blockMenuSearch, onClose: this.handleCloseBlockMenu, uploadImage: this.props.uploadImage, uploadFile: this.props.uploadFile, onLinkToolbarOpen: this.handleOpenLinkMenu, onImageUploadStart: this.props.onImageUploadStart, onImageUploadStop: this.props.onImageUploadStop, onShowToast: this.props.onShowToast, embeds: this.props.embeds, onOpenEmoji: this.handleOpenEmojiIcons, hideUpload: hideUpload }),
                            React.createElement(EmojiPopup_1.default, { view: this.view, isActive: this.state.emojiIconsOpen, onClose: this.handleCloseEmojiIcons, commands: this.commands, dictionary: dictionary, emojiData: this.getEmoji() })))))));
        };
    }
    componentDidMount() {
        this.init();
        if (this.props.scrollTo) {
            this.scrollToAnchor(this.props.scrollTo);
        }
        if (this.props.readOnly)
            return;
        if (this.props.autoFocus) {
            this.focusAtEnd();
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.value && prevProps.value !== this.props.value) {
            const newState = this.createState(this.props.value);
            this.view.updateState(newState);
        }
        if (prevProps.readOnly !== this.props.readOnly) {
            this.view.update(Object.assign(Object.assign({}, this.view.props), { editable: () => !this.props.readOnly }));
        }
        if (this.props.scrollTo && this.props.scrollTo !== prevProps.scrollTo) {
            this.scrollToAnchor(this.props.scrollTo);
        }
        if (prevProps.readOnly && !this.props.readOnly && this.props.autoFocus) {
            this.focusAtEnd();
        }
        if (!this.isBlurred &&
            !this.state.isEditorFocused &&
            !this.state.blockMenuOpen &&
            !this.state.linkMenuOpen &&
            !this.state.selectionMenuOpen) {
            this.isBlurred = true;
            if (this.props.onBlur) {
                this.props.onBlur();
            }
        }
        if (this.isBlurred &&
            (this.state.isEditorFocused ||
                this.state.blockMenuOpen ||
                this.state.linkMenuOpen ||
                this.state.selectionMenuOpen)) {
            this.isBlurred = false;
            if (this.props.onFocus) {
                this.props.onFocus();
            }
        }
    }
    init() {
        this.extensions = this.createExtensions();
        this.nodes = this.createNodes();
        this.marks = this.createMarks();
        this.schema = this.createSchema();
        this.plugins = this.createPlugins();
        this.keymaps = this.createKeymaps();
        this.serializer = this.createSerializer();
        this.parser = this.createParser();
        this.inputRules = this.createInputRules();
        this.nodeViews = this.createNodeViews();
        this.view = this.createView();
        this.commands = this.createCommands();
    }
    createExtensions() {
        const dictionary = this.dictionary(this.props.dictionary);
        return new ExtensionManager_1.default([
            new Doc_1.default(),
            new Text_1.default(),
            new Emoji_1.default(),
            new HardBreak_1.default(),
            new Paragraph_1.default(),
            new Blockquote_1.default(),
            new Mention_1.default(),
            new CodeBlock_1.default({
                dictionary,
                onShowToast: this.props.onShowToast,
            }),
            new CodeFence_1.default({
                dictionary,
                onShowToast: this.props.onShowToast,
            }),
            new CheckboxList_1.default(),
            new CheckboxItem_1.default(),
            new BulletList_1.default(),
            new Embed_1.default(),
            new ListItem_1.default(),
            new Notice_1.default({
                dictionary,
            }),
            new Heading_1.default({
                dictionary,
                onShowToast: this.props.onShowToast,
                offset: this.props.headingsOffset,
            }),
            new HorizontalRule_1.default(),
            new Image_1.default({
                dictionary,
                uploadImage: this.props.uploadImage,
                onImageUploadStart: this.props.onImageUploadStart,
                onImageUploadStop: this.props.onImageUploadStop,
                onShowToast: this.props.onShowToast,
            }),
            new FileDoc_1.default({
                dictionary,
                uploadFile: this.props.uploadFile,
                onFileUploadStart: this.props.onFileUploadStart,
                onFileUploadStop: this.props.onFileUploadStop,
                onShowToast: this.props.onShowToast,
                fileComponent: this.props.fileComponent,
            }),
            new Table_1.default(),
            new TableCell_1.default({
                onSelectTable: this.handleSelectTable,
                onSelectRow: this.handleSelectRow,
            }),
            new TableHeadCell_1.default({
                onSelectColumn: this.handleSelectColumn,
            }),
            new TableRow_1.default(),
            new Bold_1.default(),
            new Code_1.default(),
            new Highlight_1.default(),
            new Italic_1.default(),
            new Placeholder_1.default(),
            new Underline_1.default(),
            new Link_1.default({
                onKeyboardShortcut: this.handleOpenLinkMenu,
                onClickLink: this.props.onClickLink,
                onClickHashtag: this.props.onClickHashtag,
                onHoverLink: this.props.onHoverLink,
            }),
            new Strikethrough_1.default(),
            new OrderedList_1.default(),
            new History_1.default(),
            new SmartText_1.default(),
            new TrailingNode_1.default(),
            new MarkdownPaste_1.default(),
            new Keys_1.default({
                onBlur: this.handleEditorBlur,
                onFocus: this.handleEditorFocus,
                onSave: this.handleSave,
                onSaveAndExit: this.handleSaveAndExit,
                onCancel: this.props.onCancel,
            }),
            new BlockMenuTrigger_1.default({
                dictionary,
                onOpen: this.handleOpenBlockMenu,
                onClose: this.handleCloseBlockMenu,
            }),
            new Placeholder_2.default({
                placeholder: this.props.placeholder,
            }),
            new EmojiIconsTrigger_1.default({
                onOpen: this.handleOpenEmojiIcons,
                onClose: this.handleCloseEmojiIcons,
            }),
            new MaxLength_1.default({
                maxLength: this.props.maxLength,
            }),
            ...this.props.extensions,
        ], this);
    }
    createPlugins() {
        return this.extensions.plugins;
    }
    createKeymaps() {
        return this.extensions.keymaps({
            schema: this.schema,
        });
    }
    createInputRules() {
        return this.extensions.inputRules({
            schema: this.schema,
        });
    }
    createNodeViews() {
        return this.extensions.extensions
            .filter((extension) => extension.component)
            .reduce((nodeViews, extension) => {
            const nodeView = (node, view, getPos, decorations) => {
                return new ComponentView_1.default(extension.component, {
                    editor: this,
                    extension,
                    node,
                    view,
                    getPos,
                    decorations,
                });
            };
            return Object.assign(Object.assign({}, nodeViews), { [extension.name]: nodeView });
        }, {});
    }
    createCommands() {
        return this.extensions.commands({
            schema: this.schema,
            view: this.view,
        });
    }
    createNodes() {
        return this.extensions.nodes;
    }
    createMarks() {
        return this.extensions.marks;
    }
    createSchema() {
        return new prosemirror_model_1.Schema({
            nodes: this.nodes,
            marks: this.marks,
        });
    }
    createSerializer() {
        return this.extensions.serializer();
    }
    createParser() {
        return this.extensions.parser({
            schema: this.schema,
        });
    }
    createState(value) {
        const doc = this.createDocument(value || this.props.defaultValue);
        if (this.plugins) {
            this.plugins.unshift(this.importLinkifyPlugin());
            this.plugins.unshift(this.importMentionPlugin());
        }
        return prosemirror_state_1.EditorState.create({
            schema: this.schema,
            doc,
            plugins: [
                ...this.plugins,
                ...this.keymaps,
                prosemirror_dropcursor_1.dropCursor({ color: this.theme().cursor }),
                prosemirror_gapcursor_1.gapCursor(),
                prosemirror_inputrules_1.inputRules({
                    rules: this.inputRules,
                }),
                prosemirror_keymap_1.keymap(prosemirror_commands_1.baseKeymap),
            ],
        });
    }
    createDocument(content) {
        return this.parser.parse(content);
    }
    createView() {
        if (!this.element) {
            throw new Error("createView called before ref available");
        }
        const isEditingCheckbox = (tr) => {
            return tr.steps.some((step) => {
                var _a, _b, _c;
                return ((_c = (_b = (_a = step.slice) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.firstChild) === null || _c === void 0 ? void 0 : _c.type.name) ===
                    this.schema.nodes.checkbox_item.name;
            });
        };
        const view = new prosemirror_view_1.EditorView(this.element, {
            state: this.createState(),
            editable: () => !this.props.readOnly,
            nodeViews: this.nodeViews,
            handleDOMEvents: this.props.handleDOMEvents,
            dispatchTransaction: (transaction) => {
                const { state, transactions } = this.view.state.applyTransaction(transaction);
                this.view.updateState(state);
                if (transactions.some((tr) => tr.docChanged) &&
                    (!this.props.readOnly ||
                        (this.props.readOnlyWriteCheckboxes &&
                            transactions.some(isEditingCheckbox)))) {
                    this.handleChange();
                }
                this.forceUpdate();
            },
        });
        view.dom.setAttribute("role", "textbox");
        return view;
    }
    scrollToAnchor(hash) {
        if (!hash)
            return;
        try {
            const element = document.querySelector(hash);
            if (element)
                element.scrollIntoView({ behavior: "smooth" });
        }
        catch (err) {
            console.warn(`Attempted to scroll to invalid hash: ${hash}`, err);
        }
    }
}
RichMarkdownEditor.defaultProps = {
    defaultValue: "",
    placeholder: "Type / to browse options",
    onImageUploadStart: () => {
    },
    onImageUploadStop: () => {
    },
    onClickLink: (href) => {
        window.open(href, "_blank");
    },
    embeds: [],
    extensions: [],
    tooltip: Tooltip_1.default,
    mentionUsers: [],
};
const StyledMention = styled_components_1.default("div") `
  z-index: 200;
  background: white;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 5px;
  padding: 5px;

  .suggestion-item {
    marginbottom: 5px;
  }
`;
const StyledEditor = styled_components_1.default("div") `
  background: ${(props) => props.theme.background};
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: ${(props) => props.theme.fontWeight};
  line-height: 1.7em;
  width: 100%;

  .empty-placeholder {
    padding-top: 10px;
  }

  .ProseMirror {
    position: relative;
    outline: none;
    word-wrap: break-word;
    white-space: pre-wrap;
    white-space: break-spaces;
    -webkit-font-variant-ligatures: none;
    font-variant-ligatures: none;
    font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
  }

  pre {
    white-space: pre-wrap;
  }

  li {
    position: relative;
  }

  .image {
    text-align: center;
    max-width: 100%;
    clear: both;
    background: #f9f9f9;
    border-radius: 10px;
    padding: 30px;
    margin-top: 15px;

    img {
      pointer-events: ${(props) => (props.readOnly ? "initial" : "none")};
      display: inline-block;
      max-width: 100%;
      max-height: 75vh;
    }
  }

  .image.placeholder {
    position: relative;
    background: ${(props) => props.theme.background};
    margin-bottom: calc(28px + 1.2em);

    img {
      opacity: 0.5;
    }
  }

  .image-right-50 {
    float: right;
    width: 50%;
    margin-left: 2em;
    margin-bottom: 1em;
    clear: initial;
  }

  .image-left-50 {
    float: left;
    width: 50%;
    margin-right: 2em;
    margin-bottom: 1em;
    clear: initial;
  }

  .ProseMirror-hideselection *::selection {
    background: transparent;
  }
  .ProseMirror-hideselection *::-moz-selection {
    background: transparent;
  }
  .ProseMirror-hideselection {
    caret-color: transparent;
  }

  .ProseMirror-selectednode {
    outline: 2px solid
      ${(props) => (props.readOnly ? "transparent" : props.theme.selected)};
  }

  /* Make sure li selections wrap around markers */

  li.ProseMirror-selectednode {
    outline: none;
  }

  li.ProseMirror-selectednode:after {
    content: "";
    position: absolute;
    left: -32px;
    right: -2px;
    top: -2px;
    bottom: -2px;
    border: 2px solid ${(props) => props.theme.selected};
    pointer-events: none;
  }

  .ProseMirror[contenteditable="false"] {
    .caption {
      pointer-events: none;
    }
    .caption:empty {
      visibility: hidden;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1em 0 0.5em;
    font-weight: 500;
    cursor: default;

    &:not(.placeholder):before {
      display: ${(props) => (props.readOnly ? "none" : "inline-block")};
      font-family: ${(props) => props.theme.fontFamilyMono};
      color: ${(props) => props.theme.textSecondary};
      font-size: 13px;
      line-height: 0;
      margin-left: -24px;
      width: 24px;
    }

    &:hover {
      .heading-anchor {
        opacity: 1;
      }
    }
  }
  .heading-content {
    &:before {
      content: "​";
      display: inline;
    }
  }
  .heading-name {
    color: ${(props) => props.theme.text};

    &:hover {
      text-decoration: none;
    }
  }

  a:first-child {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 0;
    }
  }

  h1:not(.placeholder):before {
    content: "H1";
  }
  h2:not(.placeholder):before {
    content: "H2";
  }
  h3:not(.placeholder):before {
    content: "H3";
  }
  h4:not(.placeholder):before {
    content: "H4";
  }
  h5:not(.placeholder):before {
    content: "H5";
  }
  h6:not(.placeholder):before {
    content: "H6";
  }

  .with-emoji {
    margin-left: -1em;
  }

  .heading-anchor {
    opacity: 0;
    display: ${(props) => (props.readOnly ? "inline-block" : "none")};
    color: ${(props) => props.theme.textSecondary};
    cursor: pointer;
    background: none;
    border: 0;
    outline: none;
    padding: 2px 12px 2px 4px;
    margin: 0;
    transition: opacity 100ms ease-in-out;
    font-family: ${(props) => props.theme.fontFamilyMono};
    font-size: 22px;
    line-height: 0;
    margin-left: -24px;
    width: 24px;

    &:focus,
    &:hover {
      color: ${(props) => props.theme.text};
    }
  }

  .placeholder {
    &:before {
      display: block;
      content: ${(props) => (props.readOnly ? "" : "attr(data-empty-text)")};
      pointer-events: none;
      height: 0;
      color: ${(props) => props.theme.placeholder};
    }
  }

  @media print {
    .placeholder {
      display: none;
    }
  }

  .notice-block {
    display: flex;
    align-items: center;
    background: ${(props) => props.theme.noticeInfoBackground};
    color: ${(props) => props.theme.noticeInfoText};
    border-radius: 4px;
    padding: 15px 20px;
    margin: 8px 0;
    border: 1px solid;
    border-color: ${(props) => props.theme.noticeInfoStroke};
    border-left-color: ${(props) => props.theme.noticeInfoText};
    border-left-width: 3px;

    a {
      color: ${(props) => props.theme.noticeInfoText};
    }

    a:not(.heading-name) {
      text-decoration: underline;
    }
    p {
      margin: 0 !important;
    }
  }

  .notice-block .content {
    flex-grow: 1;
  }

  .notice-block .icon {
    width: 24px;
    height: 24px;
    align-self: flex-start;
    margin-right: 4px;
    position: relative;
    top: 2px;
  }

  .notice-block.tip {
    background: ${(props) => props.theme.noticeTipBackground};
    color: ${(props) => props.theme.noticeTipText};
    border-color: ${(props) => props.theme.noticeTipStroke};
    border-left-color: ${(props) => props.theme.noticeTipText};

    a {
      color: ${(props) => props.theme.noticeTipText};
    }
  }

  .notice-block.warning {
    background: ${(props) => props.theme.noticeWarningBackground};
    color: ${(props) => props.theme.noticeWarningText};
    border-color: ${(props) => props.theme.noticeWarningStroke};
    border-left-color: ${(props) => props.theme.noticeWarningText};

    a {
      color: ${(props) => props.theme.noticeWarningText};
    }
  }

  blockquote {
    margin: 0;
    padding-left: 10px;
    overflow: hidden;
    position: relative;
    margin-top: 15px;
    margin-bottom: 5px;

    &:before {
      content: "";
      display: inline-block;
      width: 3px;
      border-radius: 1px;
      position: absolute;
      margin-left: -16px;
      top: 0;
      bottom: 0;
      background: ${(props) => props.theme.quote};
    }
    p {
      margin: 0 0 0 7px !important;
    }
  }

  b,
  strong {
    font-weight: 500;
  }

  .template-placeholder {
    color: ${(props) => props.theme.placeholder};
    border-bottom: 1px dotted ${(props) => props.theme.placeholder};
    border-radius: 2px;
    cursor: text;

    &:hover {
      border-bottom: 1px dotted
        ${(props) => props.readOnly ? props.theme.placeholder : props.theme.textSecondary};
    }
  }

  p {
    font-family: Roboto;
    line-height: 1.75;
  }

  a {
    color: ${(props) => props.theme.link};
  }

  a:hover {
    text-decoration: ${(props) => (props.readOnly ? "underline" : "none")};
  }

  ul,
  ol {
    margin: 0 0.1em 0 -26px;
    padding: 0 0 0 44px;

    ul,
    ol {
      margin-right: -22px;
    }
  }

  ol ol {
    list-style: lower-alpha;
  }

  ol ol ol {
    list-style: lower-roman;
  }

  ul.checkbox_list {
    list-style: none;
    padding: 0;
    margin: 0 0 0 -24px;
  }

  ul li,
  ol li {
    position: relative;
    white-space: initial;

    p {
      white-space: pre-wrap;
    }

    > div {
      width: 100%;
    }
  }

  ul.checkbox_list li {
    display: flex;
    padding-left: 24px;
  }

  ul.checkbox_list li.checked > div > p {
    color: ${(props) => props.theme.textSecondary};
    text-decoration: line-through;
  }

  ul li::before,
  ol li::before {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iOCIgeT0iNyIgd2lkdGg9IjMiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9IiM0RTVDNkUiLz4KPHJlY3QgeD0iOCIgeT0iMTEiIHdpZHRoPSIzIiBoZWlnaHQ9IjIiIHJ4PSIxIiBmaWxsPSIjNEU1QzZFIi8+CjxyZWN0IHg9IjgiIHk9IjE1IiB3aWR0aD0iMyIgaGVpZ2h0PSIyIiByeD0iMSIgZmlsbD0iIzRFNUM2RSIvPgo8cmVjdCB4PSIxMyIgeT0iNyIgd2lkdGg9IjMiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9IiM0RTVDNkUiLz4KPHJlY3QgeD0iMTMiIHk9IjExIiB3aWR0aD0iMyIgaGVpZ2h0PSIyIiByeD0iMSIgZmlsbD0iIzRFNUM2RSIvPgo8cmVjdCB4PSIxMyIgeT0iMTUiIHdpZHRoPSIzIiBoZWlnaHQ9IjIiIHJ4PSIxIiBmaWxsPSIjNEU1QzZFIi8+Cjwvc3ZnPgo=");
    content: "";
    display: ${(props) => (props.readOnly ? "none" : "inline-block")};
    cursor: move;
    width: 24px;
    height: 24px;
    position: absolute;
    left: -40px;
    top: 2px;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }

  ul > li.hovering::before,
  ol li.hovering::before {
    opacity: 0.5;
  }

  ul li.ProseMirror-selectednode::after,
  ol li.ProseMirror-selectednode::after {
    display: none;
  }

  ul.checkbox_list li::before {
    left: 0;
  }

  ul.checkbox_list li input {
    pointer-events: ${(props) => props.readOnly && !props.readOnlyWriteCheckboxes ? "none" : "initial"};
    opacity: ${(props) => props.readOnly && !props.readOnlyWriteCheckboxes ? 0.75 : 1};
    margin: 0.5em 0.5em 0 0;
    width: 14px;
    height: 14px;
    border-radius: 14px;
  }

  li p:first-child {
    word-break: break-word;
    margin: 0.1em 0 0 0;
  }

  hr {
    position: relative;
    height: 1em;
    border: 0;
  }

  hr:before {
    content: "";
    display: block;
    position: absolute;
    border-top: 1px solid ${(props) => props.theme.horizontalRule};
    top: 0.5em;
    left: 0;
    right: 0;
  }

  hr.page-break {
    page-break-after: always;
  }

  hr.page-break:before {
    border-top: 1px dashed ${(props) => props.theme.horizontalRule};
  }

  code {
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.codeBorder};
    padding: 3px 4px;
    font-family: ${(props) => props.theme.fontFamilyMono};
    font-size: 85%;
  }

  mark {
    border-radius: 1px;
    color: ${(props) => props.theme.textHighlightForeground};

    a {
      color: ${(props) => props.theme.textHighlightForeground};
    }
  }

  .code-block,
  .notice-block {
    position: relative;

    select,
    button {
      background: ${(props) => props.theme.blockToolbarBackground};
      color: ${(props) => props.theme.blockToolbarItem};
      border-width: 1px;
      font-size: 13px;
      display: none;
      position: absolute;
      border-radius: 4px;
      padding: 2px;
      z-index: 1;
      top: 4px;
      right: 4px;
    }

    button {
      padding: 2px 4px;
    }

    &:hover {
      select {
        display: ${(props) => (props.readOnly ? "none" : "inline")};
      }

      button {
        display: ${(props) => (props.readOnly ? "inline" : "none")};
      }
    }

    select:focus,
    select:active {
      display: inline;
    }
  }

  pre {
    display: block;
    overflow-x: auto;
    padding: 0.75em 1em;
    line-height: 1.4em;
    position: relative;
    background: ${(props) => props.theme.codeBackground};
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.codeBorder};

    -webkit-font-smoothing: initial;
    font-family: ${(props) => props.theme.fontFamilyMono};
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    color: ${(props) => props.theme.code};
    margin: 0;

    code {
      background: none;
      padding: 0;
      border: 0;
    }

    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #fff;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${(props) => props.theme.codeComment};
  }

  .token.punctuation {
    color: ${(props) => props.theme.codePunctuation};
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.operator,
  .token.boolean,
  .token.number {
    color: ${(props) => props.theme.codeNumber};
  }

  .token.property {
    color: ${(props) => props.theme.codeProperty};
  }

  .token.tag {
    color: ${(props) => props.theme.codeTag};
  }

  .token.string {
    color: ${(props) => props.theme.codeString};
  }

  .token.selector {
    color: ${(props) => props.theme.codeSelector};
  }

  .token.attr-name {
    color: ${(props) => props.theme.codeAttr};
  }

  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: ${(props) => props.theme.codeEntity};
  }

  .token.attr-value,
  .token.keyword,
  .token.control,
  .token.directive,
  .token.unit {
    color: ${(props) => props.theme.codeKeyword};
  }

  .token.function {
    color: ${(props) => props.theme.codeFunction};
  }

  .token.statement,
  .token.regex,
  .token.atrule {
    color: ${(props) => props.theme.codeStatement};
  }

  .token.placeholder,
  .token.variable {
    color: ${(props) => props.theme.codePlaceholder};
  }

  .token.deleted {
    text-decoration: line-through;
  }

  .token.inserted {
    border-bottom: 1px dotted ${(props) => props.theme.codeInserted};
    text-decoration: none;
  }

  .token.italic {
    font-style: italic;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.important {
    color: ${(props) => props.theme.codeImportant};
  }

  .token.entity {
    cursor: help;
  }
  p {
    margin-bottom: 0px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 4px;
    margin-top: 1em;
    box-sizing: border-box;

    * {
      box-sizing: border-box;
    }

    tr {
      position: relative;
      border-bottom: 1px solid ${(props) => props.theme.tableDivider};
    }

    th {
      background: ${(props) => props.theme.tableHeaderBackground};
    }

    td,
    th {
      position: relative;
      vertical-align: top;
      border: 1px solid ${(props) => props.theme.tableDivider};
      position: relative;
      padding: 4px 8px;
      text-align: left;
      min-width: 100px;
    }

    .selectedCell {
      background: ${(props) => props.readOnly ? "inherit" : props.theme.tableSelectedBackground};

      /* fixes Firefox background color painting over border:
       * https://bugzilla.mozilla.org/show_bug.cgi?id=688556 */
      background-clip: padding-box;
    }

    .grip-column {
      /* usage of ::after for all of the table grips works around a bug in
       * prosemirror-tables that causes Safari to hang when selecting a cell
       * in an empty table:
       * https://github.com/ProseMirror/prosemirror/issues/947 */
      &::after {
        content: "";
        cursor: pointer;
        position: absolute;
        top: -16px;
        left: 0;
        width: 100%;
        height: 12px;
        background: ${(props) => props.theme.tableDivider};
        border-bottom: 3px solid ${(props) => props.theme.background};
        display: ${(props) => (props.readOnly ? "none" : "block")};
      }

      &:hover::after {
        background: ${(props) => props.theme.text};
      }
      &.first::after {
        border-top-left-radius: 3px;
      }
      &.last::after {
        border-top-right-radius: 3px;
      }
      &.selected::after {
        background: ${(props) => props.theme.tableSelected};
      }
    }

    .grip-row {
      &::after {
        content: "";
        cursor: pointer;
        position: absolute;
        left: -16px;
        top: 0;
        height: 100%;
        width: 12px;
        background: ${(props) => props.theme.tableDivider};
        border-right: 3px solid ${(props) => props.theme.background};
        display: ${(props) => (props.readOnly ? "none" : "block")};
      }

      &:hover::after {
        background: ${(props) => props.theme.text};
      }
      &.first::after {
        border-top-left-radius: 3px;
      }
      &.last::after {
        border-bottom-left-radius: 3px;
      }
      &.selected::after {
        background: ${(props) => props.theme.tableSelected};
      }
    }

    .grip-table {
      &::after {
        content: "";
        cursor: pointer;
        background: ${(props) => props.theme.tableDivider};
        width: 13px;
        height: 13px;
        border-radius: 13px;
        border: 2px solid ${(props) => props.theme.background};
        position: absolute;
        top: -18px;
        left: -18px;
        display: ${(props) => (props.readOnly ? "none" : "block")};
      }

      &:hover::after {
        background: ${(props) => props.theme.text};
      }
      &.selected::after {
        background: ${(props) => props.theme.tableSelected};
      }
    }
  }

  .scrollable-wrapper {
    position: relative;
    margin: 0.5em 0px;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;

    &:hover {
      scrollbar-color: ${(props) => props.theme.scrollbarThumb}
        ${(props) => props.theme.scrollbarBackground};
    }

    & ::-webkit-scrollbar {
      height: 14px;
      background-color: transparent;
    }

    &:hover ::-webkit-scrollbar {
      background-color: ${(props) => props.theme.scrollbarBackground};
    }

    & ::-webkit-scrollbar-thumb {
      background-color: transparent;
      border: 3px solid transparent;
      border-radius: 7px;
    }

    &:hover ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.scrollbarThumb};
      border-color: ${(props) => props.theme.scrollbarBackground};
    }
  }

  .scrollable {
    overflow-y: hidden;
    overflow-x: auto;
    padding-left: 1em;
    margin-left: -1em;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    transition: border 250ms ease-in-out 0s;
  }

  .scrollable-shadow {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -1em;
    width: 16px;
    transition: box-shadow 250ms ease-in-out;
    border: 0px solid transparent;
    border-left-width: 1em;
    pointer-events: none;

    &.left {
      box-shadow: 16px 0 16px -16px inset rgba(0, 0, 0, 0.25);
      border-left: 1em solid ${(props) => props.theme.background};
    }

    &.right {
      right: 0;
      left: auto;
      box-shadow: -16px 0 16px -16px inset rgba(0, 0, 0, 0.25);
    }
  }

  .block-menu-trigger {
    display: ${(props) => (props.readOnly ? "none" : "inline")};
    height: 1em;
    color: ${(props) => props.theme.textSecondary};
    background: none;
    position: absolute;
    transition: color 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
      transform 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    outline: none;
    border: 0;
    line-height: 1.2em;
    margin-left: -28px;
    padding-top: 5px;

    &:hover,
    &:focus {
      cursor: pointer;
      transform: scale(1.1);
      color: ${(props) => props.theme.text};
    }
  }

  @media print {
    .block-menu-trigger {
      display: none;
    }

    .page-break {
      opacity: 0;
    }
  }

  .ProseMirror-gapcursor {
    display: none;
    pointer-events: none;
    position: absolute;
  }

  .ProseMirror-gapcursor:after {
    content: "";
    display: block;
    position: absolute;
    top: -2px;
    width: 20px;
    border-top: 1px solid ${(props) => props.theme.cursor};
    animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
  }

  @keyframes ProseMirror-cursor-blink {
    to {
      visibility: hidden;
    }
  }

  .ProseMirror-focused .ProseMirror-gapcursor {
    display: block;
  }

  @media print {
    em,
    blockquote {
      font-family: "SF Pro Text", ${(props) => props.theme.fontFamily};
    }
  }
  .suggestion-item-active {
    background: #08c;
    color: #fff;
  }

  .mention {
    color: #08c;
  }

  .prosemirror-tag-node {
    color: #08c;
  }

  .prosemirror-suggestion {
    background: rgba(0, 0, 0, 0.05);
    border: 1px solid #999;
  }

  .suggestion-item-list {
    background: #fff;
    border: 1px solid #999;
  }

  .suggestion-item {
    padding: 5px;
  }
  .suggestion-item:before {
    border-top: 1px solid;
  }
`;
exports.default = RichMarkdownEditor;
//# sourceMappingURL=index.js.map