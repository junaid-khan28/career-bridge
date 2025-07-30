import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Mail, Lock, LogIn, KeyRound } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);
    // Frontend only - no actual login logic
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Frontend only - no actual Google auth
  };

  const handleGithubLogin = () => {
    console.log("GitHub login clicked");
    // Frontend only - no actual GitHub auth
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-bg p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>
      </div>

      <Card className="w-full max-w-md relative z-10 bg-gradient-card shadow-card border-0 backdrop-blur-sm">
        <CardHeader className="space-y-1 text-center relative">
          <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 shadow-glow">
            <KeyRound className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Sign in to your account to continue your journey
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2 relative">
              <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="h-12 pl-12 border-2 transition-all duration-200 focus:border-primary focus:shadow-glow/50"
              />
              <Mail className="absolute left-4 top-[38px] h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>

            <div className="space-y-2 relative">
              <Label htmlFor="password" className="text-sm font-medium flex items-center gap-2">
                <Lock className="h-4 w-4 text-primary" />
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="h-12 pl-12 border-2 transition-all duration-200 focus:border-primary focus:shadow-glow/50"
              />
              <Lock className="absolute left-4 top-[38px] h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>

            <div className="flex items-center justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-primary hover:text-primary-glow font-medium hover:underline transition-colors duration-200"
              >
                Forgot password?
              </Link>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold text-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <LogIn className="mr-2 h-5 w-5" />
              Sign In
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gradient-card px-4 text-muted-foreground font-medium">
                Or continue with
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full h-12 border-2 hover:border-primary hover:shadow-glow/30 transition-all duration-300 group"
              onClick={handleGoogleLogin}
            >
              <Mail className="mr-3 h-5 w-5 text-red-500 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Continue with Google</span>
            </Button>
            <Button
              variant="outline"
              className="w-full h-12 border-2 hover:border-primary hover:shadow-glow/30 transition-all duration-300 group"
              onClick={handleGithubLogin}
            >
              <Github className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Continue with GitHub</span>
            </Button>
          </div>

          <div className="text-center text-sm pt-4 border-t">
            <span className="text-muted-foreground">Don't have an account? </span>
            <Link
              to="/signup"
              className="text-primary hover:text-primary-glow font-semibold hover:underline transition-colors duration-200"
            >
              Create one here
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;