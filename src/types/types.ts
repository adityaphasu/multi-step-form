export type AddOn = { checked: boolean };
export type Plan = "Arcade" | "Advanced" | "Pro";

export type FormData = {
  name: string;
  email: string;
  phone: string;
  plan: { type: Plan };
  isYearly: boolean;
  addOns: Record<string, AddOn>;
};
