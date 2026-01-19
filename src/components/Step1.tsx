import type { FormData } from "../types/types";

export const Step1 = ({
  formData,
  setFormData,
  errors,
}: {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  errors: Record<string, string>;
}) => {
  return (
    <div className="px-6 py-7.5 flex flex-col gap-4 2xl:gap-8.5">
      <div>
        <h2 className="font-bold text-marine-blue text-2xl lg:text-[2rem]">Personal info</h2>
        <p className="text-cool-gray mt-2 leading-6.25 lg:mt-1.75">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className="flex flex-col gap-2.25 lg:gap-5">
        <div className="lg:space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="name" className="text-marine-blue text-xs lg:text-sm">
              Name
            </label>
            {errors.name && (
              <p className="text-strawberry-red font-bold text-xs lg:text-sm">{errors.name}</p>
            )}
          </div>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`step-1-input ${errors.name ? "border-strawberry-red" : "border-cool-gray"}`}
            placeholder="e.g. Stephen King"
          />
        </div>
        <div className="lg:space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="email" className="text-marine-blue text-xs lg:text-sm">
              Email Address
            </label>
            {errors.email && (
              <p className="text-strawberry-red font-bold text-xs lg:text-sm">{errors.email}</p>
            )}
          </div>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`step-1-input ${
              errors.email ? "border-strawberry-red" : "border-cool-gray"
            }`}
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className="lg:space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="phone" className="text-marine-blue text-xs lg:text-sm">
              Phone Number
            </label>
            {errors.phone && (
              <p className="text-strawberry-red font-bold text-xs lg:text-sm">{errors.phone}</p>
            )}
          </div>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`step-1-input ${
              errors.phone ? "border-strawberry-red" : "border-cool-gray"
            }`}
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </div>
    </div>
  );
};
