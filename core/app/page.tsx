import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome home!</h1>

      <nav className="flex flex-col">
        <div>
          <Link href="/products" className="block">
            Products
          </Link>
        </div>
        <div>
          <Link href="/febe" className="block">
            Frontend Backend
          </Link>
        </div>
        <div>
          <Link href="/docs/112/3232" className="block">
            Slug accepting all urls
          </Link>
        </div>
        <div>
          <Link href="/complex-dashboard" className="block">
            Complex dashboard slot concept
          </Link>
        </div>
        <div>
          <Link href="/login" className="block">
            Grouping concept (Login)
          </Link>
        </div>
      </nav>
    </div>
  );
}
