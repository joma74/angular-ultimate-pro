import { Selector } from "testcafe"
import devConfig from "../../config/testcafe.dev.json"
import prodConfig from "../../config/testcafe.prod.json"
var Mustache = require("mustache")

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig

const fixtureName = "Index_Page_Test"

fixture(fixtureName).page(`${config.baseUrl}/index.html`)

const testName = "dom_has_critical_elements"

test(testName, async (t) => {
  await t.takeScreenshot()
  await checkHeading(t)

  /**
   * @type { SelectorAPI & HTMLImageElement }
   */
  const imageAngularFirst = await /** @type { ? } */ (Selector(
    "img[data-desc='angular-first']",
  ).addCustomDOMProperties({
    complete: (/** @type {HTMLImageElement} */ el) => {
      return el.complete
    },
    naturalHeight: (/** @type {HTMLImageElement} */ el) => el.naturalHeight,
  }))
  await t.expect(imageAngularFirst.visible).ok()
  await t.expect(imageAngularFirst.complete).eql(true)
  await t.expect(imageAngularFirst.naturalHeight).gt(0)

  /**
   * @type { SelectorAPI & HTMLImageElement }
   */
  const imageAngularSecond = await /** @type { ? } */ (Selector(
    "img[data-desc='angular-second']",
  ).addCustomDOMProperties({
    complete: (/** @type {HTMLImageElement} */ el) => el.complete,
    naturalHeight: (/** @type {HTMLImageElement} */ el) => el.naturalHeight,
  }))
  await t.expect(imageAngularSecond.visible).ok()
  await t.expect(imageAngularSecond.complete).eql(true)
  await t.expect(imageAngularSecond.naturalHeight).gt(0)

  const { error, warn } = await t.getBrowserConsoleMessages()
  await t.expect(error.length).eql(0)
  await t.expect(warn.length).eql(0)
})

/**
 *
 * @param {TestController} t
 */
async function checkHeading(t) {
  const heading = Selector("h1[data-desc='heading']")
  const headingText = await heading.innerText
  const expected = Mustache.render(
    "{{ title }} from Angular 4 App with Webpack {{ major }}.{{ minor }}.{{ patch }}",
    {
      major: "3",
      minor: "12",
      patch: "0",
      title: "Hello",
    },
  )
  await t.expect(headingText).eql(expected)
}
