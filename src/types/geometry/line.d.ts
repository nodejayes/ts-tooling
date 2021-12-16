import {ReferenceSystem} from './reference.system';

export class Line {
    type: string;
    coordinates: number[][];
    crs?: ReferenceSystem;

    static FromString(str: string): Line;
    static FromJSON(json: any): Line;
    constructor(coordinates: number[][], srid?: number);

    ToJSON(): {type: string, coordinates: number[][], crs?: ReferenceSystem};
    Transform(srid: number): void;
}
