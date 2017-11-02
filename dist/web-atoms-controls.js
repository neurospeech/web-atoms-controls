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
        AtomChooser.prototype.init = function () {
            _super.prototype.init.call(this);
        };
        return AtomChooser;
    }(WebAtoms.AtomControl));
    WebAtoms.AtomChooser = AtomChooser;
})(WebAtoms || (WebAtoms = {}));
var WebAtoms;
(function (WebAtoms) {
    /**
     * Popup Button control
     * @export
     * @class AtomPopupButton
     * @extends {AtomControl}
     */
    var AtomPopupButton = /** @class */ (function (_super) {
        __extends(AtomPopupButton, _super);
        /**
         * Creates an instance of AtomPopupButton.
         * @param {HTMLElement} e
         * @memberof AtomPopupButton
         */
        function AtomPopupButton(e) {
            return _super.call(this, e) || this;
        }
        return AtomPopupButton;
    }(WebAtoms.AtomControl));
    WebAtoms.AtomPopupButton = AtomPopupButton;
})(WebAtoms || (WebAtoms = {}));
var WebAtoms;
(function (WebAtoms) {
    /**
     * Core class as an replacement for jQuery
     * @class Core
     */
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
        Core.removeClass = function (e, c) {
            var ex = (e.className || "").split(" ");
            if (ex.length === 0) {
                return;
            }
            ex = ex.filter(function (cx) { return cx !== c; });
            e.className = ex.join(" ");
        };
        return Core;
    }());
})(WebAtoms || (WebAtoms = {}));
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WebAtoms;
(function (WebAtoms) {
    var PopupService = /** @class */ (function () {
        function PopupService() {
        }
        PopupService_1 = PopupService;
        Object.defineProperty(PopupService, "instance", {
            get: function () {
                return PopupService_1._instance || (PopupService_1._instance = DI.resolve(PopupService_1));
            },
            enumerable: true,
            configurable: true
        });
        PopupService = PopupService_1 = __decorate([
            DIGlobal
        ], PopupService);
        return PopupService;
        var PopupService_1;
    }());
    WebAtoms.PopupService = PopupService;
})(WebAtoms || (WebAtoms = {}));
//# sourceMappingURL=web-atoms-controls.js.map