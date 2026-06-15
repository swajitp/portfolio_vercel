export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center">
          Comfortable in chaos. Endlessly curious, always learning.
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Swajit Patwari
        </p>
      </div>
    </footer>
  );
}
