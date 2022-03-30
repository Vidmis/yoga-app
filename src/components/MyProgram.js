import bookcheck from "../images/icons/bookcheck.png";
import diet from "../images/icons/diet.png";
import exercise from "../images/icons/exercise.png";
import plan from "../images/icons/plan.png";
import shoe from "../images/icons/shoe.png";
import smartwatch from "../images/icons/smartwatch.png";
import whistle from "../images/icons/whistle.png";

const programInfo = [
  {
    id: 1,
    image: plan,
    header: "A personalized yoga program",
    text: "Completely safe and focused on your key goals",
  },
  {
    id: 2,
    image: exercise,
    header: "Easy & enjoyable yoga workouts for your level",
    text: "Program adjusts to your level and pace",
  },
  {
    id: 3,
    image: shoe,
    header: "No special preparation needed",
    text: "Perfect for begginners! Requires no special preparation or equipment",
  },
  {
    id: 4,
    image: diet,
    header: "Daily motivation & accountability",
    text: "Track your progress, develop a healthy routine, reach goals faster",
  },
  {
    id: 5,
    image: whistle,
    header: "Browse from various yoga challenges",
    text: "30 d morning yoga, mindful yoga, back flexibility challenge, and more!",
  },
  {
    id: 6,
    image: smartwatch,
    header: "Easy access on any device",
    text: "Do your yoga anywhere across all types of devices",
  },
  {
    id: 7,
    image: bookcheck,
    header: "A complete guide to get started",
    text: "Best tips, guidelines, advice, and recommendations for successful practice",
  },
];

const MyProgram = () => {
  return (
    <div className='w-86 lg:ml-4 mb-8'>
      <h2 className='font-bold text-xl lg:text-2xl w-80 self-start mb-5 lg:mb-9'>
        What's in my program?
      </h2>
      <ul>
        {programInfo.map(({ id, image, header, text }) => {
          return (
            <li
              key={id}
              className='flex flex-row items-center justify-left my-3'
            >
              <img src={image} alt='icon' className='w-12 h-12' />
              <div>
                <h3 className='text-base font-semibold pl-2'>{header}</h3>
                <p className='text-xs font-normal pl-2 opacity-60'>{text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MyProgram;
