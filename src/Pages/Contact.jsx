import ContactForm from 'Components/ContactForm';
import { db } from 'Assets/database';

const Contact = () => {
  const { env } = db;

  return (
    <section
      id="contact"
      className="xl:max-w-[1200px] lg:max-w-[1100px] max-w-[1040px] md:m-auto mr-6 md:px-20 p-4 py-16 dark:bg-gray-900"
    >
      <h1 className="text-4xl font-bold text-center text-[#001b5e] dark:text-[#4673e4] pb-2">
        Contact me
      </h1>
      <ContactForm link={env.link} />
    </section>
  );
};

export default Contact;
