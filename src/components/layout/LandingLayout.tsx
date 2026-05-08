import { Outlet, Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Facebook, Instagram, Package2 } from "lucide-react";

export function LandingLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-primary/20">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t py-12 md:py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-border/50 pb-12 mb-8 flex flex-col md:flex-row md:justify-between gap-12">
            <div className="md:w-1/3">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <Package2 className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-heading text-xl font-bold">StockFlow</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The most powerful and beautiful free inventory management solution for modern startups. Keep your tools sharp and your stock counted.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 active:scale-95"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 active:scale-95"><Instagram className="h-5 w-5" /></a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:w-2/3">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Product</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li><Link to="/p/features" className="hover:text-primary transition-colors">Features</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">Company</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li><Link to="/p/about" className="hover:text-primary transition-colors">About</Link></li>
                  <li><Link to="/p/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                  <li><Link to="/p/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">Resources</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li><Link to="/p/docs" className="hover:text-primary transition-colors">Docs</Link></li>
                  <li><Link to="/p/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                  <li><Link to="/p/tutorials" className="hover:text-primary transition-colors">Tutorials</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">Legal</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li><Link to="/p/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
                  <li><Link to="/p/terms" className="hover:text-primary transition-colors">Terms</Link></li>
                  <li><Link to="/p/cookies" className="hover:text-primary transition-colors">Cookies</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>© 2026 StockFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
