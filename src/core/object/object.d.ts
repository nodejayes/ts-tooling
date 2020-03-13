export function RecursiveDeepCopy<T>(obj: T, cache?: any[]): T;
export function Get<T>(obj: T, key: string): T;
export function Set<T>(obj: T, key: string): T;
export function Merge<T, K>(master: T, slave: K): T;
