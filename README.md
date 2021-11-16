# Pixelmatch Playwright

A demo app to grab screenshots and create diffs

- Uses Playwright to automate browser interactions
- Uses Pixelmatch to make image diffs
- Uses Next.js for the web framework

## Prerequisites

- Install [NVM](https://github.com/nvm-sh/nvm) to manage your Node versions
- Prepare the app:

  1. Run `nvm use` to use the assigned Node version for the app

  1. Run `npm install` to install the dependencies

## Running the Web Server

1. Run `npm run dev`

1. Visit <http://localhost:3000>

## Grabbing Screenshots

Note: For the purpose of this demo, the `.env` file is committed in the repo. Ideally it shouldn't be.

1. Update the `E2E_URL` entry in the `.env` file with the desired URL entrypoint

1. Run `npm run screengrab`
  Notes:

    - If this is your first time running this command, it will create an image in the `latest` directory
    - The diff image will be empty since there's nothing to diff
    - Run this command twice so you have a `latest` and `backup` images to compare

1. Run `npm run imagediff`

## Resources

- [Next.js](https://nextjs.org/docs)
- [Playwright](https://playwright.dev/)
- [Pixelmatch](https://github.com/mapbox/pixelmatch)
