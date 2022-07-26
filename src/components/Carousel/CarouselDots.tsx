import { Flex, Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

import { DotPosition } from './Carousel'

type CarouselDotsProps = BoxProps & {
  total: number
  currentIndex: number
  onDotClick: (index: number) => void
  isGallery: boolean
  absoluteDots?: boolean
  imagePaths: string[]
  imgAlt?: string
  dotPosition: DotPosition
  galleryWidth?: string | string[]
  galleryHeight?: string | string[]
  roundDots?: boolean
}

const CarouselDots: React.FC<CarouselDotsProps> = ({
  total,
  currentIndex,
  onDotClick,
  isGallery,
  imagePaths,
  imgAlt,
  bg = 'black',
  absoluteDots = false,
  dotPosition,
  galleryWidth,
  galleryHeight,
  roundDots,
  ...rest
}) => {
  const dots: React.ReactNode[] = []

  const getDotsDirection = (dotPosition: DotPosition) => {
    switch(dotPosition) {
      case 'right':
      case 'left':
        return 'column'
      default:
        return 'row'
    }
  }

  if (!isGallery) {
    for (let i = 0; i < total; i++) {
      dots.push(
        <Box
          as="span"
          key={i}
          cursor="pointer"
          borderRadius={roundDots ? 'round' : 'none'}
          borderWidth="0.5px"
          boxSizing="border-box"
          w="12px"
          h="12px"
          ml="5px"
          bg={i === currentIndex ? bg : 'none'}
          onClick={() => onDotClick(i)}
        />
      )
    }
  } else {
    for (let i = 0; i < total; i++) {
      dots.push(
        <Flex
          display={['none', 'flex']}
          as="span"
          key={i}
          cursor="pointer"
          borderRadius={roundDots ? 'round' : 'none'}
          borderWidth="1px"
          boxSizing="border-box"
          p="5px"
          w={galleryWidth || '40px'}
          h={galleryHeight || '40px'}
          ml={
            dotPosition === 'left' ||
            dotPosition === 'right'
              ? 0 : '5px'
          }
          mb={
            dotPosition === 'left' ||
            dotPosition === 'right'
              ? '5px' : 0
          }
          borderColor={i === currentIndex ? 'brand.300' : 'transparent'}
          bg="offwhite3"
          onClick={() => onDotClick(i)}
        >
          <Box
            as="img"
            src={imagePaths[i]}
            alt={imgAlt}
            objectFit="cover"
            borderRadius={roundDots ? 'round' : 'none'}
          />
        </Flex>
      )
    }
  }
  return (
    <Flex
      direction={getDotsDirection(dotPosition)}
      bottom={6}
      zIndex={1}
      position={absoluteDots ? 'absolute' : 'static'}
      justify="space-around"
      align="center"
      {...rest}
    >
      {dots}
    </Flex>
  )
}

export default CarouselDots
