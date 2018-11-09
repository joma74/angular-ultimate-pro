import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
  name: "filesize",
})
export class FileSizePipe implements PipeTransform {
  public transform(size: number, extension: string = "MB") {
    return (size / (1024 * 1024)).toFixed(2) + extension
  }
}
