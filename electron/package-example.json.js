export const conf = {
  "name": "electron-app",
  "version": "0.0.0",
  "main": "index.js",
  "build": {
    "appId": "com.threeq.app",
    "productName":"electron-app",
    "copyright":"@Three",
    "compression": "store",
    "directories": {
      "output": "build"
    },
    "asar": false,
    "extraResources":  {
      "from": "./app-update.yml",
      "to": "./b.txt"
    },
    "win": {
      "icon": "xxx/icon.ico",
      "target": ["exe","zip"],
      "extraResources":  {
        "from": "./app-update.yml",
        "to": "./b.txt"
      }
    },
    "nsis": {
      "oneClick": false,
      "guid": "xxxx",
      "perMachine": true,
      "allowElevation": true,
      "allowToChangeInstallationDirectory": true,
      "installerIcon": "./build/icons/aaa.ico",
      "uninstallerIcon": "./build/icons/bbb.ico",
      "installerHeaderIcon": "./build/icons/aaa.ico",
      "createDesktopShortcut": true,
      "createStartMenuShortcut": true,
      "shortcutName": "xxxx"
    },
    "mac": {
      "target": ["dmg","zip"]
    }
  }
}
