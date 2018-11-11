// @ts-ignore
import { waitForAngular } from "testcafe-angular-selectors"

const fixtureName = "Index_Page_Test"

fixture(fixtureName)
  .page("http://localhost:4001/index.html")
  .beforeEach(async () => {
    await waitForAngular()
  })

const testName = "can_open_page"

test(testName, async (t) => {
  await t.takeScreenshot()
})
