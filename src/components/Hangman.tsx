const HEAD = (
  <div className="h-14 w-14 rounded-full border-8 border-black absolute -right-6 top-12"/>
)

const BODY = (
  <div className="absolute h-24 w-2 right-0 top-24 bg-black"/>
)

const LEFT_HAND = (
  <div className="absolute h-2 w-20 right-0 top-28 bg-black rotate-[30deg]"/>
)

const RIGHT_HAND = (
  <div className="absolute h-2 w-20 -right-16 top-28 bg-black rotate-[-30deg]"/>
)

const LEFT_LEG = (
  <div className="absolute h-2 w-20 right-0 top-44 rotate-[-30deg] origin-right bg-black"/>
)

const RIGHT_LEG = (
  <div className="absolute h-2 w-20 right-2 top-44 rotate-[210deg] origin-right bg-black"/>
)

const Hangman = () => {
  return (
    <div className="content-center place-self-center relative">
      { HEAD }
      { BODY }
      { LEFT_HAND }
      { RIGHT_HAND }
      { LEFT_LEG }
      { RIGHT_LEG }
      <div className="h-2 w-[130px] ml-[120px] bg-black"/>
      <div className="absolute h-10 w-2 ml-[242px] bg-black"/>
      <div className="w-2 h-80 bg-black ml-[120px]"/>
      <div className="h-2 w-[250px] bg-black"/>
    </div>
  );
};

export default Hangman;