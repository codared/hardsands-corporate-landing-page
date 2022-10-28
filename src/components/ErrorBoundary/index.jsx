import {
  Box, Flex, Heading,
  Text, Button
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import React, { ReactElement } from "react";
import * as Sentry from "@sentry/react";
import HardsandsButton from 'components/HardsandsButton';
import { useTranslation } from 'react-i18next';

class ErrorBoundary extends React.Component {
  constructor(
    props
  ) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // use own error logging service here
    // console.log('error >>> ', { error, errorInfo });
    Sentry.captureException(error);

  }
  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Box textAlign="center" py={10} px={6}>
          <Box display="inline-block">
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              bg={'red.500'}
              rounded={'50px'}
              w={'55px'}
              h={'55px'}
              textAlign="center">
              <CloseIcon boxSize={'20px'} color={'white'} />
            </Flex>
          </Box>
          <Heading as="h2" size="xl" mt={6} mb={2}>
            {this.props.t('error:opps-there-is-an-error', 'Oops, there is an error!')}
          </Heading>
          <Text color={'gray.500'}>
            {this.props.t('error:something-went-wrong', 'Something went wrong. We have gotten notified about this issue and we will take a look at it shortly.')}
          </Text>
          <Box h={50} />
          <HardsandsButton
            colorScheme="teal"
            bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
            color="white"
            variant="solid"
            m="0 auto"
            href={'/'}
          >
            {this.props.t('error:go-to-home', 'Go to Home')}
          </HardsandsButton>
        </Box>
      );
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;
