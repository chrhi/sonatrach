import React from "react";
import Head_change from "next/head";

function Head() {
  return (
    <Head_change>
      <title>Sonatrach</title>
      <meta name="description" content="project managment platform" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
      <link rel="manifest" href="/logo.png" />
    </Head_change>
  );
}

export default Head;
