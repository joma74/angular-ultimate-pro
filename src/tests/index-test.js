// @ts-ignore
import { AngularSelector, waitForAngular } from "testcafe-angular-selectors"

const fixtureName = "Index_Page_Test"

fixture(fixtureName)
  .page("http://localhost:4001/index.html")
  .beforeEach(async () => {
    await waitForAngular()
  })

const testName = "dom_has_critical_elements"

test(testName, async (t) => {
  // await t.debug()
  await t.takeScreenshot()
})
