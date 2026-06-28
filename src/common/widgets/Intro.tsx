import { Button } from "@common/ui/Button";
import { Image } from "@common/ui/Image";
import { Text } from "@common/ui/Text";
import { Title } from "@common/ui/Title";
import { useTranslation } from "react-i18next";

export const Intro: React.FC = () => {
  const { t } = useTranslation("product");

  return (
    <section className="flex mt-10 justify-center items-center gap-10 px-6 py-12 bg-gradient-to-r from-pink-100 via-white to-pink-50 rounded-2xl shadow-lg max-w-6xl mx-auto">
      <Image
        src="/Intro.jpg"
        alt="Intro"
        className="w-[400px] rounded-2xl shadow-md hover:scale-105 transition-transform duration-500"
      />

      <div className="flex flex-col gap-6 text-gray-700 max-w-xl">
        <h1>{t("Welcome")}</h1>
        <h2>{t("productTitle")}</h2>
        <p>{t("description")}</p>

        <Title variant="secondary" size="lg">
          У нас вы найдёте всё необходимое <br />
          для себя и своих близких.
        </Title>

        <Text variant="secondary" size="lg">
          Мы предлагаем{" "}
          <span className="text-pink-500 font-semibold">
            качественные товары
          </span>{" "}
          по доступным ценам, быструю доставку и удобный сервис.
        </Text>

        <Button variant="fourth">
          Перейти к покупкам
        </Button>
      </div>
    </section>
  );
};