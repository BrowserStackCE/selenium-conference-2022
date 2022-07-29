import { NightwatchTests } from 'nightwatch';
import user from '../../data/user.json'

let testEnv = process.env.__NIGHTWATCH_ENV_KEY?.split("_")[0]

const selectors = {
    nameInput: 'input[autocomplete="name"]',
    launchInWeb: '//button[text()="Launch in web"]',
    joinButton: '[data-testid="prejoin.joinMeeting"]'
}
const WebRTC: NightwatchTests = {
    'downloading/uploading sample file to machine': () => {
        if (testEnv == 'desktop') {
            browser
                .maximizeWindow()
                .url(process.env.VIDEO_USER_1_DLOC)
                .url(process.env.AUDIO_USER_1_DLOC)
                .pause(5000)
        }
        else if (testEnv == 'cloudDesktop') {
            browser
                .maximizeWindow()
                .url(process.env.VIDEO_USER_2_DLOC)
                .url(process.env.AUDIO_USER_2_DLOC)
                .pause(12000);
        }
        else {
            browser
                .url(process.env.VIDEO_USER_3_DLOC)
                .url(process.env.AUDIO_USER_3_DLOC)
        }
    },
    'opening the browser and navigating to the url': () => {
        browser
            .url(`https://meet.jit.si/Nightwatch-${process.env.BUILD_TS}`)
            .waitForElementVisible('body', 1000)
    },
    'entering Names': () => {
        if (testEnv == 'desktop') {
            browser
                .setValue(selectors.nameInput, user.desktopUser)

        }
        else if (testEnv == 'desktop' || testEnv == 'cloudDesktop') {
            browser
                .setValue(selectors.nameInput, user.desktopCloudUser)

        }
        else {
            browser
                .useXpath()
                .click(selectors.launchInWeb)
                .useCss()
                .setValue(selectors.nameInput, user.mobileCloudUser)
        }
    },
    'clicking on join meeting': () => {
        browser
            .click(selectors.joinButton)
    },
    'waiting for some time': () => {
        browser
            .pause(30000)
    }
}

export default WebRTC