import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class LocalData {
    constructor(private http: Http) {

    }

    getDrivers() {
        return this.http.get("assets/json/buses.json").map(res => res.json());
    }
}