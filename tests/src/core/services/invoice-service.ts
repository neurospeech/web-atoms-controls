namespace Core {

	@DIGlobal
	export class InvoiceService extends WebAtoms.Rest.BaseService {

		@Get("/invoice/status-list")
		public async getStatusList(): Promise<InvoiceStatus[]> {

			return InvoiceServiceMock.instance.getStatusList();
		}

	}

}