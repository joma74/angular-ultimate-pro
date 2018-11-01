// @ts-ignore
import { waitForAngular } from "testcafe-angular-selectors"
import { Selector } from "testcafe"

const fixtureName = "Index_Page_Test"

fixture(fixtureName)
  .page("http://localhost:4001/index.html")
  .beforeEach(async () => {
    await waitForAngular()
  })

const testName = "dom_has_ng_template_text"

test(testName, async (t) => {
  await t.takeScreenshot()

  const text = await Selector("html > body > main-app > div").innerText

  await t.expect(text).eql("Tedd Motto : England, UK")
})
