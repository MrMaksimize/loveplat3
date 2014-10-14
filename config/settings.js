module.exports = {
  title: process.env.APP_TITLE || 'LovePlatform',
  machineTitle: process.env.MACHINE_TITLE || 'loveplatform',
  heading: 'I Love LovePlatform Because...',
  shareUrl: 'http://bit.ly/loveplatform',
  form: {
    textLabel: 'Message',
    textPlaceHolder: 'Message',
    twitterLabel: '@',
    twitterPlaceHolder: 'Twitter',
    submitButtonText: 'Submit'
  },
  notes: {
    displayInitial: 9,
    voting: false,
    tweeting: false,
  },
  twitter: {
    shareText: 'I love LovePlatform Because',
    shareHash: 'loveplatform',
  },
  fb: {
    appId: '12345'
  },
  afterSubmit: {
    popUpSharePrompt: false,
  }
};

