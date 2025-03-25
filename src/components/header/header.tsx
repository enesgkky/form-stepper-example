import { Github } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="p-4 border-b flex items-center justify-between">
      <div>
        <a href="/">
          <span className="text-2xl uppercase">
            i <strong>was</strong> here
          </span>
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <a
          href="https://github.com/enesgkky/form-stepper-example"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm"
        >
          <Button variant="outline" size="icon" className="cursor-pointer">
            <Github className="h-6 w-6" />
          </Button>
        </a>
        <ThemeToggle/>
      </div>
    </header>
  );
}
