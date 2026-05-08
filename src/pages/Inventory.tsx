import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Search, Filter, MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const initialProducts = [
  { id: "1", name: "Premium Wireless Headphones", sku: "WH-100", category: "Electronics", price: 299.99, quantity: 45, status: "In Stock" },
  { id: "2", name: "Ergonomic Office Chair", sku: "OC-250", category: "Furniture", price: 199.99, quantity: 12, status: "Low Stock" },
  { id: "3", name: "Mechanical Keyboard", sku: "MK-080", category: "Electronics", price: 149.99, quantity: 0, status: "Out of Stock" },
  { id: "4", name: "Ceramic Coffee Mug", sku: "CM-012", category: "Home Goods", price: 18.50, quantity: 120, status: "In Stock" },
  { id: "5", name: "Yoga Mat Pro", sku: "YM-100", category: "Fitness", price: 45.00, quantity: 8, status: "Low Stock" },
  { id: "6", name: "Standing Desk Explorer", sku: "SD-400", category: "Furniture", price: 499.00, quantity: 23, status: "In Stock" },
  { id: "7", name: "Noise Cancelling Earbuds", sku: "NE-200", category: "Electronics", price: 179.99, quantity: 56, status: "In Stock" },
  { id: "8", name: "Protein Powder (Vanilla)", sku: "PP-V500", category: "Fitness", price: 34.99, quantity: 0, status: "Out of Stock" },
];

export function Inventory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products] = useState(initialProducts);

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-8 h-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Inventory</h2>
          <p className="text-muted-foreground">Manage your products, variants, and stock levels.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="hidden sm:flex">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>
      </div>

      <motion.div 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.4 }}
         className="flex-1 bg-background border rounded-xl shadow-sm flex flex-col overflow-hidden"
      >
        <div className="p-4 border-b flex items-center justify-between bg-muted/20">
           <div className="relative w-full max-w-sm">
             <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
             <Input
               type="search"
               placeholder="Filter products..."
               className="pl-8 bg-background"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
             />
           </div>
        </div>
        
        <div className="flex-1 overflow-auto">
          <Table>
            <TableHeader className="bg-muted sticky top-0 z-10 backdrop-blur-sm">
              <TableRow className="uppercase text-xs font-semibold text-muted-foreground hover:bg-transparent">
                <TableHead className="w-[80px]">Image</TableHead>
                <TableHead>
                  <Button variant="ghost" className="p-0 hover:bg-transparent text-xs font-semibold uppercase">
                    Product Name <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Quantity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="h-48 text-center text-muted-foreground">
                    No products found matching "{searchTerm}".
                  </TableCell>
                </TableRow>
              ) : (
                filteredProducts.map((product) => (
                  <TableRow key={product.id} className="group transition-colors hover:bg-muted/30">
                    <TableCell>
                      <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center border font-semibold text-xs text-muted-foreground">
                        {product.name.charAt(0)}
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell className="text-muted-foreground">{product.sku}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell className="text-right font-medium">${product.price.toFixed(2)}</TableCell>
                    <TableCell className="text-right">{product.quantity}</TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline"
                        className={`text-[10px] uppercase font-bold px-2 py-1 border-0 ${
                          product.status === "In Stock" ? "bg-emerald-50 text-emerald-700" : 
                          product.status === "Low Stock" ? "bg-amber-50 text-amber-700" : 
                          "bg-rose-50 text-rose-700"
                        }`}
                      >
                        {product.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger render={<Button variant="ghost" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity" />}>
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View details</DropdownMenuItem>
                          <DropdownMenuItem>Edit product</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">Delete product</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
        <div className="p-4 border-t flex items-center justify-between text-sm text-muted-foreground bg-muted/10">
           <div>Showing {filteredProducts.length} of {products.length} products</div>
           <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
