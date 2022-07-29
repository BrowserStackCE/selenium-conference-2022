![Logo](https://www.browserstack.com/images/static/header-logo.jpg)

# Selenium Conference 2022 <a href="https://nodejs.org"><img src="https://cdn.svgporn.com/logos/nodejs.svg" alt="Node.js" height="22" /></a> <a href="https://nightwatchjs.org"/><image src="https://cdn.svgporn.com/logos/nightwatch.svg" height="22" alt="NightWatch"></a>

# Repository setup

- Clone the repository
- Ensure you have Node.js >= 14
- To install repository dependencies run:
```
npm install 
or 
yarn install

```
- Environment Variables
  - BrowserStack Username `BROWSERSTACK_USERNAME`
  - BrowserStack Access key `BROWSERSTACK_ACCESS_KEY`
  - Phone number for Mobile SMS OTP use cases
    - `PHONE_NUMBER`
  - Video download location for audio video conference use case
    - `VIDEO_USER_1_DLOC`
    - `VIDEO_USER_2_DLOC`
    - `VIDEO_USER_3_DLOC`
  - Audio download location for audio video conference use case
    - `AUDIO_USER_1_DLOC`
    - `AUDIO_USER_2_DLOC`
    - `AUDIO_USER_3_DLOC`
  - Video machine location for audio video conference use case
    - `VIDEO_USER_1_MLOC`
    - `VIDEO_USER_2_MLOC`
    - `VIDEO_USER_3_MLOC`
  - Audio machine location for audio video conference use case
    - `AUDIO_USER_1_MLOC`
    - `AUDIO_USER_2_MLOC`
    - `AUDIO_USER_3_MLOC`

# Test Scenerios

| Test Name | Test Command
|----|---------
| Video Conferencing | `npm run audio-video-conf`
| Mobile OTP Verification | `npm run otp`
| Two Factor Authentication | `npm run desktop-mobile-otp`
| Geolocation | `npm run locate-store`

# Additional Details
- For running tests using Mobile Device SIM cards on BrowserStack, please reach out to [Sales](https://www.browserstack.com/contact#sales).
- All other test cases included in this repository can be run using on a BrowserStack free trial using the free trial minutes and free trial devices offered.
