namespace Core {
	export class InvoiceServiceMock {

		private static  _instance:InvoiceServiceMock;
		static get instance(): InvoiceServiceMock {
			return InvoiceServiceMock._instance || (InvoiceServiceMock._instance = new InvoiceServiceMock());
		}

		getStatusList(): InvoiceStatus[] {
			return [
				{ label: "None", value: ""},
				{ label: "Draft", value: "draft"},
				{ label: "Pending", value: "pending"},
				{ label: "Sent", value: "sent"},
				{ label: "Paid Partial", value: "paid-partial"},
				{ label: "Paid", value: "paid"}
			];
		}

	}
}