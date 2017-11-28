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
        private windowName;
        /**
         * Creates an instance of AtomPopupButton.
         * @param {HTMLElement} e
         * @memberof AtomPopupButton
         */
        constructor(e: HTMLElement);
        popupTemplate: HTMLElement;
        isOpen: boolean;
        close(): void;
        openPopup(): Promise<any>;
        init(): void;
    }
}
