"use client";
import React, { useRef } from "react";
import Container from "@/components/atoms/container/Container";
import H2 from "@/components/atoms/h2/H2";
import { useInView } from "framer-motion";
import ContactItem from "@/components/atoms/contact-item/ContactItem";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" className="pb-20" ref={ref}>
      <Container>
        <H2 className="overflow-hidden">
          <span
            className="block"
            style={{
              transform: isInView ? "none" : "translateY(100%)",
              transition: "all 0.3s ease 0.1s",
            }}
          >
            Contact
          </span>
        </H2>
        <ul className="my-5 space-y-2">
          {links.map((item, idx) => (
            <ContactItem item={item} key={item.site + idx} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Contact;

const links = [
  {
    site: "Linkedin",
    text: "/lucio-quevedo",
    link: "https://www.linkedin.com/in/lucio-quevedo/",
  },
  {
    site: "Github",
    text: "@lucioquevedo",
    link: "https://github.com/lucioquevedo",
  },
  {
    site: "Email",
    text: "lucio.thomas.quevedo@gmail.com",
    link: "mailto:lucio.thomas.quevedo@gmail.com",
  },
];
