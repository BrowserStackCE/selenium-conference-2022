module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ["dist/tests"],

  // See https://nightwatchjs.org/guide/concepts/page-object-model.html
  page_objects_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  custom_commands_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  custom_assertions_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  // plugins: [],

  // See https://nightwatchjs.org/guide/concepts/test-globals.html
  globals_path: "",

  parallel_process_delay: 0,

  webdriver: {
    start_process: true,
    server_path: require("chromedriver").path,
  },

  test_settings: {
    default: {
      screenshots: {
        enabled: false,
        path: "screens",
        on_failure: true,
      },

      desiredCapabilities: {
        browserName: "chrome",
      },
    },

    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for using the browserstack.com cloud service                    |
    //                                                                               |
    // Please set the username and access key by setting the environment variables:  |
    // - BROWSERSTACK_USERNAME                                                       |
    // - BROWSERSTACK_ACCESS_KEY                                                     |
    // .env files are supported                                                      |
    //////////////////////////////////////////////////////////////////////////////////
    browserstack: {
      selenium: {
        host: "hub.browserstack.com",
        port: 443,
      },
      // More info on configuring capabilities can be found on:
      // https://www.browserstack.com/automate/capabilities?tag=selenium-4
      desiredCapabilities: {
        "bstack:options": {
          userName: "${BROWSERSTACK_USERNAME}",
          accessKey: "${BROWSERSTACK_ACCESS_KEY}",
          projectName: "Selenium Conference 2022",
        },
      },

      webdriver: {
        timeout_options: {
          timeout: 15000,
          retry_attempts: 3,
        },
        keep_alive: true,
        start_process: false,
      },
    },
    // desktop: {
    //   extends: "webdriver",
    //   desiredCapabilities: {
    //     browserName: "chrome",
    //     browserVersion: "103.0",
    //     "goog:chromeOptions": {
    //       w3c: true,
    //       args: [
    //         "use-fake-device-for-media-stream",
    //         "use-fake-ui-for-media-stream",
    //         "no-sandbox",
    //         `use-file-for-fake-video-capture=${process.env.VIDEO_USER_1_MLOC}`,
    //         `use-file-for-fake-audio-capture=${process.env.AUDIO_USER_1_MLOC}`,
    //       ],
    //     },
    //   },
    // },
    desktop: {
      extends: "browserstack",
      desiredCapabilities: {
        browserName: "edge",
        browserVersion: "100.0",
        "bstack:options": {
          os: "OS X",
          osVersion: "Mojave",
          idleTimeout: "300",
          buildName: `Selenium Conference ${process.env.BUILD_TS}`,
          debug: "true",
          maskCommands: "setValues, getValues, setCookies, getCookies",
        },
        "goog:chromeOptions": {
          w3c: true,
          args: [
            "use-fake-device-for-media-stream",
            "use-fake-ui-for-media-stream",
            "no-sandbox",
            `use-file-for-fake-video-capture=${process.env.VIDEO_USER_1_MLOC}`,
            `use-file-for-fake-audio-capture=${process.env.AUDIO_USER_1_MLOC}`,
          ],
        },
      },
    },
    cloudDesktop: {
      extends: "browserstack",
      desiredCapabilities: {
        browserName: "chrome",
        browserVersion: "103.0",
        "bstack:options": {
          os: "OS X",
          osVersion: "Catalina",
          idleTimeout: "300",
          buildName: `Selenium Conference ${process.env.BUILD_TS}`,
          debug: "true",
          maskCommands: "setValues, getValues, setCookies, getCookies",
        },
        "goog:chromeOptions": {
          w3c: true,
          args: [
            "use-fake-device-for-media-stream",
            "use-fake-ui-for-media-stream",
            "no-sandbox",
            `use-file-for-fake-video-capture=${process.env.VIDEO_USER_2_MLOC}`,
            `use-file-for-fake-audio-capture=${process.env.AUDIO_USER_2_MLOC}`,
          ],
        },
      },
    },
    cloudMobile: {
      extends: "browserstack",
      desiredCapabilities: {
        browserName: "chrome",
        autoAcceptAlerts: "true",
        autoAcceptAlerts: "true",
        "bstack:options": {
          deviceName: "Samsung Galaxy S21",
          buildName: `Selenium Conference ${process.env.BUILD_TS}`,
          sessionName: "Mobile",
          idleTimeout: "300",
          debug: "true",
          maskCommands: "setValues, getValues, setCookies, getCookies",
        },
        "goog:chromeOptions": {
          w3c: true,
          args: [
            "use-fake-device-for-media-stream",
            "use-fake-ui-for-media-stream",
            `use-file-for-fake-video-capture=${process.env.VIDEO_USER_3_MLOC}`,
            `use-file-for-fake-audio-capture=${process.env.AUDIO_USER_3_MLOC}`,
          ],
        },
      },
    },
    cloudiPhoneMobile: {
      selenium: {
        host: "hub.browserstack.com",
        port: 443,
      },
      desiredCapabilities: {
        browserName: "safari",
        autoAcceptAlerts: true,
        "bstack:options": {
          appiumVersion: "1.22.0",
          projectName: "Selenium Conference 2022",
          deviceName: "iPhone 13",
          buildName: `Selenium Conference ${process.env.BUILD_TS}`,
          sessionName: "Mobile",
          idleTimeout: "300",
          debug: "true",
          userName: "${BROWSERSTACK_USERNAME}",
          accessKey: "${BROWSERSTACK_ACCESS_KEY}",
          maskCommands: "setValues, getValues, setCookies, getCookies",
        },
      },
    },
    cloudSIMMobile: {
      selenium: {
        host: "hub.browserstack.com",
        port: 443,
      },
      desiredCapabilities: {
        browserName: "chrome",
        autoAcceptAlerts: "true",
        autoGrantPermissions: "true",
        "bstack:options": {
          userName: "${BROWSERSTACK_TEST_USERNAME}",
          accessKey: "${BROWSERSTACK_TEST_ACCESS_KEY}",
          projectName: "Selenium Conference 2022",
          deviceName: "Samsung Galaxy S21",
          buildName: `Selenium Conference ${process.env.BUILD_TS}`,
          sessionName: "Mobile",
          debug: "true",
          maskCommands: "setValues, getValues, setCookies, getCookies",
        },
        "goog:chromeOptions": {
          w3c: true,
          args: [],
        },
      },
    },
  },
};
