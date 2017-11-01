import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';

@Injectable()
export class LocalStorageService {
    constructor( @Inject(PLATFORM_ID) private platformId: Object) {
    }

    setItem(key:string, data:string): void {
        if (isPlatformBrowser(this.platformId)) {
            console.debug('>> LocalStorageService: isPlatformBrowser==true setItem()');
            localStorage.setItem(key,data);
        }
    }

    getItem(key: string): string | null {
        if (isPlatformBrowser(this.platformId)) {
            console.debug('>> LocalStorageService: isPlatformBrowser==true getItem()');
            return localStorage.getItem(key);
        }
        return null;
    }

    removeItem(key: string): void {
        if (isPlatformBrowser(this.platformId)) {
            console.debug('>> LocalStorageService: isPlatformBrowser==true removeItem()');
            localStorage.removeItem(key);
        }
    }
}