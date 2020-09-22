import {ReferenceSystem} from './reference.system';

export class MultiPolygon {
    type: string;
    coordinates: number[][][][];
    crs?: ReferenceSystem;

    static FromString(str: string): MultiPolygon;
    static FromJSON(json: any): MultiPolygon;
    constructor(coordinates: number[][][][], srid?: number);

    ToJSON(): {type: string, coordinates: number[][][][], crs?: ReferenceSystem};
}
