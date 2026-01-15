import { useState } from 'react';
import { Button } from 'flowbite-react';
import { BiMailSend } from 'react-icons/bi';

const ContactForm = ({ link }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(link, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset(); // Formular zurücksetzen
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Fehler beim Senden:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {submitStatus === 'success' && (
        <div className="flex my-4 p-4 bg-green-100 text-green-700 rounded-lg w-full justify-center items-center font-bold">
          Thank you! Your message was send successfully.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="flex my-4 p-4 bg-red-100 text-red-700 rounded-lg w-full justify-center items-center font-bold">
          A problem accured while trying to send your message. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="dark:text-stone-300">
        <div className="grid sm:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-[#001b5e] dark:text-[#4673e4] text-sm font-bold py-2">
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              required
              className="border-2 rounded-lg p-3 flex border-stone-300 dark:bg-gray-900 focus:ring-0"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-[#001b5e] dark:text-[#4673e4] text-sm font-bold py-2">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              required
              className="border-2 rounded-lg p-3 flex border-stone-300 dark:bg-gray-900 focus:ring-0"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-[#001b5e] dark:text-[#4673e4] text-sm font-bold py-2">
              Phone number
            </label>
            <input
              type="text"
              name="phone_number"
              required
              className="border-2 rounded-lg p-3 flex border-stone-300 dark:bg-gray-900 focus:ring-0"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-[#001b5e] dark:text-[#4673e4] text-sm font-bold py-2">
              EMail
            </label>
            <input
              type="email"
              name="email"
              required
              className="border-2 rounded-lg p-3 flex border-stone-300 dark:bg-gray-900 focus:ring-0"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-[#001b5e] dark:text-[#4673e4] text-sm font-bold py-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            required
            className="border-2 rounded-lg p-3 flex border-stone-300 dark:bg-gray-900 focus:ring-0"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-[#001b5e] dark:text-[#4673e4] text-sm font-bold py-2">
            Message
          </label>
          <textarea
            rows="6"
            name="message"
            required
            className="border-2 rounded-lg p-3 flex border-stone-300 dark:bg-gray-900 focus:ring-0"
          ></textarea>
        </div>
        <Button
          type="submit"
          required
          className="bg-[#001b5e] dark:bg-[#4673e4] text-gray-300 flex mt-4 w-full p-4 uppercase font-extrabold hover:bg-inherit focus:ring-0 justify-center items-center"
        >
          {isSubmitting ? (
            <span>Sende...</span>
          ) : (
            <>
              <BiMailSend size={25} />
              <span className="pl-2">Send Message</span>
            </>
          )}
        </Button>
        <div
          className="overflow-hidden whitespace-nowrap indent-[-99999px] absolute"
          aria-hidden="true"
        >
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
