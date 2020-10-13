import {Feature} from './feature';
import {ReferenceSystem} from './reference.system';

export class FeatureCollection<T> {
    type: string;
    features: Feature<T>[];
    crs?: ReferenceSystem;

    static FromString<T>(str: string): FeatureCollection<T>;
    static FromJSON<T>(json: any): FeatureCollection<T>;
    constructor(features: T, srid?: number);

    ToJSON(): {type: string, features: any[], crs?: ReferenceSystem};
}
