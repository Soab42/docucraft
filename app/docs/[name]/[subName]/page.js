import ContentDisplay from "@/components/ContentDisplay";
import React from "react";

export default function SubDocsPage({ params }) {
  const { subName } = params;
  return <ContentDisplay id={subName} />;
}
