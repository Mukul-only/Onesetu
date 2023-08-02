import Card from "../UI/Card";
import FAQcard from "./FAQcard";

const FAQsection = (props) => {
  return (
    <Card className="flex flex-col items-center py-20">
      <h1 className="max-w-3xl text-2xl font-bold text-center md:text-3xl xl:text-4xl text-deepBlue ">
        Frequently asked questions
      </h1>
      <p className="text-gray-400 text-sm xl:text-xl tracking-tight my-6 max-w-[16rem] xl:max-w-3xl text-center">
        Everything you need to know about the product and billing.
      </p>
      <div className="space-y-6 my-12 xl:w-[60%] w-full">
        <FAQcard
          ques="IS creating report from onesetu is free?"
          ans="Yes, you can try us for free for 30 days. If you want, we’ll provide you
        with a free, personalized 30-minute onboarding call to get you up and
        running as soon as possible."
        />

        <FAQcard
          ques="What is the recommended attire for browsing your website?"
          ans="The official dress code is Whatever makes you feel fabulous. Whether it's pajamas, a tuxedo, or a superhero costume, we welcome all styles."
        />
      </div>
    </Card>
  );
};
export default FAQsection;
