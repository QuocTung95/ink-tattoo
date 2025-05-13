import type { BookingValues } from "@/types";

import { fetcher } from "@/lib/api";
import { USE_API } from "@/config/constants";

export async function createBooking(booking: BookingValues) {
  if (USE_API) return await fetcher("/bookings", "POST", { data: booking });
  //   const bookings: BookingValues[] = [];
  //   const alreadyExists = bookings.some(
  //     (b) =>
  //       b.firstName + b.lastName === `${booking.firstName} ${booking.lastName}`,
  //   );
  //   if (!alreadyExists) {
  //     bookings.push(booking);
  //   }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...booking, access_key: "45e933f3-ac30-49d4-9124-9f5c805738b4" }),
    });

    const result = await response.json();

    if (result.success) {
      return { status: 201 };
    } else {
      return { status: 500 };
    }
  } catch (error) {
    console.error("error", error);
  }
}
