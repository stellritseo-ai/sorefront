import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import { motion } from "motion/react";
import {
  CheckCircle2,
  Phone,
  ShieldCheck,
  Clock3,
  Building2,
  Upload,
  X,
  Send,
  Lock,
  ArrowRight,
  FileText,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { estimatePageData } from "@/data/estimate";
import { site } from "@/data/site";

export function EstimateHeroAndForm() {
  const { hero, form } = estimatePageData;
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [formData, setFormData] = useState({
    contactName: "",
    businessName: "",
    phone: "",
    email: "",
    serviceNeeded: form.services[0],
    propertyAddress: "",
    projectDetails: "",
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 25 * 1024 * 1024) {
        toast.error("File size exceeds 25MB limit. Please choose a smaller file.");
        return;
      }
      setUploadedFile(file);
      toast.success(`Attached "${file.name}"`);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      !formData.contactName ||
      !formData.businessName ||
      !formData.phone ||
      !formData.email ||
      !formData.propertyAddress
    ) {
      toast.error("Please fill in all required fields marked with *");
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      toast.success("Estimate request submitted successfully!", {
        description:
          "A dedicated project manager will contact you within 24 business hours. For immediate emergencies, call (469) 360-5805.",
      });
    }, 600);
  };

  return (
    <section id="estimate-form-section" className="relative overflow-hidden pt-28 sm:pt-36 pb-16 sm:pb-24 bg-gradient-to-b from-background via-secondary/25 to-background">
      {/* Ambient background decoration */}
      <div className="pointer-events-none absolute -left-36 top-1/4 h-[550px] w-[550px] rounded-full bg-primary/6 blur-[140px]" />
      <div className="pointer-events-none absolute -right-36 top-1/3 h-[500px] w-[500px] rounded-full bg-amber-500/6 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:28px_28px] opacity-35" />

      <div className="relative z-10 mx-auto max-w-[86rem] px-4 xs:px-5 sm:px-8">
        
        {/* Split Screen Layout: Left Content & Right Estimate Form */}
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          
          {/* Left Column: Headline, Subheadline & Trust Bullets */}
          <div className="lg:col-span-5 space-y-6 pt-2 lg:pt-6">
            
            {/* Breadcrumb Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-3.5 py-1 text-[0.72rem] font-semibold text-muted-foreground backdrop-blur-md shadow-xs"
            >
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <span className="text-muted-foreground/40">/</span>
              <span className="text-primary font-bold">Free Estimate</span>
            </motion.div>

            {/* Section Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-primary shadow-xs backdrop-blur-xl"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span>Commercial Glazing Proposals</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.12]"
            >
              Request a Free Commercial Glass &amp;{" "}
              <span className="bg-gradient-to-r from-primary via-amber-600 to-primary bg-clip-text text-transparent">
                Storefront Estimate.
              </span>
            </motion.h1>

            {/* Sub-headline Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              {hero.subheadline}
            </motion.p>

            {/* Trust Bullets (Visual Checkmarks) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.4 }}
              className="space-y-3 pt-2"
            >
              {hero.trustBullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-xl border border-border/70 bg-card/70 p-3 shadow-xs"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600">
                    <CheckCircle2 className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-sm font-bold text-foreground">
                    {bullet}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Emergency Hotline Alternative Card */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.5 }}
              className="rounded-2xl border border-red-500/30 bg-red-500/[0.05] p-5 shadow-xs"
            >
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/15 text-red-600">
                  <Clock3 className="h-5 w-5 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-red-700">
                    Active Glass Emergency?
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground leading-snug">
                    For shattered storefronts, break-ins, or immediate board-up needs, skip the form and call our 24/7 dispatch line directly.
                  </p>
                  <a
                    href={site.phoneHref}
                    className="mt-2.5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-red-600 hover:text-red-700"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Call {site.phone} (24/7 Mobile Dispatch)</span>
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: The Estimate Request Form (Centerpiece, above the fold) */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-border/90 bg-card p-6 sm:p-9 shadow-lift">
              {/* Top Accent Gradient Bar */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-amber-500 to-primary" />

              {/* Form Title & Intro */}
              <div className="mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary mb-2">
                  <FileText className="h-3.5 w-3.5" />
                  <span>Free Commercial Bid</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
                  {form.headline}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {form.body}
                </p>
              </div>

              {isSubmitted ? (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-600">
                    <CheckCircle2 className="h-10 w-10 animate-bounce" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                    Estimate Request Received!
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-foreground">{formData.contactName}</strong>. A dedicated project manager from Sure Fronts Of Dallas has received your project details for <strong className="text-foreground">{formData.businessName}</strong> and will contact you within 24 business hours.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          contactName: "",
                          businessName: "",
                          phone: "",
                          email: "",
                          serviceNeeded: form.services[0],
                          propertyAddress: "",
                          projectDetails: "",
                        });
                        setUploadedFile(null);
                      }}
                      className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
                    >
                      <span>Submit Another Request</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  
                  {/* Row 1: Contact Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                        Contact Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        placeholder="e.g. Sarah Miller"
                        className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                        Business Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Dallas Design Center"
                        className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                        Phone Number <span className="text-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(469) 000-0000"
                        className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@company.com"
                        className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Needed Dropdown */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                      Service Needed <span className="text-primary">*</span>
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                    >
                      {form.services.map((svc, i) => (
                        <option key={i} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 4: Property Address */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                      Property Address <span className="text-primary">*</span> (City, State, Zip)
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.propertyAddress}
                      onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                      placeholder="e.g. 10830 N. Central Expressway, Ste 130, Dallas, TX 75231"
                      className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                    />
                  </div>

                  {/* Row 5: Project Details */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                      Project Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Please describe the scope of work, number of doors/windows, glass type, or specific damage..."
                      className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                    />
                  </div>

                  {/* Row 6: File Upload (Optional: photos of damage or architectural plans) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                      File Upload <span className="text-xs font-normal text-muted-foreground">(Optional: damage photos or plans, max 25MB)</span>
                    </label>
                    
                    <input
                      ref={fileInputRef}
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*,.pdf,.dwg,.dxf"
                      className="hidden"
                      id="estimate-file-upload"
                    />

                    {uploadedFile ? (
                      <div className="flex items-center justify-between rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <FileText className="h-4 w-4 text-emerald-600 shrink-0" />
                          <span className="text-xs font-bold text-foreground truncate">
                            {uploadedFile.name}
                          </span>
                          <span className="text-[11px] text-muted-foreground shrink-0">
                            ({(uploadedFile.size / 1024 / 1024).toFixed(2)} MB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-emerald-500/20 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                          aria-label="Remove uploaded file"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ) : (
                      <label
                        htmlFor="estimate-file-upload"
                        className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border/80 bg-secondary/30 p-4 transition-all hover:border-primary/50 hover:bg-secondary/60 cursor-pointer"
                      >
                        <Upload className="h-6 w-6 text-muted-foreground mb-1" />
                        <span className="text-xs font-bold text-foreground">
                          Click to upload photos or plans
                        </span>
                        <span className="text-[11px] text-muted-foreground">
                          PNG, JPG, PDF, or architectural drawings
                        </span>
                      </label>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary via-[#b91c1c] to-primary py-4 px-6 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-lg hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer disabled:opacity-70"
                    >
                      <Send className="h-4 w-4" />
                      <span>{isSubmitting ? "Submitting Request..." : form.submitButton}</span>
                    </button>
                  </div>

                  {/* Privacy Note */}
                  <div className="flex items-center justify-center gap-2 text-center text-[11px] text-muted-foreground pt-1">
                    <Lock className="h-3 w-3 text-muted-foreground shrink-0" />
                    <span>{form.privacyNote}</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
