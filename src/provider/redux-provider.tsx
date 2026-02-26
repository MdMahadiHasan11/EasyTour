// src/components/providers/ReduxProvider.tsx
"use client";

import { AppStore, makeStore } from "@/redux/store";
import { useState, type ReactNode } from "react";
import { Provider } from "react-redux";

export function ReduxProvider({ children }: { children: ReactNode }) {
  const [store] = useState<AppStore>(() => makeStore());

  return <Provider store={store}>{children}</Provider>;
}
