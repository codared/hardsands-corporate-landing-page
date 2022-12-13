import { Flex, FlexProps } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'


type PrevButtonProps = {
  showControlsAbove?: boolean
  onClick?: () => void
  rounded?: boolean
  left?: string | number | [any],
  arrowColor?: string
  overrideContainerStyle? : FlexProps
}

const PrevButton: React.FC<PrevButtonProps> = ({
  showControlsAbove,
  onClick,
  rounded,
  left = 0,
  arrowColor,
  overrideContainerStyle
}) => {
  return (
    <Flex
      zIndex="header"
      justify="center"
      align="center"
      display="inline-flex"
      top={showControlsAbove ? 4 : '50%'}
      transform="translate(0, -50%)"
      left={left}
      position="absolute"
      bgColor={rounded ? 'seaMist' : 'initial'}
      borderRadius="round"
      w={['50px', null, '62px']}
      h={['50px', null, '62px']}
      cursor="pointer"
      color={arrowColor}
      onClick={onClick}
      {...overrideContainerStyle}
    >
      <MdOutlineArrowBackIosNew size={34} />
    </Flex>
  )
}

export default PrevButton
