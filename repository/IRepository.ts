export abstract class RepoBase<T> {
    list(order: string = ""): T[] {
        return [];
    }
    abstract  item(id: number): T;
    abstract  update(item: T): void;
    abstract  delete(item: T): void;
    abstract create(item: T): void;
}