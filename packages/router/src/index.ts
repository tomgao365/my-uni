import type { RouteLocationNormalized, Router } from './types'
import { inject } from 'vue'
import { routeKey, routerKey } from './router'

export { createRouter } from './router'
export * from './types'

export function useRouter(): Router {
  return inject(routerKey)!
}

export function useRoute(): RouteLocationNormalized {
  return inject(routeKey)!
}
