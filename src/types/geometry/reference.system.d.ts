export interface ReferenceSystemProperties {
    name: string;
}

export function registerProjection(srid: number | string, projection: string): void;

export const WGS84: ReferenceSystem;
export const WEB_MERCATOR: ReferenceSystem;

export class ReferenceSystem {
    type: string;
    properties: ReferenceSystemProperties;

    static FromString(str: string): ReferenceSystem;
    static FromJSON(json: any): ReferenceSystem;
    constructor(srid: number);

    GetSrId(): number;
    ToJSON(): string;
}
