import { Button, Html, Tailwind } from "@react-email/components";
import * as React from "react";

export default function Email() {
  return (
    <Tailwind>
      <Html>
        <div className="w-full h-full flex justify-center items-center">
          <div className="h-2 w-2 p-12 rounded bg-slate-800">Bonjour</div>
        </div>
      </Html>
    </Tailwind>
  );
}
