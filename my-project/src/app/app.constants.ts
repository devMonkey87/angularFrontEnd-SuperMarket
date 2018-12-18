import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public server = 'http://localhost:4200/';
    public backend  = 'http://localhost:8080/';
    public apiUrl = 'produs/';
    public serverWithApiUrl = this.server + this.apiUrl;
}
