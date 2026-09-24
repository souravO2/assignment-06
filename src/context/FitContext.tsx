"use client";

import { DataType } from "@/types/DataType";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export interface FitContextProp {
  plan: DataType[];
  setPlan: Dispatch<SetStateAction<DataType[]>>;
  save: DataType[];
  setSave: Dispatch<SetStateAction<DataType[]>>;
}

export const FitContext = createContext<FitContextProp>({
  plan: [],
  setPlan: () => {},
  save: [],
  setSave: () => {},
});

const FitProvider = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlan] = useState<DataType[]>([]);
  const [save, setSave] = useState<DataType[]>([]);

  const sharedData = {
    plan,
    setPlan,
    save,
    setSave,
  };

  return (
    <FitContext.Provider value={sharedData}>{children}</FitContext.Provider>
  );
};

export default FitProvider;
