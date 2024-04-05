"use client";

import { uploadFile } from "@/pages/api/upload";
import { FormEventHandler, useState } from "react";

export default function Page() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const file = formData.get("file") as File;
    //console.log(file);
    const url = await uploadFile(formData);
    //setImageUrl(url);
    console.log(url);
  };
  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" />
        <button type="submit">upload</button>
      </form>
    </div>
  );
}
