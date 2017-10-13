declare namespace Core {
    type InvoiceStatus = {
        label: string;
        value: string;
    };
}
declare namespace Core {
    class InvoiceServiceMock {
        private static _instance;
        static readonly instance: InvoiceServiceMock;
        getStatusList(): InvoiceStatus[];
    }
}
declare namespace Core {
    class InvoiceService extends WebAtoms.Rest.BaseService {
        getStatusList(): Promise<InvoiceStatus[]>;
    }
}
