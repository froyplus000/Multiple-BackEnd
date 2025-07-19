function SignUp() {
  return (
    <section className="m-auto w-[80dvw] flex flex-col gap-5 justify-center items-center min-h-[85dvh]">
      <h1 className="text-6xl mb-8">Create an account</h1>
      <form className="flex flex-col gap-4 w-full max-w-[60dvw]">
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered w-full"
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </section>
  );
}

export default SignUp;
