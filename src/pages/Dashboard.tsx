import { motion } from "framer-motion";
import { Package, TrendingUp, Users, DollarSign, Activity, CreditCard } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "Jan", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Feb", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Mar", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Apr", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "May", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jun", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jul", total: Math.floor(Math.random() * 5000) + 1000 },
];

export function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Welcome back. Here's what's happening with your inventory today.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Total Revenue", value: "$45,231.89", change: "+20.1% from last month", icon: DollarSign },
          { title: "Total Inventory", value: "2,350", change: "+180 new items added", icon: Package },
          { title: "Orders Processed", value: "+1,234", change: "+19% from last month", icon: CreditCard },
          { title: "Active Customers", value: "573", change: "+201 since last week", icon: Users },
        ].map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Card className="shadow-sm">
              <CardContent className="p-5 flex flex-col justify-between h-full">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{stat.title}</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded">{stat.change}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.4 }}
           className="col-span-4"
        >
          <Card className="col-span-4 h-full">
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-0">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis
                      stroke="#888888"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="var(--primary)" fill="var(--primary)" fillOpacity={0.2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.5 }}
           className="col-span-3"
        >
          <Card className="col-span-3 h-full">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>You have 3 new notifications.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {[
                  { title: "Low stock alert: Wireless Headphones", time: "2 hours ago", icon: Activity, color: "text-amber-500", bg: "bg-amber-100" },
                  { title: "New order #4592 received", time: "3 hours ago", icon: CreditCard, color: "text-emerald-500", bg: "bg-emerald-100" },
                  { title: "Inventory updated for 20 items", time: "5 hours ago", icon: Package, color: "text-blue-500", bg: "bg-blue-100" },
                  { title: "New user John Doe registered", time: "1 day ago", icon: Users, color: "text-indigo-500", bg: "bg-indigo-100" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className={`mr-4 flex h-9 w-9 items-center justify-center rounded-full ${item.bg}`}>
                      <item.icon className={`h-4 w-4 ${item.color}`} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
