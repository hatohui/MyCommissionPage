import { z } from "zod";

export default interface WebSettingProps {
  settings: {
    darkMode: boolean;
  };
}

export enum CommissionStatus {
  OPEN = 1,
  CLOSED = 0,
}

export type handleChangeFunction = (
  args: React.ChangeEvent<HTMLInputElement>
) => void;

export interface CommissionDetails {
  name: string;
  email: string;
  type: CommissionType;
  refLink?: string;
  tag: string;
  platform: string;
  inPerson: boolean;
  idea?: string;
  urgent: boolean;
  numOfChar: number;
  background: boolean;
}

export enum CommissionType {
  NONE = -1,
  ICON = 0,
  FULL = 1,
  SKETCHPAGE = 2,
  OTHER = 3,
}

export enum Platform {
  DISCORD = 0,
  TELEGRAM = 1,
  TWITTER = 2,
  BLUESKY = 3,
  FACEBOOK = 4,
}

export const CommissionDetails = z.object({
  name: z
    .string()
    .min(3, { message: "This field require at least 3 letters." }),
  email: z.string().email({ message: "Please input a valid email." }),
  type: z.nativeEnum(CommissionType),
  refLink: z.string().url({ message: "Invalid link." }).optional(),
  tag: z.string().optional(),
  platform: z.nativeEnum(Platform),
  inPerson: z.boolean(),
  idea: z.string().optional(),
  urgent: z.boolean(),
  numOfChar: z
    .number()
    .min(0, { message: "A commission must include at least 1 characters" }),
  background: z.boolean(),
});
