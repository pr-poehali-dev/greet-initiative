
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, UserCheck, Clock, Zap } from "lucide-react";

const services = [
  {
    icon: <Shield className="h-10 w-10 text-[#9b87f5]" />,
    title: "Разблокировка по жалобе",
    description: "Восстановим доступ к аккаунту, заблокированному из-за жалоб других пользователей"
  },
  {
    icon: <UserCheck className="h-10 w-10 text-[#9b87f5]" />,
    title: "Восстановление после взлома",
    description: "Вернём контроль над аккаунтом и усилим его защиту от последующих взломов"
  },
  {
    icon: <Clock className="h-10 w-10 text-[#9b87f5]" />,
    title: "Разблокировка временной блокировки",
    description: "Снимем временное ограничение и восстановим полный функционал аккаунта"
  },
  {
    icon: <Zap className="h-10 w-10 text-[#9b87f5]" />,
    title: "Срочная разблокировка",
    description: "Оперативное восстановление доступа в течение нескольких часов"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
          <p className="text-muted-foreground">
            Мы предлагаем полный спектр услуг по разблокировке аккаунтов Авито, 
            вне зависимости от причины блокировки
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-border/40 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-2">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
