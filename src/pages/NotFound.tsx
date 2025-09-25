import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-subtle">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-primary-foreground font-bold text-2xl">404</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold text-foreground">Page Not Found</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <Link to="/">
            <Button variant="hero" size="lg" className="w-full">
              Return to Home
            </Button>
          </Link>
          <Link to="/admin">
            <Button variant="outline" size="lg" className="w-full">
              Go to Admin
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
