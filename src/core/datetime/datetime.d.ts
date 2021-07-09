/**
 * Luxon representation
 */
export interface ILuxonDuration {
    hours?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
    days?: number;
}

/**
 * Moment Js representation
 */
export interface IMomentInstance {
    valueOf(): number;
    hour(): number;
    minute(): number;
    second(): number;
    millisecond(): number;
}

export function ParseString(str: string): ILuxonDuration;
export function GetHoursForMonth(month: number, year: number): number;
