export interface MonthTracker {
    years: Object;
    current?: Date;
}
export declare const monthTracker: MonthTracker;
export declare function months(lang: string): string[];
export declare function indexOfMonth(month: string): number;
export declare function days(lang: string): string[];
export declare function scrapeMonth(date: Date): {
    date: Date;
    month: undefined;
};
export declare function scrapePreviousMonth(): {
    date: Date;
    month: undefined;
};
export declare function scrapeNextMonth(): {
    date: Date;
    month: undefined;
};
export declare function getDisplayDate(lang: any, _date: any): any;
export declare function formatTimeFromInputElement(hour: number): string;
export declare function formatDate(date: any): string;
