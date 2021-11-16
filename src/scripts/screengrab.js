require('dotenv').config()
const fse = require('fs-extra')
const { chromium } = require('playwright')

const {
  BROWSER,
  E2E_URL,
  E2E_SCREENSHOTS_DIRECTORY
} = process.env;


(async () => {
  try {
    fse.copySync(`${E2E_SCREENSHOTS_DIRECTORY}/latest`, `${E2E_SCREENSHOTS_DIRECTORY}/backup`)
    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto(E2E_URL)
    await page.screenshot({ path: `${E2E_SCREENSHOTS_DIRECTORY}/latest/${BROWSER}/home.png` })
    await browser.close()
  } catch (err) {
    console.error(err)
  }

})()
