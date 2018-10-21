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
  // await t.debug()
  await t.takeScreenshot()

  const authForm = AngularSelector("auth-form")

  await checkHeading(t, authForm, "heading-1", "Create account")
  await checkHeading(t, authForm, "heading-2", "Login")

  const buttonSubmitCreateAccount = authForm.find("button").nth(0)
  await t.click(buttonSubmitCreateAccount)

  const buttonsubmitLogin = authForm.find("button").nth(1)
  await t.click(buttonsubmitLogin)

  const { log } = await t.getBrowserConsoleMessages()
  await t.expect(log[2]).contains("Create account")
  await t.expect(log[3]).contains("Login")
})

/**
 *
 * @param {TestController} t
 * @param {AngularSelector} component
 * @param {string} dataDescOf
 * @param {string} expectedHeadingText
 */
async function checkHeading(t, component, dataDescOf, expectedHeadingText) {
  const heading = component.find(`h3[data-desc='${dataDescOf}']`)
  const headingText = await heading.innerText
  await t.expect(headingText).eql(expectedHeadingText)
}
