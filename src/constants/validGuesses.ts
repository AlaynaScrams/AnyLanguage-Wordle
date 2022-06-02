import { CONFIG } from './config'

export const VALIDGUESSES = [
 'lisayd',
 'timiiw',
 'latonn',
 'faamii',
 'mazhii',
 'ennsel',
 'koover',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
