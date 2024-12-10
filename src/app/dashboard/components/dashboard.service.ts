import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../enironments/environment";


@Injectable({
    providedIn: 'root' 
})
export class ScrapedService {

    constructor(private http: HttpClient) {}

    baseApi = environment.apiBaseUrl;

    public getScrapedData() {
        return this.http.get<any>(`${this.baseApi}/scrape/all`)
    }

    public getScrapedDataByName(name: string) {
        return this.http.get<any>(`${this.baseApi}/scrape/${name}`)
    }
}