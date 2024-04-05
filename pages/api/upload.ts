import { put } from "@vercel/blob";

export const uploadFile = async (formData: FormData) => {
  const file = formData.get("file") as File;
  const filename = file.name;

  const blob = await put(filename, file, {
    access: "public",
    token: "vercel_blob_rw_oifOEIVDfLxZGtJ0_y99Qz2HbQ4b3H8MhCTNGtIhJ058nnd",
    addRandomSuffix: false,
  });

  console.log(blob.url);

  return blob.url;
};
