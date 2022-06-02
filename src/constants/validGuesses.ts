import { CONFIG } from './config'

export const VALIDGUESSES = [
'li sayd',
'timiiw',
'latonṉ',
'faamii',
'mazhii',
'enn sel',
'raar',
'oobor',
'awihi',
'koover',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
