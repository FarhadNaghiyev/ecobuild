import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CTAButton from "../../components/CTAButton";
import SectionTitle from "../../components/SectionTitle";
import { contactSchema } from "../../schemas/contactSchema";

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <section>
      <SectionTitle title="Bizimlə əlaqə" />
      <div
        className="rounded-3xl relative w-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/contact-worker.webp')",
        }}>
        <div className="flex flex-col lg:flex-row relative z-10 items-center justify-between lg:min-h-[clamp(30rem,90vh,50rem)] px-[clamp(1rem,5vw,4rem)] py-[clamp(2rem,6vw,5rem)] text-white">
          {/* Başlık */}
          <h3 className="text-[clamp(1.5rem,10vw,3.5rem)] font-bold text-left mb-6 lg:mb-0 lg:max-w-[40%]">
            Gələcəyin tikintisini birlikdə quraq
          </h3>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full lg:w-[clamp(20rem,45vw,42rem)] bg-white/95 backdrop-blur-md text-black rounded-3xl px-[clamp(0.75rem,2vw,2rem)] py-[clamp(0.75rem,2vw,2.75rem)] shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div>
                <input
                  {...register("firstName")}
                  placeholder="Ad"
                  className="w-full rounded-md border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 py-2 px-3 text-sm"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("lastName")}
                  placeholder="Soyad"
                  className="w-full rounded-md border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 py-2 px-3 text-sm"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div>
                <input
                  {...register("phone")}
                  placeholder="Nömrə"
                  className="w-full rounded-md border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 py-2 px-3 text-sm"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("email")}
                  placeholder="E-mail"
                  className="w-full rounded-md border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 py-2 px-3 text-sm"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <input
              {...register("subject")}
              placeholder="Mövzu"
              className="w-full rounded-md border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 py-2 px-3 text-sm mb-3"
            />
            {errors.subject && (
              <p className="text-red-500 text-xs mb-2">
                {errors.subject.message}
              </p>
            )}

            <textarea
              {...register("message")}
              placeholder="Mesajınız"
              rows={4}
              className="w-full rounded-md border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 py-2 px-3 text-sm resize-none mb-4"
            />
            {errors.message && (
              <p className="text-red-500 text-xs mb-2">
                {errors.message.message}
              </p>
            )}

            <CTAButton width="full" />
          </form>
        </div>
      </div>
    </section>
  );
}
