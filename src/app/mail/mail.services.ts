import { Injectable } from "@angular/core"
import { Http } from "@angular/http"
import { Observable } from "rxjs"
import { Mail } from "./models/mail.interface"

@Injectable()
export class MailService {
  constructor(private http: Http) {}

  public getFolder(folder: string): Observable<Mail[]> {
    return this.http
      .get(`api/messages?folder=${folder}`)
      .map((response) => response.json())
      .catch((error: any) => {
        return Observable.throw(error.json())
      })
  }
}
