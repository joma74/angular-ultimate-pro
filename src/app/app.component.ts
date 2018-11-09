import { Component, OnInit } from "@angular/core"
import { FileSizePipe } from "./filesize.pipe"

interface File {
  name: string
  size: any
  type: string
}

@Component({
  providers: [FileSizePipe],
  selector: "main-app",
  template: `
    <div>
      <div *ngFor="let file of mapped">
        <p>{{ file.name }}</p>
        <p>{{ file.size }}</p>
      </div>
    </div>
  `,
})
export class AppComponent implements OnInit {
  public files: File[]
  public mapped: File[]

  constructor(private fileSizePipe: FileSizePipe) {}

  public ngOnInit() {
    this.files = [
      { name: "logo.svg", size: 2120109, type: "image/svg" },
      { name: "banner.jpg", size: 18029, type: "image/jpg" },
      { name: "background.png", size: 1784562, type: "image/png" },
    ]
    this.mapped = this.files.map((file) => {
      return {
        name: file.name,
        size: this.fileSizePipe.transform(file.size, "MegaBytes"),
        type: file.type,
      }
    })
  }
}
