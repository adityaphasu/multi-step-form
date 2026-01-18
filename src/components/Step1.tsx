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
    <div className="px-6 py-7.5 flex flex-col gap-4">
      <div>
        <h2 className="font-bold text-marine-blue text-2xl">Personal info</h2>
        <p className="text-cool-gray mt-2 leading-6.25">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className="flex flex-col gap-2.25">
        <div>
          <div className="flex justify-between items-center">
            <label htmlFor="name" className="text-marine-blue text-xs">
              Name
            </label>
            {errors.name && <p className="text-strawberry-red font-bold text-xs">{errors.name}</p>}
          </div>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-3.75 py-1.75 border rounded focus:outline-marine-blue caret-marine-blue placeholder:font-medium placeholder:text-cool-gray placeholder:text-[15px] transition-all ${
              errors.name ? "border-strawberry-red" : "border-cool-gray"
            }`}
            placeholder="e.g. Stephen King"
          />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <label htmlFor="email" className="text-marine-blue text-xs">
              Email Address
            </label>
            {errors.email && (
              <p className="text-strawberry-red font-bold text-xs">{errors.email}</p>
            )}
          </div>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-3.75 py-1.75 border rounded focus:outline-marine-blue caret-marine-blue placeholder:font-medium placeholder:text-cool-gray placeholder:text-[15px] transition-all ${
              errors.email ? "border-strawberry-red" : "border-cool-gray"
            }`}
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <label htmlFor="phone" className="text-marine-blue text-xs">
              Phone Number
            </label>
            {errors.phone && (
              <p className="text-strawberry-red font-bold text-xs">{errors.phone}</p>
            )}
          </div>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-3.75 py-1.75 border rounded focus:outline-marine-blue caret-marine-blue placeholder:font-medium placeholder:text-cool-gray placeholder:text-[15px] transition-all ${
              errors.phone ? "border-strawberry-red" : "border-cool-gray"
            }`}
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </div>
    </div>
  );
};
