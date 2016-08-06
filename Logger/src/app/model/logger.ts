import { ILogger } from './Ilogger';

export class Logger implements ILogger {
    public assert(...args: any[]): void {}
    public error(...args: any[]): void {}
    public group(...args: any[]): void {}
    public groupEnd(...args: any[]): void {}
    public info(...args: any[]): void {}
    public log(...args: any[]): void {}
    public warn(...args: any[]): void {}
}
