
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#f1f0fb] to-white">
      <div className="container flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#9b87f5]">Разблокировка</span> аккаунтов Авито<br />в течение 24 часов
          </h1>
          
          <p className="text-lg text-muted-foreground">
            Быстро и гарантированно восстановим доступ к вашему аккаунту. 
            Работаем с любыми видами блокировок на Авито.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Гарантия возврата средств</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Опыт более 5 лет</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Более 10 000 успешных разблокировок</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] h-12 px-6">
              Разблокировать аккаунт
            </Button>
            <Button variant="outline" className="h-12 px-6">
              Консультация бесплатно
            </Button>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-6 -left-6 w-full h-full rounded-xl bg-[#D6BCFA] -z-10"></div>
            <img 
              src="/placeholder.svg" 
              alt="Разблокировка аккаунта Авито" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
