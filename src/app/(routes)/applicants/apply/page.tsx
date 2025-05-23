import type { Metadata } from "next";

import { Image } from "@heroui/react";
import { ApplicantForm, HeaderPage } from "@/components";

export const metadata: Metadata = {
  title: "Apply for Job | Tattoo Studio",
  description:
    "Submit your application to work at our tattoo studio. Fill out the form and well get in touch with you for future opportunities.",
};

export default function ApplyPage() {
  return (
    <main className="max-w-screen-xl mx-auto my-16 px-4 xl:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <section className="pb-8">
          <HeaderPage
            title="Join Our Team"
            subtitle="We're always looking for talented artists and passionate individuals."
          />
          <ApplicantForm />
        </section>
        <section className="hidden md:block overflow-hidden rounded-none py-4">
          <Image
            isBlurred
            radius="none"
            shadow="none"
            src="/images/apply-background.webp"
            alt="Apply Background"
            width={600}
            height={600}
            loading="eager"
            className="object-cover w-full h-full"
          />
        </section>
      </div>
    </main>
  );
}
