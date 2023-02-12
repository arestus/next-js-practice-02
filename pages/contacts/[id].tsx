import Head from "next/head";
import { GetServerSideProps } from "next";
import Heading from "../../components/Heading";
import ContactInfo from "../../components/ContactInfo";
import { FC } from "react";
import { contactType } from "../../types";

type contactTypeProps = {
  contact: contactType;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contact: data },
  };
};

const Contact: FC<contactTypeProps> = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Conctact</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;
