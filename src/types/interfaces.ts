export interface FlipCardProps {
  frontImageSrc: string
  altText: string
  value: string | number
  width?: string | number
  height?: string | number
  flipped: boolean
}

export interface GameCard {
  url: string
  flipped: boolean
  value: string | number
  guessed: boolean
}
