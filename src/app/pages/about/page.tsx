import { ShoppingBag, ShieldCheck, Truck, Users } from "lucide-react"; // Используем иконки для наглядности

import { Button } from "@common/ui/Button";

const AboutPage = () => {
  const stats = [
    { label: "Лет на рынке", value: "8+" },
    { label: "Довольных клиентов", value: "150K+" },
    { label: "Товаров в каталоге", value: "10K+" },
    { label: "Доставок по миру", value: "99.4%" },
  ];

  const advantages = [
    {
      icon: <ShoppingBag className={`w-6 h-6 text-primary`} />,
      title: "Исключительное качество",
      description:
        "Мы тщательно отбираем поставщиков и контролируем качество каждой единицы товара перед отправкой.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Безопасность покупок",
      description:
        "Все платежи защищены современными протоколами шифрования. 100% гарантия возврата средств.",
    },
    {
      icon: <Truck className="w-6 h-6 text-primary" />,
      title: "Быстрая доставка",
      description:
        "Доставляем заказы в кратчайшие сроки благодаря собственной логистике и надежным партнерам.",
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Поддержка 24/7",
      description:
        "Наша команда заботы о клиентах всегда на связи, чтобы помочь вам с любым вопросом.",
    },
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* 1. Hero Секция */}
      <section className="relative bg-gradient-to-r from-primary to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            О нашем интернет-магазине
          </h1>
          <p className="text-lg sm:text-xl text-indigo-200 max-w-3xl mx-auto leading-relaxed">
            Мы создаем не просто платформу для покупок, а пространство, где
            качество встречается с комфортом. Наша цель — делать стильные и
            надежные вещи доступными для каждого.
          </p>
        </div>
      </section>

      {/* 2. Блок "Наша история" + Статистика */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
              Кто мы и почему нам доверяют
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              История нашего бренда началась в 2018 году с небольшой команды
              энтузиастов. Мы верили, что онлайн-шопинг должен быть простым,
              прозрачным и приносить удовольствие.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Сегодня мы — один из ведущих интернет-магазинов, объединяющий
              тысячи брендов и миллионы покупателей. Мы постоянно развиваемся,
              внедряем новые технологии и улучшаем сервис, чтобы предвосхищать
              ваши ожидания.
            </p>
          </div>

          {/* Сетка статистики */}
          <div className="grid grid-cols-2 gap-6 bg-gray-50 p-8 rounded-2xl border border-gray-100">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white rounded-xl shadow-sm"
              >
                <p className="text-3xl sm:text-4xl font-extrabold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-gray-200 max-w-7xl mx-auto" />

      {/* 3. Преимущества / Ценности */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Наши главные приоритеты
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Мы строим отношения с клиентами на принципах честности, заботы и
            постоянного стремления к совершенству.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-5">
                {adv.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {adv.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Призыв к действию (CTA) */}
      <section className="bg-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Готовы сделать свой первый заказ?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Переходите в наш каталог и выбирайте лучшее из тысяч проверенных
            товаров с гарантией качества.
          </p>
          <Button variant="primary">Перейти в каталог</Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
