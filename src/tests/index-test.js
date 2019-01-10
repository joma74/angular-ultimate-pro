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

  const buttonJoinsUs = await authForm.find("button").nth(0)
  await t.expect(buttonJoinsUs.innerText).eql("Join us")
  await t.click(buttonJoinsUs)

  const rememberMe = await authForm.find("label[for^=remember-me-]")
  await t.click(rememberMe)

  const authMessage = AngularSelector("auth-message")
  const messageParaText = await authMessage.find("p").innerText
  await t
    .expect(messageParaText.trim())
    .eql("You will be logged in for 29 days")

  const buttonLogin = await authForm.find("button").nth(1)
  await t.expect(buttonLogin.innerText).eql("Login")
  await t.click(buttonLogin)

  const { log, error } = await t.getBrowserConsoleMessages()
  await t.expect(error.length).eql(0, JSON.stringify(error))
  await t.expect(log[2]).eql('Create account {"email":"","password":""}')
  await t
    .expect(log[3])
    .eql('Login {"email":"","password":"","rememberMe":true}')
})

/**
 *
 * @param {TestController} t
 * @param {Selector} component
 * @param {string} dataDescOf
 * @param {string} expectedHeadingText
 */
async function checkHeading(t, component, dataDescOf, expectedHeadingText) {
  const heading = await component.find(`h3[data-desc='${dataDescOf}']`)
  const headingText = heading.innerText
  await t.expect(headingText).eql(expectedHeadingText)
}
