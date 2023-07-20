"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("eb84c474-6924-4103-a55d-87d7b1f4b418");
  }, []);

  return null;
};
