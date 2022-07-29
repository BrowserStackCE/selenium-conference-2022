import { NightwatchTests } from 'nightwatch';
import fs from 'fs'

let testEnv = process.env.__NIGHTWATCH_ENV_KEY?.split("_")[0]

const webUrl = "https://www.flipkart.com/"
const selectors = {
    phoneInput:".VJZDxU",
    requestOtpButton:"._3NgS1a",
    otpInput:"._1WRfas"
}
const OTP: NightwatchTests = {
    "opening flipkart login page": () => {
        if (testEnv == 'cloudDesktop') {
            browser
                .url(webUrl)
                .maximizeWindow()
        }
    },
    "entering phone number and clicking on continue": () => {
        if (testEnv == 'cloudDesktop') {
            browser
                .setValue(selectors.phoneInput, process.env.PHONE_NUMBER as string)
                .click(selectors.requestOtpButton)
        }
    },
    "get otp from phone": async () => {
        if (testEnv == 'cloudSIMMobile') {
            browser.execute<any>('mobile: listSms', [], (res) => {
                let items = res.value.items as any[]
                if (items.length > 0) {
                    let recentOtpMsg = items[0]
                    let otp = recentOtpMsg?.body.substring(0, 6)
                    fs.writeFileSync('otp', otp)
                }
            })
        }
    },
    "entering otp recevied from phone":  async () => {
        if (testEnv == 'cloudDesktop') {
            await new Promise((resolve)=>{
                let interval = setInterval(()=>{
                    if(fs.existsSync('otp')){
                        clearInterval(interval)
                        resolve(null)
                    }
                },1000)
            })
            let otp = fs.readFileSync('otp').toString('utf-8')
            fs.unlinkSync('otp')
            browser.click(selectors.otpInput)
            browser.perform(function (): any {
                //@ts-ignore
                let actions = this.actions()
                return actions.sendKeys(otp)
            })
            browser.pause(10000)
        }
    }
}

export default OTP