
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="font-bold text-xl mb-4">АвитоРазблок</div>
            <p className="text-gray-400 text-sm">
              Профессиональная разблокировка аккаунтов Авито быстро и с гарантией результата
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Разблокировка по жалобе</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Восстановление после взлома</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Временная блокировка</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Срочная разблокировка</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">О компании</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Пользовательское соглашение</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Способы оплаты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">+7 (123) 456-78-90</li>
              <li className="text-gray-400 text-sm">info@avitorazblock.ru</li>
              <li className="text-gray-400 text-sm">Работаем ежедневно с 9:00 до 21:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} АвитоРазблок. Все права защищены.
          </div>
          <div className="mt-4 md:mt-0 text-gray-500 text-sm">
            Сайт не является официальным ресурсом Авито. Все торговые марки принадлежат их владельцам.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
