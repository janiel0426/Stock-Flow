import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package2, ChevronDown, User, Settings, Bell, Moon, Sun, HelpCircle, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Navbar() {
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();
  
  const handleSignOut = () => {
    signOut(auth);
    toast.success("Successfully logged out");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Package2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-bold tracking-tight">StockFlow</span>
          </Link>
          <nav className="hidden md:ml-10 md:flex md:gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 active:scale-95">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 active:scale-95">How it works</a>
            <a href="#preview" className="text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 active:scale-95">Preview</a>
            <a href="#testimonials" className="text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 active:scale-95">Testimonials</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="ghost" className="relative h-[50px] w-[50px] rounded-full p-0 hover:bg-muted" />}>
                  <Avatar className="h-[50px] w-[50px]">
                    <AvatarImage src={user.photoURL || undefined} />
                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">
                      {(user.displayName || user.email || "?").charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-2">
                <div className="px-1.5 py-1 text-sm font-medium text-muted-foreground font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none text-foreground">{user.displayName || "User"}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer" render={<Link to="/dashboard/profile" />}>
                    <User className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>My Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" render={<Link to="/dashboard/settings" />}>
                    <Settings className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={() => toast.info("No new notifications")}>
                  <Bell className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>Notifications</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={toggleTheme}>
                  {theme === "dark" ? <Sun className="mr-2 h-4 w-4 text-muted-foreground" /> : <Moon className="mr-2 h-4 w-4 text-muted-foreground" />}
                  <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" render={<Link to="/p/faq" />}>
                    <HelpCircle className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Help Center</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/10" onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/login" className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block">
                Sign In
              </Link>
              <Link to="/register">
                <Button>Get Started</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
      <div className="h-16 w-full shrink-0" />
    </>
  );
}
