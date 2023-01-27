import React, { useEffect, useRef, useState } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

const OktaSignInWidget = (props, { onSuccess, onError }) => {
  const widgetRef = useRef();

  const [widgetVis, setWidgetVis] = useState('visible')
  useEffect(() => {
    if (!widgetRef.current) {
      return false;
    }

    const widget = new OktaSignIn({
        issuer:'https://greenway-poc.okta.com/oauth2/default',
        clientId:"0oa3z0rpoegDynKws697",
        redirectUri:"https://greenwayspa.herokuapp.com/login/callback",
        useInteractionCodeFlow: true
    });

   // Search for URL Parameters to see if a user is being routed to the application to recover password
   var searchParams = new URL(window.location.href).searchParams;
   widget.otp = searchParams.get('otp');
   widget.state = searchParams.get('state');
   widget.showSignInToGetTokens({
      el: widgetRef.current,
    }).then((result)=>{
        //setWidgetVis('hidden')
        widget.remove();
    }).catch(onError);

    return () => widget.remove();
  }, [onSuccess, onError]);

  return (<div style={{visibility:widgetVis}} ref={widgetRef} />);
};

export default OktaSignInWidget;