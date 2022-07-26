import { Flex, Divider } from '@chakra-ui/core'
import React, { FC } from 'react'
import { useRTL } from '../../../i18n/hooks'
import { ForwardArrow } from '../Icons/ForwardArrow'
import { BackArrow } from '../Icons/BackArrow'
import { ArrowDirection } from '../../types'

interface CarouselControlsProps {
  hideForwardArrow?: boolean
  hideBackArrow?: boolean
  onClick: (value: ArrowDirection) => void
}

const CarouselControls: FC<CarouselControlsProps> = ({ hideForwardArrow,  hideBackArrow, onClick }) => {
  const { isRTL } = useRTL()

  return (
    <Flex
      position="absolute"
      bottom="20px"
      right={isRTL ? "unset": "0px"}
      left={isRTL ? "0px": "unset"}
      align="center"
      justify="center"
    >
      {!hideBackArrow && <BackArrow onClick={() => onClick('prev')} />}
      {!hideForwardArrow && <ForwardArrow onClick={() => onClick('next')} />}
    </Flex>
  )
}

export default CarouselControls