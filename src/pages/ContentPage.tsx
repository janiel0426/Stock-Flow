import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

export function ContentPage() {
  const { pageId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageId]);

  const contentMap: Record<string, { title: string, content: string }> = {
    features: { title: "Features", content: "Discover the amazing features of StockFlow. Real-time updates, multi-warehouse support, and much more." },
    pricing: { title: "Pricing", content: "StockFlow is completely free to use. There are no pricing tiers or hidden fees." },
    about: { title: "About Us", content: "StockFlow is built by a team of passionate developers who want to simplify inventory management." },
    careers: { title: "Careers", content: "Join our team! We're always looking for talented individuals to help us build the future of StockFlow." },
    contact: { title: "Contact Us", content: "Have questions? Reach out to us at support@stockflow.com." },
    docs: { title: "Documentation", content: "Read our comprehensive documentation to learn how to master StockFlow." },
    faq: { title: "Frequently Asked Questions", content: "Find answers to our most common questions here." },
    tutorials: { title: "Tutorials", content: "Watch step-by-step tutorials to get up and running quickly." },
    privacy: { title: "Privacy Policy", content: "We respect your privacy. All your data is encrypted and secure." },
    terms: { title: "Terms of Service", content: "By using StockFlow, you agree to our simple, fair terms of service." },
    cookies: { title: "Cookie Policy", content: "We use cookies strictly for session management and basic analytics." }
  };

  const data = contentMap[pageId || ""] || { title: "Page Not Found", content: "The page you are looking for does not exist." };

  return (
    <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8 min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold font-heading mb-8">{data.title}</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed">{data.content}</p>
          
          <div className="mt-12 p-8 bg-muted/30 rounded-2xl border shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Detailed Content Overview</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Welcome to the {data.title.toLowerCase()} page. This is a dedicated section built so you can provide detailed, long-form content to your users, employees, or customers. 
              </p>
              <p>
                To edit this further, you can start dropping rich components, forms, and layouts right into this template space. 
                Whether you're outlining your corporate guidelines, detailing an API, or setting up a contact form, the structure is ready.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
