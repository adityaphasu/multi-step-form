export const Step1 = () => {
  return (
    <div className="px-6 py-7.5 flex flex-col gap-4">
      <div>
        <h2 className="font-bold text-marine-blue text-2xl">Personal info</h2>
        <p className="text-cool-gray mt-2 leading-6.25">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className="flex flex-col gap-2.25">
        <div>
          <label htmlFor="name" className="text-marine-blue text-xs">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3.75 py-1.75 border border-cool-gray rounded focus:outline-marine-blue caret-marine-blue placeholder:font-medium placeholder:text-cool-gray placeholder:text-[15px]"
            placeholder="e.g. Stephen King"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-marine-blue text-xs">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3.75 py-1.75 border border-cool-gray rounded focus:outline-marine-blue caret-marine-blue placeholder:font-medium placeholder:text-cool-gray placeholder:text-[15px]"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-marine-blue text-xs">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-3.75 py-1.75 border border-cool-gray rounded focus:outline-marine-blue caret-marine-blue placeholder:font-medium placeholder:text-cool-gray placeholder:text-[15px]"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </div>
    </div>
  );
};
