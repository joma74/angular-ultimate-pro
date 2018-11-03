import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core"

@Directive({
  selector: "[myFor][myForOf]",
})
export class MyForDirective {
  @Input()
  set myForOf(collection: object[]) {
    this.view.clear() // else the last list is still rendered
    collection.forEach((item, index) => {
      this.view.createEmbeddedView(this.template, {
        $implicit: item,
        index,
      })
    })
  }

  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>,
  ) {}
}
