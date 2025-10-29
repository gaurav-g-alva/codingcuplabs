import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import JobDetail from "./pages/JobDetail";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { useEffect } from "react";

// Custom hook to handle GitHub Pages base path
function useGitHubPagesRouter() {
  const [location, setLocation] = useLocation();
  const isGitHubPages = typeof window !== 'undefined' && 
    window.location.hostname.includes('github.io');
  const basePath = isGitHubPages ? '/codingcuplabs' : '';
  
  useEffect(() => {
    if (isGitHubPages) {
      console.log('Running on GitHub Pages with base path:', basePath);
      // Log current location for debugging
      console.log('Current location:', location);
      
      // Handle navigation for GitHub Pages
      const handleClick = (e) => {
        const target = e.target.closest('a');
        if (!target) return;
        
        const href = target.getAttribute('href');
        if (!href || href.startsWith('http') || href.startsWith('#')) return;
        
        // Prevent default navigation
        e.preventDefault();
        
        // Use wouter's setLocation for navigation
        setLocation(href.startsWith('/') ? href : `/${href}`);
      };
      
      document.body.addEventListener('click', handleClick);
      return () => document.body.removeEventListener('click', handleClick);
    }
  }, [isGitHubPages, basePath, location, setLocation]);

  return { basePath, isGitHubPages, setLocation };
}

function Router() {
  const { basePath, isGitHubPages, setLocation } = useGitHubPagesRouter();
  
  return (
    <Switch>
      <Route path={`${basePath}/`} component={Home} />
      <Route path={`${basePath}/about`} component={About} />
      <Route path={`${basePath}/services`} component={Services} />
      <Route path={`${basePath}/careers`} component={Careers} />
      <Route path={`${basePath}/careers/:slug`} component={JobDetail} />
      <Route path={`${basePath}/blogs`} component={Blogs} />
      <Route path={`${basePath}/blogs/:slug`} component={BlogDetail} />
      <Route path={`${basePath}/contact`} component={Contact} />
      <Route path={`${basePath}/privacy-policy`} component={PrivacyPolicy} />
      <Route path={`${basePath}/404`} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
