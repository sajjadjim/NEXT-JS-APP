// "use client";
import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      id: "1abcd1",
      tittle: "Blog 1",
      content: "This is the content of blog 1",
    }, {
      id: "2abcd1",
      tittle: "Blog 2",
      content: "This is the content of blog 1",
    }, {
      id: "3abcd1",
      tittle: "Blog 3",
      content: "This is the content of blog 1",
    }, {
      id: "4abcd1",
      tittle: "Blog 4",
      content: "This is the content of blog 1",
    },
  ]
  // console.log("Rendering Home Page");
  return (
    <main className="text-center text-2xl">
      <h1 className="mt-10">Welcome to My Blogs Page</h1>
      <ul className="mt-10 grid items-center justify-center gap-5">
        {
          blogs.map((blog) => (
            <li className="border-2  rounded-xl py-2 px-4" key={blog.id}><Link href={`/blogs/${blog.id}`}>{blog.tittle}</Link></li>
          ))
        }
      </ul>
    </main>
  );
}

//  <ul>
//         {
//         blogs.map((blog) => {
//           <li key={blog.id}>{blog.tittle}</li>
//         })
//       }
//       </ul>
