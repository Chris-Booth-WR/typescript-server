import { IMarketingRequest } from "../../models/IMarketingRequest";
import { RepoBase } from "../IRepository";

export class LocalMarketing extends RepoBase<IMarketingRequest> {
    list(order: string): IMarketingRequest[] {
        throw new Error("Method not implemented.");
    }
    item(id: number): IMarketingRequest {
        throw new Error("Method not implemented.");
    }
    update(item: IMarketingRequest): void {
        throw new Error("Method not implemented.");
    }
    delete(item: IMarketingRequest): void {
        throw new Error("Method not implemented.");
    }
    create(item: IMarketingRequest): void {
        throw new Error("Method not implemented.");
    }
}