import * as en from './en-US.json';

let localeJSON: {[key: string]: string} = en['default'];

export function loadLocale(locale: { [key: string]: string }): void {
  localeJSON = locale;
}

export function getLocale(key: string): string {
     
    return localeJSON[key];
}
