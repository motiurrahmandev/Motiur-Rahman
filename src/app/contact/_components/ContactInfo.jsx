import ContactForm from "./ContactForm";
import InfoCard from "./InfoCard";

function ContactInfo() {
  return (
    <div className="grid lg:grid-cols-12 gap-8 px-4">
      {/* Left Column: Contact Info & Details */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        {/* Info Card */}
        <InfoCard/>
      </div>
      {/* Right Column: Contact Form */}
      <div className="lg:col-span-7">
        <div className="glass-panel rounded-xl p-8 md:p-10 relative overflow-hidden">
          {/* Decorative gradient blob inside form */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
          <ContactForm/>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
