import {ReferenceSystem} from './reference.system';

export class MultiLine {
    type: string;
    coordinates: number[][][];
    crs?: ReferenceSystem;

    static FromString(str: string): MultiLine;
    static FromJSON(json: any): MultiLine;
    constructor(coordinates: number[][][], srid?: number);

    ToJSON(): {type: string, coordinates: number[][][], crs?: ReferenceSystem};
    Transform(srid: number): void;
}
