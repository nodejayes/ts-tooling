export interface ReferenceSystemProperties {
    name: string;
}

export class ReferenceSystem {
    type: string;
    properties: ReferenceSystemProperties;

    static FromString(str: string): ReferenceSystem;
    static FromJSON(json: any): ReferenceSystem;
    constructor(srid: number);

    GetSrId(): number;
    ToJSON(): string;
}
