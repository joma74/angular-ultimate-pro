import { Directive, HostBinding, HostListener } from "@angular/core"

@Directive({
  selector: "[credit-card]",
})
export class CreditCardDirective {
  @HostBinding("style.border-color")
  public borderColor: string

  @HostListener("input", ["$event"])
  public onKeyDown(event: KeyboardEvent) {
    const elm = event.target as HTMLInputElement
    let trimmed = elm.value.replace(/\s+/g, "")
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16)
    }
    const numbers = []
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4))
    }
    // ['1234', '1234']
    elm.value = numbers.join(" ")

    this.borderColor = ""
    if (/[^\d]+/.test(trimmed)) {
      this.borderColor = "red"
    }
  }
}
