import React, { useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { PLANS } from "consts";
import { Button } from "components";
import { sponsorsImg } from "images";
import { useWindowDimensions } from "components/hooks";

export const Plan: React.FC = () => {
  const [chkBox, setChkBox] = useState<{ name: string }>({ name: "planSix" });
  const { width } = useWindowDimensions();

  return (
    <div className=' w-86 flex flex-col items-center lg:mr-4 mb-8'>
      <h2 className='font-bold text-xl lg:text-2xl w-80 self-start'>
        Choose your plan and get{" "}
        <span className='text-orange-400'>7 days free trial</span>
      </h2>
      <ul className=' w-86 my-2'>
        {PLANS.map(
          ({ name, period, price, discountPrice, oldPrice, saveAmount }) => (
            <li
              key={period}
              onClick={() => setChkBox({ ...chkBox, name: name })}
              className={`flex flex-col justify-between border-2 px-5 py-4 rounded-2xl cursor-pointer mb-2 h-32 ${
                chkBox.name.includes(name)
                  ? "border-orange-400"
                  : "border-gray-400 border-opacity-50"
              }`}
            >
              <div className='flex flex-row'>
                <p className='font-semibold'>{period} months plan</p>
                {saveAmount && (
                  <span className='flex ml-2 bg-yellow-300/70 font-bold w-20 h-6 text-xs items-center justify-center rounded-md'>
                    Save {saveAmount}%
                  </span>
                )}
              </div>
              <div className='flex justify-between items-center'>
                <p className='font-bold text-2xl lg:text-3xl'>
                  ${price} <span className='font-light text-sm'> / month</span>
                </p>
                <div className='relative'>
                  <input
                    type='checkbox'
                    name={name}
                    value={chkBox.name}
                    checked={chkBox.name === name}
                    onChange={() => setChkBox({ ...chkBox, name: name })}
                    className='w-6 h-6 appearance-none checked:bg-orange-400 bg-gray-200 text-white rounded-full'
                  ></input>
                  {chkBox.name === name ? (
                    <FontAwesomeIcon
                      icon={faCheck}
                      className='absolute top-0 left-0 w-5 h-5 pl-0.5 pt-0.5 text-white'
                    />
                  ) : null}
                </div>
              </div>
              <div className='font-light text-sm'>
                {discountPrice ? (
                  <div>
                    <span className='line-through'>${oldPrice}</span>{" "}
                    <span className='text-orange-400 font-semibold'>
                      ${discountPrice}
                    </span>{" "}
                    billed every {period} months
                  </div>
                ) : (
                  <p>Billed monthly</p>
                )}
              </div>
            </li>
          )
        )}
      </ul>
      <Button>Get your plan</Button>

      {width < 1024 ? (
        <p className='text-center text-xs my-2'>
          After 7 days free trial subscription payment is automatically charged
          from your account unless it is canceled at least 24 hours before the
          end of the trial period.
        </p>
      ) : (
        <p className='text-center text-xs my-2'>
          Your free trial will automatically become a paid subscription on the
          8th day after you begin your trial. To cancel your subscription,
          please contact us at least 24 hours before the end of the trial
          period.
        </p>
      )}
      <p className='text-center text-xs my-2'>
        By choosing a payment method you agree to the{" "}
        <span className='text-sky-300'>T&Cs</span> and{" "}
        <span className='text-sky-300'>
          <br />
          Privacy Policy
        </span>
      </p>
      <img src={sponsorsImg} alt='sponsors' className='my-2' />
    </div>
  );
};
