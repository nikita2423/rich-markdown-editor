"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prosemirror_state_1 = require("prosemirror-state");
const prosemirror_view_1 = require("prosemirror-view");
const uploadFilePlaceholder = new prosemirror_state_1.Plugin({
    state: {
        init() {
            return prosemirror_view_1.DecorationSet.empty;
        },
        apply(tr, set) {
            set = set.map(tr.mapping, tr.doc);
            const action = tr.getMeta(this);
            if (action && action.add) {
                const element = document.createElement("div");
                element.className = "file placeholder";
                const a = document.createElement("a");
                a.href = URL.createObjectURL(action.add.file);
                element.appendChild(a);
                const deco = prosemirror_view_1.Decoration.widget(action.add.pos, element, {
                    id: action.add.id,
                });
                set = set.add(tr.doc, [deco]);
            }
            else if (action && action.remove) {
                set = set.remove(set.find(null, null, (spec) => spec.id === action.remove.id));
            }
            return set;
        },
    },
    props: {
        decorations(state) {
            return this.getState(state);
        },
    },
});
exports.default = uploadFilePlaceholder;
function findPlaceholder(state, id) {
    const decos = uploadFilePlaceholder.getState(state);
    const found = decos.find(null, null, (spec) => spec.id === id);
    return found.length ? found[0].from : null;
}
exports.findPlaceholder = findPlaceholder;
//# sourceMappingURL=uploadFilePlaceholder.js.map