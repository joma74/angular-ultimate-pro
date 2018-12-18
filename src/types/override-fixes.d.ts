// https://github.com/angular/angular-cli/issues/7474
// node_modules/@ngtools/webpack/src/compiler_host.d.ts:6:22 - error TS2720: Class 'VirtualStats' incorrectly implements class 'Stats'. Did you mean to extend 'Stats' and inherit its members as a subclass?
//  Type 'VirtualStats' is missing the following properties from type 'Stats': atimeMs, mtimeMs, ctimeMs, birthtimeMs
//  6 export declare class VirtualStats implements fs.Stats {
// tslint:disable-next-line:no-implicit-dependencies
import { VirtualStats } from "@ngtools/webpack/src/compiler_host"
import * as fs from "fs"

declare module "@ngtools/webpack/src/compiler_host" {
  interface VirtualStats extends fs.Stats {
    atimeMs: number
  }
}
