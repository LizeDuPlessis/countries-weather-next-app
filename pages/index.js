import Header from "../Components/Header";
import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="keywords" content="weather_countries" />
        <title>Home | Page</title>
      </Head>

      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat et
        voluptatum cupiditate suscipit molestias. Esse iusto veniam aliquam
        deleniti veritatis, labore perferendis. Aspernatur distinctio ex alias
        nostrum debitis iure!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione earum
        qui eligendi in, tempora necessitatibus, voluptates itaque, laboriosam
        ut alias sequi maxime quaerat error placeat nisi similique odio quasi
        debitis.
      </p>
    </div>
  );
}
