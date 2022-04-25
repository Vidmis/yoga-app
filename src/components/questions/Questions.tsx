import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from "components";
import { QUESTIONS } from "consts";

interface IQuestionListProps {
  question?: string;
  answer?: string;
  key?: number;
}

const QuestionsList: React.FC<IQuestionListProps> = ({ question, answer }) => {
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

export const Questions: React.FC = () => (
  <div className='flex flex-col items-center mt-14'>
    <h2 className='font-bold text-xl lg:text-2xl self-start lg:self-center mb-4'>
      Frequently Asked Questions
    </h2>
    <ul className='w-86 lg:w-204 mb-8'>
      {QUESTIONS.map(({ question, answer }, index) => (
        <QuestionsList question={question} answer={answer} key={index} />
      ))}
    </ul>
    <Button>Get my plan</Button>
  </div>
);
