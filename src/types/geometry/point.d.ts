import {ReferenceSystem} from './reference.system';

export class Point {
    type: string;
    coordinates: number[];
    crs?: ReferenceSystem;

    static FromString(str: string): Point;
    static FromJSON(json: any): Point;
    constructor(coordinates: number[], srid?: number);

    ToJSON(): {type: string, coordinates: number[], crs?: ReferenceSystem};
    Transform(srid: number);
}
