import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }


    // Method to set data to local storage
    setItem(key: string, value: any): void {
      localStorage.setItem(key, JSON.stringify(value));
    }
  
    // Method to get data from local storage
    getItem(key: string): any {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
  
  }

