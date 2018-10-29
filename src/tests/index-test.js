// @ts-ignore
import { AngularSelector, waitForAngular } from "testcafe-angular-selectors"
var Mustache = require("mustache")

const fixtureName = "Index_Page_Test"

fixture(fixtureName)
  .page("http://localhost:4001/index.html")
  .beforeEach(async () => {
    await waitForAngular()
  })

const testName = "dom_has_critical_elements"

test(testName, async (t) => {
  await t.takeScreenshot()
  await checkHeading(t)

  const imageAngularFirst = await AngularSelector().find(
    "img[data-desc='angular-first']",
  )
  await t.expect(imageAngularFirst.visible).ok()

  const imageAngularSecond = await AngularSelector().find(
    "img[data-desc='angular-second']",
  )
  await t.expect(imageAngularSecond.visible).ok()
})

/**
 *
 * @param {TestController} t
 */
async function checkHeading(t) {
  const heading = AngularSelector().find("h1[data-desc='heading']")
  const headingText = await heading.innerText
  const expected = Mustache.render(
    "{{ title }} from Angular App with Webpack {{ major }}.{{ minor }}.{{ patch }}",
    {
      major: "3",
      minor: "12",
      patch: "0",
      title: "Hello",
    },
  )
  await t.expect(headingText).eql(expected)
}
