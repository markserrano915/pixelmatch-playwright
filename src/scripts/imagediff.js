require('dotenv').config()
const fs = require('fs')
const PNG = require('pngjs').PNG
const pixelmatch = require('pixelmatch')

const {
  BROWSER,
  E2E_SCREENSHOTS_DIRECTORY
} = process.env

const IMAGE_NAME = 'home.png'
const LATEST_PATH = `${E2E_SCREENSHOTS_DIRECTORY}/latest/${BROWSER}`
const BACKUP_PATH = `${E2E_SCREENSHOTS_DIRECTORY}/backup/${BROWSER}`
const DIFF_PATH = `${E2E_SCREENSHOTS_DIRECTORY}/diff/${BROWSER}`

const img1 = PNG.sync.read(fs.readFileSync(`${LATEST_PATH}/${IMAGE_NAME}`))
const img2 = PNG.sync.read(fs.readFileSync(`${BACKUP_PATH}/${IMAGE_NAME}`))
const {width, height} = img1
const diff = new PNG({width, height})

pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.1})

fs.writeFileSync(`${DIFF_PATH}/home.png`, PNG.sync.write(diff))
