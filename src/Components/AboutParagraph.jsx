const AboutParagraph = ({ text, highlight }) => {
  if (highlight) {
    return (
      <>
        <blockquote className="max-w-3xl mx-auto my-6 p-6 bg-blue-50 dark:bg-blue-950/20 border-4 border-blue-600 dark:border-blue-400 rounded-xl shadow-sm">
          <p className="text-center text-stone-800 dark:text-stone-200 px-6 md:px-8 leading-relaxed font-medium md:text-lg">
            {text}
          </p>
        </blockquote>
      </>
    );
  }

  return (
    <>
      <p className="text-center py-8 text-stone-600 dark:text-stone-300">
        {text}
      </p>
    </>
  );
};

export default AboutParagraph;
