import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve } from "@angular/router"
import { MailService } from "../../mail.services"
import { Mail } from "../../models/mail.interface"

@Injectable()
export class MailViewResolve implements Resolve<Mail> {
  constructor(private mailService: MailService) {}

  public resolve(route: ActivatedRouteSnapshot) {
    return this.mailService.getMessage(route.params.id)
  }
}
