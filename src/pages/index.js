import * as React from "react";

const Page = ({ data, serverData }) => {
  const { site } = data;
  const { dogImage } = serverData;
  return `${site} ${dogImage}`;
};

export async function getServerData() {
  const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
  const data = await res.json();

  return {
    props: {
      dogImage: data,
    },
  };
}

export default Page;
