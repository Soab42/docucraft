import ContentDisplay from "@/components/ContentDisplay";
import React from "react";

export default function DocsPage({ params }) {
  const { name } = params;
  return <ContentDisplay id={name} />;
}
