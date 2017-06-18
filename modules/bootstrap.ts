import { app, BrowserWindow } from 'electron'
import { url } from './backend/dev'
import controller from './backend/controller'
import { cleanTmpdir } from './common/file-utils'

cleanTmpdir()

app.on('ready', () => {
  controller.start()
})
