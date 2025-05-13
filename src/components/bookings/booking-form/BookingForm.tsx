"use client";

import type { ArtistResponse, BookingValues } from "@/types";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { addToast, Button, Checkbox, Input, Select, SelectItem, Textarea } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, ChevronsUpDown, Flame } from "lucide-react";
import { bookingSchema } from "@/lib/zod";
import { createBooking } from "@/lib/api/bookings";
import { FormError } from "@/components";
import { PLACEMENT_CHOICES } from "@/config/constants";

type Props = {
  artists: ArtistResponse[];
  initialFirstName?: string;
  initialFirstTime?: boolean;
  initialArtist?: string;
};

export const BookingForm = ({ artists, initialFirstName, initialFirstTime, initialArtist }: Props) => {
  const router = useRouter();
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      firstName: initialFirstName,
      firstTimeSession: initialFirstTime,
      artist: initialArtist,
    },
  });

  const onSubmit = async (data: BookingValues) => {
    try {
      const res = await createBooking(data);
      if (res?.status === 201) {
        router.push("/");
        addToast({
          title: "Booking created",
          description: "Your booking has been successfully created.",
          promise: new Promise((resolve) => setTimeout(resolve, 2000)),
        });
      } else {
        throw new Error("Submission failed.");
      }
    } catch (error) {
      setApiError(`${error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-10">
        {/* First Name field */}
        <Input
          label="First Name"
          size="lg"
          type="text"
          radius="none"
          placeholder="John"
          labelPlacement="outside"
          isInvalid={!!errors.firstName?.message}
          color={errors.firstName?.message ? "danger" : "default"}
          errorMessage={errors.firstName?.message}
          {...register("firstName")}
        />

        {/* Last Name field */}
        <Input
          label="Last Name"
          size="lg"
          type="text"
          radius="none"
          placeholder="Doe"
          labelPlacement="outside"
          isInvalid={!!errors.lastName?.message}
          color={errors.lastName?.message ? "danger" : "default"}
          errorMessage={errors.lastName?.message}
          {...register("lastName")}
        />

        {/* Phone field */}
        <Input
          isClearable
          label="Phone"
          size="lg"
          type="tel"
          radius="none"
          placeholder="+1 404 123 4567"
          labelPlacement="outside"
          isInvalid={!!errors.phone?.message}
          color={errors.phone?.message ? "danger" : "default"}
          errorMessage={errors.phone?.message}
          {...register("phone")}
        />

        {/* Notes field */}
        <Textarea
          size="lg"
          type="textarea"
          radius="none"
          label="Notes"
          placeholder="Your notes here..."
          labelPlacement="outside"
          classNames={{ base: "!mt-2" }}
          isInvalid={!!errors.notes?.message}
          color={errors.notes?.message ? "danger" : "default"}
          errorMessage={errors.notes?.message}
          {...register("notes")}
        />

        {/* Artist field */}
        <Select
          size="lg"
          radius="none"
          label="Artist"
          labelPlacement="outside"
          placeholder="Select an Artist"
          selectorIcon={<ChevronsUpDown className="w-4 h-4" />}
          isInvalid={!!errors.artist?.message}
          color={errors.artist?.message ? "danger" : "default"}
          errorMessage={errors.artist?.message}
          classNames={{ popoverContent: "rounded-none" }}
          {...register("artist")}
        >
          {artists.map((artist) => (
            <SelectItem key={artist.id} classNames={{ base: "rounded-none" }}>
              {artist.name}
            </SelectItem>
          ))}
        </Select>

        {/* Placement field */}
        <Select
          size="lg"
          radius="none"
          label="Placement"
          labelPlacement="outside"
          placeholder="Select a tattoo placement"
          selectorIcon={<ChevronsUpDown className="w-4 h-4" />}
          isInvalid={!!errors.placement?.message}
          color={errors.placement?.message ? "danger" : "default"}
          errorMessage={errors.placement?.message}
          classNames={{ popoverContent: "rounded-none" }}
          {...register("placement")}
        >
          {PLACEMENT_CHOICES.map((choice) => (
            <SelectItem key={choice.key} classNames={{ base: "rounded-none" }}>
              {choice.label}
            </SelectItem>
          ))}
        </Select>
      </div>

      {apiError && <p className="text-xs text-red-500 text-center">{apiError}</p>}

      <Button
        type="submit"
        radius="none"
        color="primary"
        className="font-medium w-full"
        disabled={isSubmitting}
        endContent={<ArrowUpRight className="w-4 h-4" />}
      >
        {isSubmitting ? "Creating..." : "Create Booking"}
      </Button>
    </form>
  );
};
