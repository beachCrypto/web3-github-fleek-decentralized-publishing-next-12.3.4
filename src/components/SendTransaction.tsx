import * as React from 'react';
import { useDebounce } from 'use-debounce';
import {
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction,
} from 'wagmi';
import { parseEther } from 'viem';

export function SendTransaction() {
  const [amount, setAmount] = React.useState('');
  const [debouncedAmount] = useDebounce(amount, 500);

  const { config } = usePrepareSendTransaction({
    // TODO: Replace with your own address
    to: '0x78A545083B4517857CfFcC064819C954aB366480',
    value: debouncedAmount ? parseEther(debouncedAmount) : undefined,
  });
  const { data, sendTransaction } = useSendTransaction(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendTransaction?.();
      }}
    >
      <input
        type="number"
        min="0"
        step=".001"
        aria-label="Amount (ether)"
        onChange={(e) => setAmount(e.target.value)}
        placeholder="0.05"
        value={amount}
      />
      <button
        className="rounded-full font-bold mt-4 self-center mx-3 px-8 py-3 px-3 py-1 bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white"
        disabled={isLoading || !sendTransaction || !amount}
      >
        {isLoading
          ? 'Sending...'
          : 'Donate ETH to the author with 🦊 MetaMask'}
      </button>
      {isSuccess && (
        <div>
          Successfully sent {amount} ether to
          {/* // TODO: Replace with your own address */}
          0x78A545083B4517857CfFcC064819C954aB366480
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>
              Etherscan
            </a>
          </div>
        </div>
      )}
    </form>
  );
}
