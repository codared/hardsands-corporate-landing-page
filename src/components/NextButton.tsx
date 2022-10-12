import { Flex , FlexProps} from '@chakra-ui/react'
import React from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

type NextButtonProps = {
  showControlsAbove?: boolean
  onClick?: () => void
  rounded?: boolean
  right?: number,
  arrowColor?: string
  overrideContainerStyle?: FlexProps
}

const NextButton: React.FC<NextButtonProps> = ({
  showControlsAbove,
  onClick,
  rounded,
  arrowColor,
  right = 0,
  overrideContainerStyle
}) => {
  return (
    <Flex
      zIndex={1}
      justify="center"
      align="center"
      display="inline-flex"
      top={showControlsAbove ? 4 : '50%'}
      transform="translate(-0, -50%)"
      right={right}
      position="absolute"
      color={arrowColor}
      bgColor={rounded ? 'seaMist' : 'initial'}
      borderRadius="round"
      w={['50px', null, '62px']}
      h={['50px', null, '62px']}
      cursor="pointer"
      onClick={onClick}
      {...overrideContainerStyle}
    >
      <MdOutlineArrowForwardIos size={34} />
    </Flex>
  )
}

export default NextButton
