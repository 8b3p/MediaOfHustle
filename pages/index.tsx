import Link from "next/link";


export default function Home() {
  return (
    <>
      <Link className="btn btn-primary" href="/about">About</Link>
      <Link className="btn btn-primary" href="/contact">contact</Link>
    </>
  )
}
