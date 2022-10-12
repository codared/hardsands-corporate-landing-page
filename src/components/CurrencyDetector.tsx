import React from 'react'

import { useDetectAndSetCurrency } from '../hooks/useDetectAndSetCurrency'

const CurrencyDetector: React.FC = () => {
  useDetectAndSetCurrency()

  return null
}

export default CurrencyDetector
