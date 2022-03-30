import banner from "../images/phones.png";

const YogaBanner = () => {
  return (
    <div className='flex flex-col items-center text-center w-86 lg:mr-8 mb-10'>
      <h2 className='font-bold text-xl lg:text-2xl self-start mb-6'>
        Start your yoga journey now!
      </h2>
      <img
        src={banner}
        alt='phones_image'
        className='bg-accent bg-no-repeat bg-center py-5 lg:py-0 lg:bg-none'
      />
    </div>
  );
};

export default YogaBanner;
