import { ChangeEvent, FormEvent, useState } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const inputCn =
    'w-full rounded-md bg-zinc-300 p-1 border-2 border-neutral-400';

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log('controlled:', username, password);
  }

  function handleUsername(e: ChangeEvent) {
    const value = (e.target as HTMLInputElement).value;
    setUsername(value);
  }

  function handlePassword(e: ChangeEvent) {
    const value = (e.target as HTMLInputElement).value;
    setPassword(value);
  }

  return (
    <form
      className="flex flex-col w-60 h-1/3 justify-between bg-white text-black p-4 rounded-lg"
      onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col justify-between basis-1/2">
        <p className="font-bold">Controlled</p>
        <label>
          Username:
          <input
            value={username}
            className={inputCn}
            type="text"
            autoComplete="off"
            onChange={(e) => handleUsername(e)}
          />
        </label>
        <label>
          Password:
          <input
            value={password}
            className={inputCn}
            type="password"
            onChange={(e) => handlePassword(e)}
          />
        </label>
      </div>
      <button
        type="submit"
        className="self-end p-2 bg-green-400 rounded-lg border-2 border-neutral-400">
        Submit
      </button>
    </form>
  );
}
