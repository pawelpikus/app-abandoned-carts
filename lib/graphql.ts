import { createClient } from "urql";

const url = process.env.NEXT_PUBLIC_SALEOR_API_URL!;

export const client = createClient({
  url,
  fetchOptions: () => {
    return {
      headers: {
        Authorization: `JWT xxx`, //provide your own API TOKEN
      },
    };
  },
});
