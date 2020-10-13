import {ReferenceSystem} from './reference.system';

export class Polygon {
    type: string;
    coordinates: number[][][];
    crs?: ReferenceSystem;

    static FromString(str: string): Polygon;
    static FromJSON(json: any): Polygon;
    constructor(coordinates: number[][][], srid?: number);

    ToJSON(): {type: string, coordinates: number[][][], crs?: ReferenceSystem};
    Transform(srid: number);
}
