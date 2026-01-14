import ThankYouIcon from "../assets/images/icon-thank-you.svg";

export const Confirm = () => {
  return (
    <div className="flex flex-col items-center text-center px-6 pt-20 pb-18 gap-4">
      <img src={ThankYouIcon} alt="" className="w-14" />
      <div className="py-1.5">
        <h2 className="text-2xl font-bold text-marine-blue">Thank you!</h2>
        <p className="text-cool-gray mt-2 leading-6.25">
          Thanks for confirming your subscription! We hope you have fun using our platform. If you
          ever need support, please feel free to email us at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};
