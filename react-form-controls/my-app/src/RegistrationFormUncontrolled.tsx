import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  const inputCn =
    'w-full rounded-md bg-zinc-300 p-1 border-2 border-neutral-400';

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const { username, password } = Object.fromEntries(formData.entries());
    console.log('uncontrolled:', username, password);
  }

  return (
    <form
      className="flex flex-col w-60 h-1/3 justify-between bg-white text-black p-4 rounded-lg"
      onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col justify-between basis-1/2">
        <p className="font-bold">Uncontrolled</p>
        <label>
          Username:
          <input
            name="username"
            className={inputCn}
            type="text"
            autoComplete="off"
          />
        </label>
        <label>
          Password:
          <input name="password" className={inputCn} type="password" />
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
