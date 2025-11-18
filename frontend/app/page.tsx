export default function Home() {
  return (
    <>
      <header>
        <h1 className="">Welcome</h1>
      </header>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="">
          <ol>
            <li>
              <a href="./users">Users</a>
            </li>
            <li>
              <a href="./register">Register new User</a>
            </li>
          </ol>
        </main>
      </div>
    </>
  );
}
