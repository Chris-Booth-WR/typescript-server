export abstract class RepoBase<T, TKey> {
    list(order: string = ""): T[] {
        return [];
    }
    abstract  item(id: TKey): T;
    abstract  update(item: T): void;
    abstract  delete(item: T): void;
    abstract create(item: T): T;
}