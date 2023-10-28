import { ChangeEvent, useState } from 'react';
import { FcCheckmark, FcCancel } from 'react-icons/fc';
import { ErrorMessage } from './ErrorMessage';
import { containsAll } from './validate';

export function ValidatedInput() {
  const [password, setPassword] = useState('');

  function handlePassword(e: ChangeEvent) {
    const value = (e.target as HTMLInputElement).value;
    setPassword(value);
  }

  return (
    <div className="flex flex-col w-72 h-1/5 justify-between text-black">
      <label className="basis-1/2">
        <span className="font-semibold">Password:</span>
        <div className="flex items-center gap-x-4">
          <input
            value={password}
            className="w-4/5 rounded-md bg-zinc-200 p-1 border-2 border-neutral-400"
            type="password"
            onChange={(e) => handlePassword(e)}
          />
          {password.length >= 8 && containsAll(password) ? (
            <FcCheckmark />
          ) : (
            <FcCancel />
          )}
        </div>
      </label>
      <div className="basis-1/2 text-red-600">
        <ErrorMessage password={password} />
      </div>
    </div>
  );
}
