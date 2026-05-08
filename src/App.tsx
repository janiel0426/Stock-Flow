import { ReactNode } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./hooks/use-auth";
import { LandingLayout } from "./components/layout/LandingLayout";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { Profile } from "./pages/Profile";
import { Inventory } from "./pages/Inventory";
import { ContentPage } from "./pages/ContentPage";
import { Toaster } from "@/components/ui/sonner";

function PublicOnlyRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (user) return <Navigate to="/dashboard" replace />;
  return <>{children}</>;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route element={<LandingLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/p/:pageId" element={<ContentPage />} />
          </Route>
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="orders" element={<div>Orders Page</div>} />
            <Route path="profile" element={<Profile />} />
            <Route path="customers" element={<div>Customers Page</div>} />
            <Route path="settings" element={<div>Settings Page</div>} />
          </Route>

          {/* Auth Routes */}
          <Route path="/login" element={<PublicOnlyRoute><Login /></PublicOnlyRoute>} />
          <Route path="/register" element={<PublicOnlyRoute><Register /></PublicOnlyRoute>} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </AuthProvider>
  );
}
