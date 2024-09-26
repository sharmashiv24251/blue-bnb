"use client";

import { useFormState } from "react-dom";
import { ReactNode, useEffect } from "react";
import { actionFunction } from "@/utils/types";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  message: "",
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: ReactNode;
}) {
  const [state, formAction] = useFormState(action, initialState);
  const { toast } = useToast();
  useEffect(() => {
    if (state.message) {
      toast({
        title: state.message,
      });
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
