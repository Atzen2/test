import * as bip39 from 'bip39'

export const greetings = (name: string): string => {
    return "Hello " + name + "!! Random passphrase: " + bip39.generateMnemonic();
}
