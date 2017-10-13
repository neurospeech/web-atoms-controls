namespace WebAtoms {

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
	}

}