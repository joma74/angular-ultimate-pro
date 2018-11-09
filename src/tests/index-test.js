// @ts-ignore
import { waitForAngular } from "testcafe-angular-selectors"
import { Selector } from "testcafe"

const fixtureName = "Index_Page_Test"

fixture(fixtureName)
  .page("http://localhost:4001/index.html")
  .beforeEach(async () => {
    await waitForAngular()
  })

const testName = "does_pipe_in_megabytes"

test(testName, async (t) => {
  await t.takeScreenshot()

  const firstPipedValue = await Selector(
    "body > main-app > div > div:nth-child(1) > p:nth-child(2)",
  ).innerText

  await t.expect(firstPipedValue).eql("2.02MegaBytes")
})
