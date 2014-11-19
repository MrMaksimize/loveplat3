module.exports = {
  title: process.env.APP_TITLE || 'LovePlatform',
  machineTitle: process.env.MACHINE_TITLE || 'loveplatform',
  heading: process.env.HEADING || 'I Love LovePlatform Because...',
  shareUrl: process.env.SHARE_URL || 'http://bit.ly/loveplatform',
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
    shareText: process.env.TWITTER_SHARETEXT || 'I love LovePlatform Because',
    shareHash: process.env.TWITTER_SHAREHASH || 'loveplatform',
  },
  fb: {
    appId: '12345'
  },
  afterSubmit: {
    popUpSharePrompt: false,
  }
};

