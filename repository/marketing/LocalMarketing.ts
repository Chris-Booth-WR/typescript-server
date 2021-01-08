import { MarketingRequest } from "../../models/MarketingRequest";
import { Repository } from "../Repository";

export class LocalMarketing extends Repository<MarketingRequest, number> {
    list(order: string): MarketingRequest[] {
        throw new Error("Method not implemented.");
    }
    item(id: number): MarketingRequest {
        throw new Error("Method not implemented.");
    }
    update(item: MarketingRequest): void {
        throw new Error("Method not implemented.");
    }
    delete(item: MarketingRequest): void {
        throw new Error("Method not implemented.");
    }
    create(item: MarketingRequest): MarketingRequest {
        throw new Error("Method not implemented.");
    }
}