import { useEffect } from 'react'
import { createUpdateEffect } from '../createUpdateEffect'

export default createUpdateEffect(useEffect)
// export default createUpdateEffect(useLayoutEffect)

// useUpdateEffect(effect: React.EffectCallback, deps?: React.DependencyList)
