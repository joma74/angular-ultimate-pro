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

  await checkHeading(t, authForm, "heading-2", "Login")

  const buttonLogin = await authForm.find("button").nth(0)

  const rememberMe = await authForm.find("label[for^=remember-me-]")
  await t.click(rememberMe)
  await t.expect(buttonLogin.innerText).eql("Login")
  await t.click(buttonLogin)

  const { log, error } = await t.getBrowserConsoleMessages()
  await t.expect(error.length).eql(0, JSON.stringify(error))
  await t
    .expect(log[2])
    .eql('Login {"email":"","password":"","rememberMe":true}')
})

/**
 *
 * @param {TestController} t
 * @param {AngularSelector} component
 * @param {string} dataDescOf
 * @param {string} expectedHeadingText
 */
async function checkHeading(t, component, dataDescOf, expectedHeadingText) {
  const heading = await component.find(`h3[data-desc='${dataDescOf}']`)
  const headingText = heading.innerText
  await t.expect(headingText).eql(expectedHeadingText)
}
