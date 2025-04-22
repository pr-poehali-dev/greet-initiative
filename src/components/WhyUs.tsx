
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, History, ThumbsUp, Award, Headphones, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Award className="h-12 w-12 text-[#9b87f5] mb-4" />,
    title: "Опытные специалисты",
    description: "Наши эксперты имеют опыт работы более 5 лет и решили тысячи случаев блокировок"
  },
  {
    icon: <ThumbsUp className="h-12 w-12 text-[#9b87f5] mb-4" />,
    title: "Гарантия результата",
    description: "Если мы не сможем разблокировать аккаунт, вернем вам деньги в полном объеме"
  },
  {
    icon: <History className="h-12 w-12 text-[#9b87f5] mb-4" />,
    title: "Быстрое решение",
    description: "Большинство аккаунтов разблокируем в течение 24 часов после обращения"
  },
  {
    icon: <MessageSquare className="h-12 w-12 text-[#9b87f5] mb-4" />,
    title: "Прозрачность",
    description: "Держим вас в курсе всех действий и этапов разблокировки вашего аккаунта"
  },
  {
    icon: <Headphones className="h-12 w-12 text-[#9b87f5] mb-4" />,
    title: "Поддержка 24/7",
    description: "Наши менеджеры доступны круглосуточно для решения ваших вопросов"
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-[#9b87f5] mb-4" />,
    title: "Конфиденциальность",
    description: "Гарантируем полную безопасность ваших данных и информации об аккаунте"
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-16 bg-[#f1f0fb]">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-muted-foreground">
            Нам доверяют тысячи клиентов благодаря нашему профессионализму и высокой эффективности
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/40 hover:shadow-md transition-shadow text-center">
              <CardHeader className="pb-2">
                <div className="flex justify-center">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
