export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black px-6 py-12 text-center">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-sm italic text-zinc-400">
          If your post-sales ops need structure — let&apos;s build it.
        </p>
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} Swajit Patwari
        </p>
      </div>
    </footer>
  );
}
