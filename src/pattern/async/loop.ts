export async function asyncFor<T>(target: T[], toDo: (item: T, idx: number, target: T[]) => Promise<void>) {
    for (let i = 0; i < target.length; i++) {
        const item = target[i];
        await toDo(item, i, target);
    }
}
