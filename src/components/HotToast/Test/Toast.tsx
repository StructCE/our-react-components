import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.custom(<div>Hello World</div>);

export function ToastExample() {
  return (
    <div>
      <button onClick={notify}>Fazer uma TOAOAOAS</button>
      <Toaster />
    </div>
  );
}
