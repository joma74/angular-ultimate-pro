// @ts-ignore
import { waitForAngular } from "testcafe-angular-selectors"
import { Selector } from "testcafe"

const fixtureName = "Index_Page_Test"

fixture(fixtureName)
  .page("http://0.0.0.0:4001/index.html")
  .beforeEach(async () => {
    await waitForAngular()
  })

const testName = "can_open_page"

test(testName, async (t) => {
  await t.takeScreenshot()

  const button = await Selector(
    "body > main-app > div > stock-inventory > div > form > div > button",
  )

  await t.expect(button.visible).ok()
})
