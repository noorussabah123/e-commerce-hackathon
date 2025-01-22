// lib/urlFor.ts

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

// Define type manually
type SanityImageSource = {
  _type?: string;
  asset: {
    _ref: string;
    _type: string;
  };
};

// Initialize Sanity Image Builder
const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source).url(); // Always use `.url()` for string output
}

export default urlFor;
