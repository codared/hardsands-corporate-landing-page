import { RefObject } from 'react'

export const scrollTo = (ref: RefObject<HTMLElement>) => {
  if (ref.current) {
    ref.current.scrollIntoView({
      behavior: "smooth",
    })
  }
}

export const scrollToByWindow = (ref: RefObject<HTMLElement>, offset?: number) => {
  if (ref.current) {
    window.scrollTo({
      behavior: 'smooth',
      top: offset ? ref.current.offsetTop - offset : ref.current.offsetTop
    })
  }
}