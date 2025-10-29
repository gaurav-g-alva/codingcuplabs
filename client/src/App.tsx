import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
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

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/services"} component={Services} />
      <Route path={"/careers"} component={Careers} />
      <Route path={"/careers/:slug"} component={JobDetail} />
      <Route path={"/blogs"} component={Blogs} />
      <Route path={"/blogs/:slug"} component={BlogDetail} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/privacy-policy"} component={PrivacyPolicy} />
      <Route path={"/404"} component={NotFound} />
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
