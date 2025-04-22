
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="font-bold text-xl text-primary">
            <Link to="/">АвитоРазблок</Link>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm hover:text-primary transition-colors">
            Услуги
          </a>
          <a href="#why-us" className="text-sm hover:text-primary transition-colors">
            Почему мы
          </a>
          <a href="#faq" className="text-sm hover:text-primary transition-colors">
            Вопросы
          </a>
          <a href="#contact" className="text-sm hover:text-primary transition-colors">
            Контакты
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end">
            <a href="tel:+71234567890" className="text-sm font-medium flex items-center gap-1">
              <Phone className="h-3 w-3" /> +7 (123) 456-78-90
            </a>
            <a href="mailto:info@avitorazblock.ru" className="text-xs text-muted-foreground">
              info@avitorazblock.ru
            </a>
          </div>
          <Button size="sm" className="bg-[#9b87f5] hover:bg-[#7E69AB]">
            <Phone className="md:hidden" />
            <span className="hidden md:inline">Заказать звонок</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
