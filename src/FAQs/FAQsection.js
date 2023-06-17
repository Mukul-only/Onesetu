import Card from "../UI/Card";
import FAQcard from "./FAQcard";

const FAQsection = (props) => {
  return (
    <Card className="flex flex-col items-center py-20">
      <h1 className="text-2xl md:text-3xl text-center xl:text-4xl font-bold  text-deepBlue  max-w-3xl ">
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
        <FAQcard
          ques="Who came first, chicken or egg."
          ans="Your mum bruh 🫵🏻! wtf is this question, ask something that have a answer."
        />
        <FAQcard
          ques="What is payment method to support Onesetu"
          ans="😊😊😊 you can show your love❤️💕 and support by paying to 9696373283@axl upi. Thnx"
        />
      </div>
    </Card>
  );
};
export default FAQsection;
