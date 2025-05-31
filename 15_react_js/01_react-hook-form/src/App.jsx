import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-800 text-white p-6 rounded-md w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">Sign Up Form</h2>

        <input
          type="text"
          {...register("name", { required: true })}

          placeholder="Name"
          className="w-full px-4 py-2 bg-gray-700 text-white rounded"
        />

        <input
          type="email"
          {...register("email")}
          placeholder="Email"
          className="w-full px-4 py-2 bg-gray-700 text-white rounded"
        />

        <input
          type="password"
          {...register("password")}
          placeholder="Password"
          className="w-full px-4 py-2 bg-gray-700 text-white rounded"
        />

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded">
          {isSubmitting ? "Submitting..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default App;
