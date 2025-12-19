"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submit = async () => {
    await fetch("/api/auth/login", {
      method: "POST",
        headers: {
      "Content-Type": "application/json",
    },
      body: JSON.stringify({ email, password }),
    });

    router.push("/");
  };

  return (
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br p-4">
      <Card className="w-full max-w-md rounded-2xl shadow-2xl">
        <CardContent className="p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Welcome Back 👋
          </h1>
          <p className="text-center text-gray-500 text-sm">
            Login to your account
          </p>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="email"
                placeholder="you@example.com"
                className="pl-10"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="password"
                placeholder="••••••••"
                className="pl-10"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Button */}
          <Button
            onClick={submit}
            className="w-full rounded-xl text-base"
          >
            Login
          </Button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <span className="text-indigo-600 font-medium cursor-pointer hover:underline">
              Sign up
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
