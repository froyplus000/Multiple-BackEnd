function LogIn() {
  return (
    <section className="m-auto w-[80dvw] flex flex-col gap-5 justify-center items-center min-h-[85dvh]">
      <h1 className="text-6xl mb-8">Log In</h1>
      <form className="flex flex-col gap-4 w-full max-w-[60dvw]">
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </form>
    </section>
  );
}

export default LogIn;
