import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import custom from "@/style/custom.module.css";

const roboto = Roboto({
  weight: "100",
  style: "italic",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const Links = [
    { title: "Products", link: "products" },
    { title: "Add Product", link: "addproduct" }
];

  const { red, green, white } = custom; // extract classes

  return (
    <main className=" ">
      <h1>Next API with Mongodb atlas - Dhruv Learning</h1>
      <ul className="flex flex-wrap gap-10 bg-black px-10 py-4">
        {Links.map((item, key) => (
          <li className={red} key={key}>
            <Link href={item.link} className={white}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

// export function generateMetadata({ params }) {
//   return {
//     title: "Next Js Learning For Dhruv",
//     description: 'description of Next Js Learning For Dhruv'
//   };
// }
