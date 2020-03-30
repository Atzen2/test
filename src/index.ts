import * as bip39 from 'bip39'
import {passphrase} from '@blobaa/ardor-ts'

export const greetings = (name: string): string => {
    return "Hello " + name + "!! Random passphrase: " + bip39.generateMnemonic();
}

export const greetings2 = (name: string): string => {
    return "Hello " + name + "!! Random passphrase: " + passphrase.generate();
}