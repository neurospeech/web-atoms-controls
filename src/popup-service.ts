namespace WebAtoms {

	declare function DIGlobal(t:any):void;

	declare var DI:any;

	@DIGlobal
	export class PopupService {

		/**
		 *
		 */
		constructor() {
			window.addEventListener("click", (e) => {
				this.currentTarget = e.target as HTMLElement;
			});
		}

		private static _instance:PopupService;
		public static get instance():PopupService {
			return PopupService._instance || (PopupService._instance = DI.resolve(PopupService));
		}

		/**
		 * Sets target anchor for the upcoming popup
		 * @static
		 * @type {HTMLElement}
		 * @memberof PopupService
		 */
		public currentTarget: HTMLElement;

		lastPopupID:number = 0;

		public openAsync<T>(p: any, vm: AtomWindowViewModel ): Promise<T> {
			return new Promise((resolve,reject) => {

				var parent:AtomControl = Core.atomParent(this.currentTarget);

				var e:HTMLDivElement = document.createElement("div");
				// tslint:disable-next-line:no-string-literal
				e["_logicalParent"] = parent._element;

				e.id = `atom_popup_${this.lastPopupID++}`;

				if(vm) {
					// tslint:disable-next-line:no-string-literal
					vm["windowName"] = e.id;
				}

				var r:Rect = Core.getOffsetRect(this.currentTarget);

				e.style.position = "absolute";
				e.style.left = r.x + "px";
				e.style.top = (r.y + r.height) + "px";

				document.body.appendChild(e);
				var ct:AtomControl = new p(e);
				ct.viewModel = vm;
				ct.createChildren();
				ct.init();

				var d:{ close?: AtomDisposable, cancel?: AtomDisposable } = {};

				d.close = AtomDevice.instance.subscribe(`atom-window-close:${e.id}`,
				(g,i) => {
					ct.dispose();
					e.remove();
					d.close.dispose();
					d.cancel.dispose();
					resolve(i);
				});

				d.cancel = AtomDevice.instance.subscribe(`atom-window-cancel:${e.id}`,
					(g,i)=> {
					ct.dispose();
					e.remove();
					d.close.dispose();
					d.cancel.dispose();
					reject(i);
				});
			});
		}

	}

}