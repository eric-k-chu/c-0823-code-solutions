import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled';
import { RegistrationFormControlled } from './RegistrationFormControlled';

function App() {
  return (
    <div className="flex justify-center items-center h-screen gap-x-4">
      <RegistrationFormUncontrolled />
      <RegistrationFormControlled />
    </div>
  );
}

export default App;
