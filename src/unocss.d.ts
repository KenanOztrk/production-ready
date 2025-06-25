import 'react'

declare module 'react' {
  interface HTMLAttributes {
    [key: string]: unknown
  }
}
