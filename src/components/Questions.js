import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import GetPlanButton from "./GetPlanButton";

const questionsObj = [
  {
    question: "What happens after I order?",
    answer:
      "After you place your order, we get to work! Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve.",
  },
  {
    question: "Where I can access my plan?",
    answer:
      "Your plan will be accessible in Positive Yoga's web app with a special link generated after your purchase.",
  },
  {
    question: "How can I cancel my subscription?",
    answer:
      "How can I cancel my subscription? You can manage or cancel your subscription by writing our customer support hello@positiveyoga.app",
  },
  {
    question: "Why this program is paid?",
    answer:
      "We are aiming to offer our clients the best experience, which comes with a lot of work.  The entire yoga program is developed by our large team of experts that work long hours to prepare effective, trustworthy and enjoyable content and workouts that can help you to reach your goals. The program is also completely free of ads and is constantly being updated based on your feedback!",
  },
];

const QuestionsList = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      onClick={() => setOpen(!open)}
      className='cursor-pointer border border-gray-300/50 my-2 rounded-2xl p-4'
    >
      <div className='flex flex-row justify-between items-center'>
        <h4 className='font-semibold text-base'>{question}</h4>
        {open ? (
          <FontAwesomeIcon icon={faChevronUp} className='mr-2' />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} className='mr-2' />
        )}
      </div>
      {open && <p className='font-normal text-sm mr-4 mt-3'>{answer}</p>}
    </li>
  );
};

const Questions = () => {
  return (
    <div className='flex flex-col items-center mt-14'>
      <h2 className='font-bold text-xl lg:text-2xl self-start lg:self-center mb-4'>
        Frequently Asked Questions
      </h2>
      <ul className='w-86 lg:w-204 mb-8'>
        {questionsObj.map(({ question, answer }, index) => {
          return (
            <QuestionsList question={question} answer={answer} key={index} />
          );
        })}
      </ul>
      <GetPlanButton>Get my plan</GetPlanButton>
    </div>
  );
};

export default Questions;
