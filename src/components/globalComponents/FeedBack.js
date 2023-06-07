import Card from "../../UI/Card";
import quote from "../.././assets/quote.svg";

const FeedbackCard = ({ text }) => {
  return (
    <div className="flex space-x-3 items-start rounded-2xl shadow-exl border px-6 py-10 lg:p-16 font-[500] text-sm lg:text-lg min-w-[20rem] lg:min-w-[32rem]  ">
      <img src={quote} className="w-8" />
      <p>{text}</p>
    </div>
  );
};
const FeedBack = (props) => {
  // const scrollRef = useRef();

  // const [flag, setFlag] = useState(false);
  // let intervalBk, intervalFd;

  // useEffect(() => {
  //   const scrollWidth = scrollRef.current?.scrollWidth - window.innerWidth;

  //   if (flag === false) {
  //     let i = 0;
  //     intervalFd = setInterval(() => {
  //       scrollRef.current?.scrollTo(i, 0);
  //       // console.log(i);
  //       i += 0.15;

  //       if (i > scrollWidth) {
  //         setFlag(true);
  //         clearInterval(intervalFd);
  //       }
  //     }, 5);
  //   } else if (flag === true) {
  //     let i = scrollWidth;
  //     intervalBk = setInterval(() => {
  //       scrollRef.current?.scrollTo(i, 0);
  //       // console.log(i);
  //       i -= 0.15;
  //       if (i < 0) {
  //         setFlag(false);
  //         clearInterval(intervalBk);
  //       }
  //     }, 5);
  //   }
  // }, [flag]);

  // useEffect(() => {
  //   return () => {
  //     clearInterval(intervalBk);
  //     clearInterval(intervalFd);
  //   };
  // }, []);

  return (
    <section id="feedback" className={`${props.className}`}>
      <Card>{props.children}</Card>
      <div className=" overflow-hidden relative space-y-4 lg:space-y-6 py-20 scroll">
        <div className="flex space-x-4 lg:space-x-6 sideways-motion">
          <FeedbackCard text="Good service, quick response, and friendly interaction.Thank you Onesetu team for filing my ITR, especially to Mukul." />
          <FeedbackCard text="Good service, quick response, and friendly interaction.Thank you Onesetu team for filing my ITR, especially to Mukul." />
          <FeedbackCard text="Good service, quick response, and friendly interaction.Thank you Onesetu team for filing my ITR, especially to Mukul." />
          <FeedbackCard text="Good service, quick response, and friendly interaction.Thank you Onesetu team for filing my ITR, especially to Mukul." />
          <FeedbackCard text="Good service, quick response, and friendly interaction.Thank you Onesetu team for filing my ITR, especially to Mukul." />
          <FeedbackCard text="Good service, quick response, and friendly interaction.Thank you Onesetu team for filing my ITR, especially to Mukul." />
        </div>
        <div className="flex space-x-4 lg:space-x-6 sideways-motion">
          <FeedbackCard text="Good service, quick response, and friendly interaction.Thank you Onesetu team for filing my ITR, especially to Mukul." />
          <FeedbackCard text="Good service, quick response, and friendly interaction.Thank you Onesetu team for filing my ITR, especially to Mukul." />
          <FeedbackCard text="Good service, quick response, and friendly interaction.Thank you Onesetu team for filing my ITR, especially to Mukul." />
          <FeedbackCard text="Good service, quick response, and friendly interaction.Thank you Onesetu team for filing my ITR, especially to Mukul." />
          <FeedbackCard text="Good service, quick response, and friendly interaction.Thank you Onesetu team for filing my ITR, especially to Mukul." />
          <FeedbackCard text="Good service, quick response, and friendly interaction.Thank you Onesetu team for filing my ITR, especially to Mukul." />
        </div>
      </div>
    </section>
  );
};
export default FeedBack;
