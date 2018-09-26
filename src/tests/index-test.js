const fixtureName = "Index_Page_Test"

fixture(fixtureName).page("http://localhost:4001/index.html")

const testName = "dom_has_critical_elements"

test(testName, async (t) => {
	await t.takeScreenshot()
})
