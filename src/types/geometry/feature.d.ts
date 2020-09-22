export interface IGeometry {
    type: string;
    toJSON(): string;
}

export class Feature<T> {
    type: string;
    geometry: IGeometry;
    properties?: T;

    static FromString<T>(str: string): Feature<T>;
    static FromJSON<T>(json: any): Feature<T>;
    constructor(geometry: IGeometry, properties?: T);

    ToJSON(): {type: string, geometry: any, properties?: T};
}
