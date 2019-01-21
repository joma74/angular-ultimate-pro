import * as TESTCAFE from "testcafe"

interface TestRun {
  readonly opts: TestOpts
  readonly test: TestProps
}

interface TestOpts {
  readonly screenshotPath: string
  readonly screenshotPathPattern: string
}

interface TestProps {
  readonly name: string
  readonly fixture: FixtureProps
}

interface FixtureProps {
  readonly name: string
}

declare global {
  interface TestController {
    testRun: TestRun
  }
}
