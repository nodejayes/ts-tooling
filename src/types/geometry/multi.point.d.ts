import {ReferenceSystem} from './reference.system';

export class MultiPoint {
    type: string;
    coordinates: number[][];
    crs?: ReferenceSystem;

    static FromString(str: string): MultiPoint;
    static FromJSON(json: any): MultiPoint;
    constructor(coordinates: number[][], srid?: number);

    ToJSON(): {type: string, coordinates: number[][], crs?: ReferenceSystem};
    Transform(srid: number);
}
