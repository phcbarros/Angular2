export interface ILogger {
    assert(...args: any[]): void;
    log(...args: any[]): void;
    error(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
    group(...args: any[]): void;
    groupEnd(...args: any[]): void;
}