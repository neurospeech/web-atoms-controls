var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var WebAtoms;
(function (WebAtoms) {
    var AtomChooser = /** @class */ (function (_super) {
        __extends(AtomChooser, _super);
        function AtomChooser(e) {
            return _super.call(this, e) || this;
        }
        return AtomChooser;
    }(WebAtoms.AtomControl));
    WebAtoms.AtomChooser = AtomChooser;
})(WebAtoms || (WebAtoms = {}));
var WebAtoms;
(function (WebAtoms) {
    var Core = /** @class */ (function () {
        function Core() {
        }
        Core.addClass = function (e, c) {
            var ex = e.className;
            var exa = ex ? ex.split(" ") : [];
            if (exa.find(function (f) { return f === c; })) {
                return;
            }
            exa.push(c);
            e.className = exa.join(" ");
        };
        return Core;
    }());
})(WebAtoms || (WebAtoms = {}));
//# sourceMappingURL=web-atoms-controls.js.map