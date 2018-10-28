// @ts-ignore
import { AngularSelector, waitForAngular } from "testcafe-angular-selectors"
import { Selector } from "testcafe"

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

  const authForm = Selector("auth-form")
  await t.expect(authForm.exists).ok()

  await checkHeadingWithDesc(t, authForm, "heading-1", "Login")

  const buttonLogin = await authForm.find("button").nth(0)
  await t.expect(buttonLogin.exists).ok()

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

const testName2 = "can_destroy_component"

test(testName2, async (t) => {
  await t.takeScreenshot()

  const authForms = Selector("auth-form")
  await t.expect(authForms.count).eql(2)

  let authFormLogin = await authForms.find("[data-desc=heading-1]")
  await t.expect(authFormLogin.exists).ok()

  let authFormNoTitleGiven = await authForms.find("[data-desc=heading-2]")
  await t.expect(authFormNoTitleGiven.exists).ok()

  const destroyButton = Selector("button[data-desc='destroy']")
  await t.expect(destroyButton).ok()
  await t.click(destroyButton)

  await t.expect(authForms.count).eql(1)

  authFormNoTitleGiven = await authForms.find("[data-desc=heading-2]")
  await t.expect(authFormNoTitleGiven.exists).ok()

  authFormLogin = await authForms.find("[data-desc=heading-1]")
  await t.expect(authFormLogin.exists).notOk()

  await t.takeScreenshot()
})

const testName3 = "can_move_component"

test(testName3, async (t) => {
  await t.takeScreenshot()

  let authForms = Selector("auth-form")
  await t.expect(authForms.count).eql(2)

  let authFormAtPos0 = authForms.nth(0)
  checkHeading(t, authFormAtPos0, "Login")

  let authFormAtPos1 = authForms.nth(1)
  checkHeading(t, authFormAtPos1, "No title given")

  const moveButton = Selector("button[data-desc='move']")
  await t.expect(moveButton).ok()
  await t.click(moveButton)

  await t.expect(authForms.count).eql(2)

  authFormAtPos0 = authForms.nth(0)
  await checkHeading(t, authFormAtPos0, "No title given")

  authFormAtPos1 = authForms.nth(1)
  await checkHeading(t, authFormAtPos1, "Login")

  await t.takeScreenshot()
})

/**
 *
 * @param {TestController} t
 * @param {SelectorAPI} component
 * @param {string} dataDescOf
 * @param {string} expectedHeadingText
 */
async function checkHeadingWithDesc(
  t,
  component,
  dataDescOf,
  expectedHeadingText,
) {
  const heading = await component.find(`h3[data-desc='${dataDescOf}']`)
  const headingText = heading.innerText
  await t.expect(headingText).eql(expectedHeadingText)
}

/**
 * @param {TestController} t
 * @param {SelectorAPI} component
 * @param {string} expectedHeadingText
 */
async function checkHeading(t, component, expectedHeadingText) {
  const heading = await component.find(`h3`)
  const headingText = heading.innerText
  await t.expect(headingText).eql(expectedHeadingText)
}
