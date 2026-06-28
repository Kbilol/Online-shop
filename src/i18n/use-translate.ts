
import { useTranslation } from "react-i18next";

export function useTranslate() {
    const { t, i18n } = useTranslation();

    return { t, i18n };
}