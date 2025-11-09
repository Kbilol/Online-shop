import { Button } from "@common/ui/Button";

export const Intro: React.FC = () => {
  return (
    <section className="flex justify-center items-center gap-10 px-6 py-12 bg-gradient-to-r from-pink-100 via-white to-pink-50 rounded-2xl shadow-lg max-w-6xl mx-auto">
      <img
        src="/Intro.jpg"
        alt="Intro"
        className="w-[400px] rounded-2xl shadow-md hover:scale-105 transition-transform duration-500"
      />
      
      <div className="flex flex-col gap-6 text-gray-700 max-w-xl">
        <h2 className="text-3xl font-bold text-pink-400 leading-snug">
          У нас вы найдёте всё необходимое <br /> 
          для себя и своих близких.
        </h2>
        
        <p className="text-lg leading-relaxed">
          Мы предлагаем <span className="text-pink-500 font-semibold">качественные товары</span> по доступным ценам, 
          быструю доставку и удобный сервис. Каждый покупатель для нас важен, 
          поэтому мы заботимся о том, чтобы ваши покупки были лёгкими и приятными.
        </p>
        
        <Button variant="fourth">
          Перейти к покупкам
        </Button>
      </div>
    </section>
  );
};
