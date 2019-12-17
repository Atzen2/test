import * as bip39 from 'bip39'
import { passphrase } from '@somedotone/ardor-ts'

export const greetings = (name: string): string => {
    return "Hello " + name + "!! Random passphrase: " + bip39.generateMnemonic();
}

export const createPassphrase = (): string => {
    return passphrase.generate();
} 