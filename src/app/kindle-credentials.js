const keytar = require('keytar')

const SERVICE = 'HakuNeko-Kindle'
const ACCOUNT = 'default'

async function setKindleCredentials({ gmail, appPassword, kindleEmail }) {
    await keytar.setPassword(SERVICE, `${ACCOUNT}-gmail`, gmail || '')
    await keytar.setPassword(SERVICE, `${ACCOUNT}-appPassword`, appPassword || '')
    await keytar.setPassword(SERVICE, `${ACCOUNT}-kindleEmail`, kindleEmail || '')
}

async function getKindleCredentials() {
    const gmail = await keytar.getPassword(SERVICE, `${ACCOUNT}-gmail`)
    const appPassword = await keytar.getPassword(SERVICE, `${ACCOUNT}-appPassword`)
    const kindleEmail = await keytar.getPassword(SERVICE, `${ACCOUNT}-kindleEmail`)
    return { gmail, appPassword, kindleEmail }
}

async function deleteKindleCredentials() {
    await keytar.deletePassword(SERVICE, `${ACCOUNT}-gmail`)
    await keytar.deletePassword(SERVICE, `${ACCOUNT}-appPassword`)
    await keytar.deletePassword(SERVICE, `${ACCOUNT}-kindleEmail`)
}

module.exports = {
    setKindleCredentials,
    getKindleCredentials,
    deleteKindleCredentials
} 