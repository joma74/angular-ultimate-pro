// @ts-ignore
import { waitForAngular } from "testcafe-angular-selectors"
import { Selector } from "testcafe"

const fixtureName = "Index_Page_Test"

fixture(fixtureName)
  .page("http://localhost:4001/index.html")
  .beforeEach(async () => {
    await waitForAngular()
  })

const testName = "change_detection_onpush_vs_default"

const nameInPushChangeDetectionGroupSel = "example-one > div > h4"

const nameInDefaultChangeDetectionGroupSel = "example-two > div > h4"

test(testName, async (t) => {
  await t.takeScreenshot()

  await checkName(t, nameInPushChangeDetectionGroupSel, "Mark Hoppus")

  await checkName(t, nameInDefaultChangeDetectionGroupSel, "Mark Hoppus")

  const buttonChangeNameProperty = await Selector("main-app")
    .find("button")
    .withText("Change name property")
  await t.click(buttonChangeNameProperty)

  await checkName(t, nameInPushChangeDetectionGroupSel, "Mark Hoppus")

  await checkName(t, nameInDefaultChangeDetectionGroupSel, "Travis Barker")

  await t.takeScreenshot()
})

/**
 *
 * @param {TestController} t
 * @param {string} forCssSelector
 * @param {string} expectedName
 */
async function checkName(t, forCssSelector, expectedName) {
  const selectedName = await Selector("main-app").find(forCssSelector).innerText
  await t.expect(selectedName).eql(expectedName)
}
