// @ts-ignore
import { waitForAngular } from "testcafe-angular-selectors"
import { Selector } from "testcafe"

const fixtureName = "Index_Page_Test"

fixture(fixtureName)
  .page("http://localhost:4001/index.html")
  .beforeEach(async () => {
    await waitForAngular()
  })

const testName = "creditcardinput_max16_4groups"

const digitCardNumberInputSel = "body > main-app > div > div > label > input"

test(testName, async (t) => {
  await t.takeScreenshot()

  let digitCardNumberInput = await Selector(digitCardNumberInputSel)

  await t
    .typeText(digitCardNumberInput, "12345678", { speed: 0.75 })
    .typeText(digitCardNumberInput, "901234567", { speed: 0.25 })

  digitCardNumberInput = await Selector(digitCardNumberInputSel)

  await t.expect(digitCardNumberInput.value).eql("1234 5678 9012 3456")
})
