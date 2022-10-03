import { useState } from 'react'
import Script from 'next/script'
import { Box } from '@chakra-ui/react';
import config from 'core/config';
import { verifyGoogleAuth } from '../services';
import { setCookie } from 'modules/shared/cookie';
import { HARDSANDS_LOGIN_COOKIE, APP_ROUTE } from '../constants';
import { useRouter } from 'next/router';

declare global {
  interface Window {
      google:any;
  }
}



export default function GoogleLogin({type, setIsLoading, setAlertMessage}:{
  type: 'signup' | 'login',
  setIsLoading: (loading: any) => void,
  setAlertMessage: (message: any) => void
}) {

  const router = useRouter()

  const handleCredentialResponse = async (response: any) => {
    setIsLoading(true)
    const credential = response.credential
    //TODO HANDLE ERROR WHERE CREDENTIAL IS NOT RETURNED
    try {
      const res = await verifyGoogleAuth({token: credential})
      if (res.isError) {
        setAlertMessage({
          status: "error",
          name: res.name,
          message: res.message as string,
        });
      } else {
        setAlertMessage({
          status: "success",
          name: "Redirecting",
          message: res.result.message as string,
        });
        setCookie(HARDSANDS_LOGIN_COOKIE, res.result.token, 365);
        router.push(APP_ROUTE.home);
      }

      setIsLoading(false);
    } catch (error) {
      // Sentry.exception();
      setIsLoading(false);
      setAlertMessage({
        status: "error",
        name: "Error",
        message: "An error occurred logging you in via Google. Please try again or contact support.",
      });
    }

  }

  const domain = config("APP_URL")
  const clientId = config("CLIENT_ID")

  console.log(domain, clientId)
  return (
    <>
      <Script
        src="https://accounts.google.com/gsi/client?key=AIzaSyDRBEY5uBiymzealrGq4wS-xFdpDYMFOfk"
        onLoad={() => {
          window.google.accounts.id.initialize({
            client_id: clientId,
            callback: handleCredentialResponse,
            login_uri: type === 'login' ? `${domain}/login` : `${domain}/signup`,
            ux_mode: "popup",

          });
          window.google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { 
              theme: "outline", 
              size: "large", 
              text: type === 'login' ? "login_with" : "signup_with",
              type: "standard"
            
            }  
          );
        }}
        strategy="afterInteractive"
      />

      <Box width="full" id="buttonDiv" ></Box>
    </>
  )
}