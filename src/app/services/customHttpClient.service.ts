import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CustomHttpClient {

    constructor(private http: HttpClient) {}

    private addJwtTokenToAuth(headers: HttpHeaders){
        return headers.append('Authorization', 'bearer ' + this.getToken());
    }

    public get(url): any {
        let headers =  new HttpHeaders();
        this.addJwtTokenToAuth(headers);
        
        return this.http.get(url, { headers: headers });
    }

    public post(url, data): any {
        console.log(this.getToken());
        let headers =  new HttpHeaders();
        headers = this.addJwtTokenToAuth(headers);
        // console.log(headers);
        return this.http.post(url, data, { headers: headers });
    }

    private getToken(): any {
        return localStorage.getItem('token');
    }

}