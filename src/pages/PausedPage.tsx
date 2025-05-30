import React from "react";
import { useTranslation } from "react-i18next";

interface PausedPageProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const PausedPage: React.FC<PausedPageProps> = ({ isDarkMode }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`flex items-center justify-center min-h-screen w-full ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="flex flex-col items-center text-center p-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          {t("paused.title") || "Application Paused"}
        </h1>
        <p className="text-lg md:text-xl mb-6">
          {t("paused.message") ||
            "The application is temporarily paused. Please try again later."}
        </p>
      </div>
    </div>
  );
};

export default PausedPage;
