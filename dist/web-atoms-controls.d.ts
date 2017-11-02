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
    }
}
declare namespace WebAtoms {
}
declare namespace WebAtoms {
    class PopupService {
        private static _instance;
        static readonly instance: PopupService;
    }
}
