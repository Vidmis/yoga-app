import icon from "../images/checkImage.png";

const benefits = [
  {
    image: icon,
    text: "Each program adapts to your age or fitness level",
  },
  {
    image: icon,
    text: "Mindful way to exercise and get real results",
  },
  {
    image: icon,
    text: "Effective and long-term lasting results",
  },
  {
    image: icon,
    text: "Suited activities that benefit both the mind and body",
  },
  {
    image: icon,
    text: "Low-intensity but highly-effective workouts",
  },
  {
    image: icon,
    text: "Extra attention to muscle, joint and back health",
  },
];

const PositiveYogaList = () => {
  return (
    <div className='w-86 lg:ml-8 mb-10 mt-6 lg:mt-0'>
      <h2 className='font-bold text-xl lg:text-2xl self-start mb-8'>
        Is Positive Yoga right for me?
      </h2>
      <ul>
        {benefits.map(({ image, text }, index) => {
          return (
            <li key={index} className='flex flex-row mt-5'>
              <img src={image} alt='checkImage' className='w-5 h-5' />
              <p className='ml-3 font-normal text-sm text-gray-900/80'>
                {text}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PositiveYogaList;
