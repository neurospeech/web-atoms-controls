declare namespace WebAtoms {
    class AtomChooser extends AtomControl {
        constructor(e: HTMLElement);
        init(): void;
    }
}
declare namespace WebAtoms {
    /**
     * Popup Button control
     * @export
     * @class AtomPopupButton
     * @extends {AtomControl}
     */
    class AtomPopupButton extends AtomControl {
        /**
         * Creates an instance of AtomPopupButton.
         * @param {HTMLElement} e
         * @memberof AtomPopupButton
         */
        constructor(e: HTMLElement);
        init(): void;
    }
}
declare namespace WebAtoms {
    /**
     * Core class as an replacement for jQuery
     * @class Core
     */
    class Core {
        static addClass(e: HTMLElement, c: string): void;
        static removeClass(e: HTMLElement, c: string): void;
        static atomParent(element: any): AtomControl;
        static getOffsetRect(e: HTMLElement): Rect;
    }
    type Rect = {
        x: number;
        y: number;
        width: number;
        height: number;
    };
}
declare namespace WebAtoms {
    class PopupService {
        /**
         *
         */
        constructor();
        private static _instance;
        static readonly instance: PopupService;
        /**
         * Sets target anchor for the upcoming popup
         * @static
         * @type {HTMLElement}
         * @memberof PopupService
         */
        currentTarget: HTMLElement;
        lastPopupID: number;
        openAsync<T>(p: any, vm: AtomWindowViewModel): Promise<T>;
    }
}
