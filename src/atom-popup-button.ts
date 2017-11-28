namespace WebAtoms {
	/**
	 * Popup Button control
	 * @export
	 * @class AtomPopupButton
	 * @extends {AtomControl}
	 */
	export class AtomPopupButton extends AtomControl {

		private windowName: string;

		/**
		 * Creates an instance of AtomPopupButton.
		 * @param {HTMLElement} e
		 * @memberof AtomPopupButton
		 */
		constructor(e:HTMLElement) {
			super(e);
		}

		@bindableProperty
		popupTemplate:HTMLElement;

		@bindableProperty
		isOpen: boolean;

		close(): void {
			if(this.windowName) {
				AtomDevice.instance.broadcast(`atom-window-cancel:${this.windowName}`,"cancelled");
			}
		}

		async openPopup(): Promise<any> {
			if(this.isOpen) {
				this.close();
				return ;
			}

			try {
				this.isOpen = true;

				var e:HTMLElement = this.popupTemplate.cloneNode(true) as HTMLElement;

				WindowService.instance.currentTarget = this._element;

				var vm:AtomWindowViewModel = new AtomWindowViewModel();

				var r:Promise<any> = WindowService.instance.openPopup(e, vm);

				this.windowName = vm._windowName;

				await r;

				this.windowName = null;

			} catch(e) {
				console.error(e);
			} finally {
				this.isOpen = false;
			}
		}

		init():void {


			this.bindEvent(this._element, "click", () => {
				AtomDevice.instance.runAsync( () => this.openPopup());
			});



			super.init();
		}

	}

}