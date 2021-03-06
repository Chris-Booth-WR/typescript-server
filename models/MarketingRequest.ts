export interface MarketingRequest {
    sendCountryIso2: string;
    receiveCountryIso2: string;
    receiveCountryIso3: string;
    amount: Number;
    payoutMethod: string;
    payinMethod: string;
}