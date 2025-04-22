
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone, Send } from "lucide-react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 bg-[#f1f0fb]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
            <p className="text-muted-foreground mb-8">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время, 
              чтобы помочь с разблокировкой вашего аккаунта Авито
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#9b87f5]/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-[#9b87f5]" />
                </div>
                <div>
                  <h3 className="font-medium">Телефон</h3>
                  <p className="text-muted-foreground">+7 (123) 456-78-90</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#9b87f5]/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-[#9b87f5]" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">info@avitorazblock.ru</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#9b87f5]/10 p-3 rounded-full">
                  <MessageSquare className="h-6 w-6 text-[#9b87f5]" />
                </div>
                <div>
                  <h3 className="font-medium">Мессенджеры</h3>
                  <p className="text-muted-foreground">Telegram, WhatsApp, Viber</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Ваше имя
                  </label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Номер телефона
                  </label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" placeholder="example@mail.ru" type="email" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Сообщение
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Опишите вашу проблему с аккаунтом Авито" 
                  rows={4}
                />
              </div>
              
              <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">
                <Send className="h-4 w-4 mr-2" />
                Отправить заявку
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с нашей{" "}
                <a href="#" className="text-[#9b87f5] hover:underline">
                  политикой конфиденциальности
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
