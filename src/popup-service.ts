namespace WebAtoms {

	declare function DIGlobal(t:any):void;

	declare var DI:any;

	@DIGlobal
	export class PopupService {

		private static _instance:PopupService;
		public static get instance():PopupService {
			return PopupService._instance || (PopupService._instance = DI.resolve(PopupService));
		}



	}

}