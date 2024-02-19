import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";

export function LightBox({
  children,
  switcher,
}: {
  children: React.ReactNode;
  switcher: () => React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
        {/* <Button variant="outline">Edit Profile</Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px] bg-transparent border-none">
        <div className="grid gap-4 py-4">{children}</div>
        <div className=" flex gap-2 md:gap-0 justify-around flex-row ">{switcher()}</div>
      </DialogContent>
    </Dialog>
  );
}
