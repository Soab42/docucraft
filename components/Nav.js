"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav({ docs }) {
  const [rootNode, setRootNode] = useState([]);
  const [nonRootNodesGrouped, setNonRootNodesGrouped] = useState({});

  useEffect(() => {
    let matchDocs = docs;
    let nonRootDocs = {};
    const roots = matchDocs.filter((doc) => doc.parent === null);
    setRootNode(roots);

    const nonRoots = matchDocs.filter((doc) => doc.parent !== null);
    nonRoots?.forEach((doc) => {
      if (!nonRootDocs.hasOwnProperty(doc.parent)) {
        nonRootDocs[doc.parent] = [];
        nonRootDocs[doc.parent].push(doc);
      } else {
        nonRootDocs[doc.parent].push(doc);
      }
    });

    setNonRootNodesGrouped(nonRootDocs);
  }, [docs]);
  // console.log(nonRootNodesGrouped);
  return (
    <nav className="hidden lg:mt-10 lg:block">
      <ul role="list" className="border-l border-transparent">
        {rootNode?.map((doc) => {
          return (
            <li className="relative" key={doc.id}>
              <Link
                aria-current="page"
                className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
                href={`/docs/${doc.id}`}
              >
                <span className="truncate">{doc.title}</span>
              </Link>
              <ul role="list">
                {nonRootNodesGrouped[doc.title.toLowerCase()]?.map((subDoc) => {
                  return (
                    <li key={subDoc.id}>
                      <Link
                        className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        href={`/docs/${doc.id}/${subDoc.id}`}
                      >
                        <span className="truncate">{subDoc.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
