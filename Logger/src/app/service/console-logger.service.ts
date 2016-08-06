declare var console: any;

import { ILogger } from '../model/ILogger';

export class ConsoleLoggerService implements ILogger {
    public assert(...args: any[]): void {
        (console && console.assert) && console.assert();
    }

    public error(...args: any[]): void {
        (console && console.error) && console.error(...args);
    }

    public group(...args: any[]): void {
        (console && console.group) && console.group(...args);
    }

    public groupEnd(...args: any[]): void {
        (console && console.groupEnd) && console.groupEnd(...args);
    }

    public info(...args: any[]): void {
        (console && console.info) && console.info(...args);
    }

    public log(...args: any[]): void {
        (console && console.log) && console.log(...args);
    }

    public warn(...args: any[]): void {
        (console && console.warn) && console.warn(...args);
    }
}
