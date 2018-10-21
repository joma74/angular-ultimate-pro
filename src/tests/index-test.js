// @ts-ignore
import { AngularSelector, waitForAngular } from "testcafe-angular-selectors"

const fixtureName = "Index_Page_Test"

fixture(fixtureName)
  .page("http://localhost:4001/index.html")
  .beforeEach(async () => {
    await waitForAngular()
  })

const testName = "console_has_messages"

test(testName, async (t) => {
  await t.debug()
  await t.takeScreenshot()
  await checkHeading(t, "heading-1", "Create account")
  await checkHeading(t, "heading-2", "Login")

  const buttonSubmitCreateAccount = AngularSelector("auth-form")
    .find("button")
    .nth(0)
  await t.click(buttonSubmitCreateAccount)

  const buttonsubmitLogin = AngularSelector("auth-form")
    .find("button")
    .nth(1)
  await t.click(buttonsubmitLogin)
})

/**
 *
 * @param {TestController} t
 * @param {string} dataDescOf
 * @param {string} expectedHeadingText
 */
async function checkHeading(t, dataDescOf, expectedHeadingText) {
  const heading = AngularSelector("auth-form").find(
    `h3[data-desc='${dataDescOf}']`,
  )
  const headingText = await heading.innerText
  await t.expect(headingText).eql(expectedHeadingText)
}
