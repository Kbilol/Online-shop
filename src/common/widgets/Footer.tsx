import { SendIcon, Mail, Phone, MapPin, CodeIcon } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();



 

  const navigationLinks = [
    { title: "Главная", href: "#" },
    { title: "О нас", href: "#" },
    { title: "Услуги", href: "#" },
    { title: "Портфолио", href: "#" },
  ];

  const supportLinks = [
    { title: "FAQ", href: "#" },
    { title: "Контакты", href: "#" },
    { title: "Политика конфиденциальности", href: "#" },
    { title: "Условия использования", href: "#" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 mt-5">
      {/* Основной контейнер */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Блок бренда и соцсетей */}
          <div className="space-y-6 xl:col-span-1">
            <span className="text-2xl font-bold tracking-tight text-white">
              Online<span className="text-pink-400">Shop</span>
            </span>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Создаем современные и удобные цифровые решения для вашего бизнеса.
              Качество и надежность на каждом этапе разработки.
            </p>
            <div className="flex space-x-5">
              <a
                href="#"
                className="text-slate-400 hover:text-pink-400 transition-colors duration-200"
                aria-label="Telegram"
              >
                <SendIcon className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-pink-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <CodeIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Блок со ссылками и контактами */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 md:grid-cols-3">
            {/* Навигация */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Навигация
              </h3>
              <ul className="mt-4 space-y-3">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Поддержка */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Поддержка
              </h3>
              <ul className="mt-4 space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Контакты (занимает 2 колонки на мобильных, если не помещается) */}
            <div className="col-span-2 md:col-span-1 mt-8 md:mt-0">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Контакты
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-pink-400 shrink-0" />
                  <span>г. Ташкент, ул. Примерная, 10</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-pink-400 shrink-0" />
                  <a
                    href="tel:+998901234567"
                    className="hover:text-white transition-colors"
                  >
                    +998 (90) 123-45-67
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-pink-400 shrink-0" />
                  <a
                    href="mailto:info@yoursite.com"
                    className="hover:text-white transition-colors"
                  >
                    info@yoursite.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Нижняя плашка с копирайтом */}
        <div className="mt-12 border-t border-slate-800 pt-8 text-center md:flex md:items-center md:justify-between">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Название Сайта. Все права защищены.
          </p>
          <p className="mt-2 text-xs text-slate-600 md:mt-0">
            Разработано с любовью и React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};
