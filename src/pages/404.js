import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <img 
        src="https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg"  
        alt="error 404"
        style={{}}
      />
      <Link href={"/"}>
        <h1>404 - Page Not Found</h1>
        <span> Click to go home </span>
      </Link>
    </>
  )
}