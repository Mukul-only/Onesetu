import Button from "../UI/Button";
import Card from "../UI/Card";

const AskSection = (props) => {
  return (
    <div className="bg-gray-50">
      <Card className="flex flex-col items-center py-12">
        <h1 className="text-2xl md:text-2xl text-center xl:text-3xl font-bold  text-deepBlue  max-w-3xl ">
          Still have questions?
        </h1>
        <p className="text-gray-400 text-sm xl:text-lg tracking-tight my-6 max-w-[16rem] xl:max-w-3xl text-center">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <Button className="bg-Blue-500 text-white px-4 py-2 font-medium xl:text-lg text-base hover:bg-white hover:text-Blue-500 hover:shadow-lg duration-500">
          Get in touch
        </Button>
      </Card>
    </div>
  );
};
export default AskSection;
