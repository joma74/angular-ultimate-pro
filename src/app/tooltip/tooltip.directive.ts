import { Directive, ElementRef, Input, OnInit } from "@angular/core"

@Directive({
  exportAs: "tooltip",
  selector: "[tooltip]",
})
export class TooltipDirective implements OnInit {
  public tooltipElm = document.createElement("span")
  public visible = false

  @Input()
  set tooltip(value: string) {
    this.tooltipElm.textContent = value
  }

  constructor(private hostingElm: ElementRef) {}

  public ngOnInit(): void {
    this.tooltipElm.classList.add("tooltip", "invisible")
    this.hostingElm.nativeElement.appendChild(this.tooltipElm)
    this.hostingElm.nativeElement.classList.add("relative")
  }

  public hide() {
    this.tooltipElm.classList.add("invisible")
  }

  public show() {
    this.tooltipElm.classList.remove("invisible")
  }
}
