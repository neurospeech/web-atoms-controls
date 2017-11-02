namespace WebAtoms {
	/**
	 * Core class as an replacement for jQuery
	 * @class Core
	 */
	class Core {

		static addClass(e:HTMLElement, c: string): void {
			var ex: string = e.className;
			var exa: string[] = ex ? ex.split(" ") : [];
			if( exa.find(f => f === c) ) {
				return;
			}
			exa.push(c);
			e.className = exa.join(" ");
		}

		static removeClass(e:HTMLElement, c: string): void {
			var ex: string[] = (e.className || "").split(" ");
			if(ex.length === 0) {
				return;
			}
			ex = ex.filter(cx => cx !== c);
			e.className = ex.join(" ");
		}

	}

}