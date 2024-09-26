"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";
import { Button } from "../ui/button";
const SignOutLink = () => {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({
      title: "Signing out",
      description: "Please wait while we sign you out.",
    });
  };
  return (
    <SignOutButton redirectUrl="/">
      <Button
        variant={"destructive"}
        onClick={handleLogout}
        className="w-full text-left"
      >
        Sign Out
      </Button>
    </SignOutButton>
  );
};

export default SignOutLink;
