"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import {
  BarChart,
  FileText,
  MessageCircle,
  Settings,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { LayoutDashboard } from "lucide-react"

export function Sidebar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
   <div>
    {/* mobile sidebar */}
    <Sheet  open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        
        <Button variant="outline" className=" m-4 md:hidden">
            <LayoutDashboard className="h-5 w-5 " />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[250px]">
          <DashboardSidebar closeSheet={() => setIsOpen(false)} />  
      </SheetContent>
    </Sheet>

     <div className="hidden md:block h-screen w-[250px] border-r bg-background">
        <DashboardSidebar />
    </div>

   </div>
  )
}

function DashboardSidebar ({ closeSheet }: { closeSheet?: () => void }){

  return(

    <div className="h-full px-4 py-6">

        <div className="flex items-center gap-2 mb-8 px-2">
        <Link href={"/"}>
        <span className="text-xl font-bold">ByteCode</span>
        </Link>
        </div>

        <nav className="space-y-1">

          <Link href={"/dash"}>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={closeSheet}
          >
          <LayoutDashboard className="mr-2 h-4 w-4" />
            Overview
          </Button>
          </Link>

           <Link href={"/dash/articles/create"}>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={closeSheet}
          >
            <FileText className="mr-2 h-4 w-4" />
            Articles
          </Button>
        </Link>

        <Link href={"/dash/comments"}>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={closeSheet}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Comments
        </Button>
        </Link>
        


        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={closeSheet}
        >
          <BarChart className="mr-2 h-4 w-4" />
          Analytics
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={closeSheet}
        >
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>

        </nav>
      
    </div>

  )
}










