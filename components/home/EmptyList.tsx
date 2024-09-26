import { Button } from "../ui/button";
import Link from "next/link";
import { Frown } from "lucide-react";

function EmptyList({
  heading = "Uh-oh! This list is as empty as my social calendar.",
  message = "Maybe the items went on vacation without telling us?",
  btnText = "back to reality",
}: {
  heading?: string;
  message?: string;
  btnText?: string;
}) {
  return (
    <div className="mt-4 text-center">
      <Frown className="mx-auto  mb-4" size={64} />
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p className="text-lg mt-2">{message}</p>
      <p className="text-sm mt-1">(I'm not crying, you're crying!)</p>
      <Button asChild className="mt-6 capitalize" size="lg">
        <Link href="/">{btnText}</Link>
      </Button>
    </div>
  );
}

export default EmptyList;
