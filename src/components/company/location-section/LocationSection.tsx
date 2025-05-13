import { HeaderSection } from "@/components";

export const LocationSection = () => {
  return (
    <section className="mx-auto py-16">
      <HeaderSection title="Our Location" subtitle="Visit us at our studio, conveniently located for your comfort." />
      <div className="flex flex-col lg:flex-row bg-neutral-darkgrey">
        <div className="relative lg:w-1/2 flex flex-col justify-center items-center overflow-x-hidden h-[400px] md:h-96">
          <h3 className="text-3xl text-primary font-bold mb-2">Contact Information</h3>
          <span className="text-lg text-neutral-gray font-bold mb-4">Dont wait any longer contact us</span>
          <p>
            <strong>Address:</strong> 61 P. Đinh Tiên Hoàng, Lý Thái Tổ, Hoàn Kiếm, Hà Nội
          </p>
          <p>
            <strong>Hours:</strong> Open 7 Days a Week 9AM - 10PM
          </p>
          <p>
            <strong>Phone:</strong> 0936936161
          </p>
          <p>
            <strong>Email:</strong> inktattoostudio61@gmail.com
          </p>
        </div>
        <iframe
          className="lg:w-1/2 h-64 md:h-96 overflow-hidden rounded-t-none lg:rounded-l-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6022.505145968989!2d105.85148867686902!3d21.030238980619675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abea9fe9dbb5%3A0xadea03a108725ecf!2zNjEgUC4gxJBpbmggVGnDqm4gSG_DoG5nLCBGcmVuY2ggUXVhcnRlciwgSG_DoG4gS2nhur9tLCBIw6AgTuG7mWkgMTAwMDAwLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1747147974175!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{
            filter: "invert(1) brightness(1) grayscale(100%)",
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};
