import { CONFIG } from './config'

export const VALIDGUESSES = [
  'Li sayd',
  'timiiw',
  'latonṉ',
  'Faamii̱',
  'Mazhii',
  'enn sel',
  'raar',
  'Oobor',
  'Awihi̱',
  'Koover',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
