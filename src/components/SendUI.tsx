'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';

import { SendTransaction } from './SendTransaction';

export function SendUI() {
  const { isConnected } = useAccount();

  if (isConnected) {
    return (
      <div>
        {/* Account content goes here */}
        <SendTransaction />
      </div>
    );
  }

  return <div>{/* Connect wallet content goes here */}</div>;
}
