import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";
import { GetStaticProps } from "next";
import { FC } from "react";
import { contactType } from "../../types";

type contactsTypeProps = {
  contacts: [contactType];
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contacts: data },
  };
};

const Contacts: FC<contactsTypeProps> = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts" tag="h1" />
      <ul>
        {contacts &&
          contacts.map(({ id, name, email }) => (
            <li key={id}>
              <Link style={{ color: "white" }} href={`/contacts/${id}`}>
                {name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Contacts;
