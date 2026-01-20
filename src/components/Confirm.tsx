import ThankYouIcon from "../assets/images/icon-thank-you.svg";

export const Confirm = () => {
  return (
    <div className="flex flex-col items-center text-center px-6 pt-20 pb-18 gap-4 lg:gap-6 lg:py-31 2xl:pb-39 2xl:pt-39.5">
      <img src={ThankYouIcon} alt="" className="w-14 lg:w-20" />
      <div className="py-1.5">
        <h2 className="text-2xl font-bold text-marine-blue lg:text-[2rem]">Thank you!</h2>
        <p className="text-cool-gray mt-2 leading-6.25 lg:max-w-110 lg:mt-3">
          Thanks for confirming your subscription! We hope you have fun using our platform. If you
          ever need support, please feel free to email us at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};
