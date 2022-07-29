import { NightwatchTests } from 'nightwatch';

const webUrl = "https://www.flipkart.com/"
const selectors = {
    loginButton:"._2x71WM",
    phoneInput:"._1i5zkb",
    continueButton:".LuQr2v",
    nativeAlertBox:'//*[@class="android.widget.Button"][2]'
}
const OTP: NightwatchTests = {
    "opening flipkart Login Page": () => {
        browser
            .url(webUrl)
    },
    "clicking on login button": () => {
        browser
            .click(selectors.loginButton)
    },
    "entering phone number and clicking on continue": () => {
        browser
            .setValue(selectors.phoneInput, process.env.PHONE_NUMBER as string)
            .click(selectors.continueButton)
    },
    "accepting alerts": () => {
        browser
            .setContext('NATIVE_APP')
            .useXpath()
            .click(selectors.nativeAlertBox)
    }
}

export default OTP