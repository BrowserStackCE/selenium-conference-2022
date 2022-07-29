import { NightwatchTests } from 'nightwatch';

const StoreLocator: NightwatchTests = {

    "opening apple india service page": () => {

        browser.url("https://locate.apple.com/in/en/service")

    },

    "enter or detect current GPS location": () => {


        browser
            .waitForElementVisible('#service-address')
            .click('#service-address')
            .setValue('#service-address', 'A')
            .click('button.form-textbox-button > span#textbox2_righticon')
            .acceptAlert()
            .execute(
                `navigator.geolocation.getCurrentPosition = function(cb){ 
                            cb({ 
                                coords: {
                                    accuracy: 20,
                                    altitude: null,
                                    altitudeAccuracy: null,
                                    heading: null,
                                    latitude: 13,
                                    longitude: 80,
                                    speed: null
                                    }
                                }); 
                            }`)
            .click('button.form-textbox-button > span#textbox2_righticon')
            //.click('.suggestions.visible > li')
    },


    "select product": () => {
        browser.click('select#service-products option[value=iPhone]');
    },


    "find service centers": () => {
        browser
            .useXpath()
            .waitForElementVisible("//button[text()='Go']")
            .click("//button[text()='Go']")
            .useCss()
            .waitForElementVisible('div.store-results-banner')
        //.moveToElement('div.store-results-banner', 10, 10)
    },
}

export default StoreLocator