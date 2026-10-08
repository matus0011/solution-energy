import * as React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string
          alt?: string
          poster?: string
          loading?: 'auto' | 'lazy' | 'eager'
          reveal?: 'auto' | 'interaction' | 'manual'
          'auto-rotate'?: boolean | ''
          'auto-rotate-delay'?: number | string
          'rotation-per-second'?: string
          'camera-controls'?: boolean | ''
          'touch-action'?: string
          'camera-orbit'?: string
          'camera-target'?: string
          'field-of-view'?: string
          'min-camera-orbit'?: string
          'max-camera-orbit'?: string
          'min-field-of-view'?: string
          'max-field-of-view'?: string
          'shadow-intensity'?: number | string
          'shadow-softness'?: number | string
          exposure?: number | string
          'environment-image'?: string
          environment_image?: string
          'skybox-image'?: string
          ar?: boolean | ''
          'ar-modes'?: string
          'ar-scale'?: string
          'interaction-prompt'?: 'auto' | 'none' | 'when-focused'
          'interaction-prompt-threshold'?: number | string
          seamless_poster?: boolean
          class?: string
        },
        HTMLElement
      >
    }
  }
}
