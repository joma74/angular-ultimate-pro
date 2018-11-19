// @ts-ignore
import { AngularSelector, waitForAngular } from "testcafe-angular-selectors"
import { Selector } from "testcafe"

const fixtureName = "Index_Page_Test"

fixture(fixtureName)
  .page("http://localhost:4001/index.html")
  .beforeEach(async () => {
    await waitForAngular()
  })

const testName = "dom_has_critical_elements"

test(testName, async (t) => {
  await t.takeScreenshot()

  /**
   * @type {SelectorAPI}
   */
  const Inbox = AngularSelector("mail-app mail-folder")
  const InboxHeader = Inbox.find("h2")

  await t.expect(InboxHeader.visible).ok()
  await t.expect(InboxHeader.innerText).eql("Inbox")

  const Nav = Selector("main-app > div > div > nav")

  const InboxNavHeader = Nav.find("a:nth-child(1)")
  await t.expect(InboxNavHeader.innerText).eql("Inbox")

  const TrashNavHeader = Nav.find("a:nth-child(2)")
  await t.expect(TrashNavHeader.innerText).eql("Trash")
})
