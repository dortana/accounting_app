import { authClient } from '@/lib/auth-client';
import React from 'react';
import { Button } from './ui/button';
import { GoogleIcon } from './icons/GoogleIcon';
import MicrosoftIcon from './icons/MicrosoftIcon';

const SocialLogin = () => {
  const [isloadingGoogle, setIsLoadingGoogle] = React.useState(false);
  const [isloadingMicrosoft, setIsLoadingMicrosoft] = React.useState(false);
  const signInWithGoogle = async () => {
    setIsLoadingGoogle(true);
    await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/panel/dashboard',
    });
    setIsLoadingGoogle(false);
  };
  const signInWithMicrosoft = async () => {
    setIsLoadingMicrosoft(true);
    await authClient.signIn.social({
      provider: 'microsoft',
      callbackURL: '/panel/dashboard',
    });
    setIsLoadingMicrosoft(false);
  };
  return (
    <div className='flex gap-2'>
      <Button
        variant='outline'
        onClick={signInWithGoogle}
        isLoading={isloadingGoogle}
        className='flex-1'
      >
        <GoogleIcon />
        Google
      </Button>
      <Button
        variant='outline'
        onClick={signInWithMicrosoft}
        isLoading={isloadingMicrosoft}
        className='flex-1'
      >
        <MicrosoftIcon />
        Microsoft
      </Button>
    </div>
  );
};

export default SocialLogin;
