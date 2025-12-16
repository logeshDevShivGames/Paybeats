import { sendCommand } from "../utils/commandSender";

const languages = [
  { label: "English", code: "en" },
  { label: "हिंदी", code: "hi" },
  { label: "தமிழ்", code: "ta" },
  { label: "ಕನ್ನಡ", code: "kn" },
];

const LanguageSelector = ({
  language,
  setLanguage,
  selectedDevice,
  sendCommand,
}) => {
  const changeLang = (code) => {
    setLanguage(code);
    sendCommand?.({
      type: "language",
      lang: code,
    });
  };

  return (
    <div
      className="
        rounded-2xl bg-white/70 dark:bg-zinc-800/70 
        backdrop-blur-xl border border-white/20 dark:border-zinc-700
        shadow-lg dark:shadow-xl p-4 sm:p-6 transition-all
      ">
      <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
        Language
      </h2>

      {/* Responsive grid: 3 cols on md+, 2 cols on mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
        {languages.map((lang) => {
          const isActive = language === lang.code;

          return (
            <button
              key={lang.code}
              onClick={() => changeLang(lang.code)}
              className={`
                relative 
                px-3 py-2 sm:px-4 sm:py-3 
                rounded-xl 
                text-xs sm:text-sm font-medium text-center
                transition-all duration-300 backdrop-blur-md
                border 
                ${
                  isActive
                    ? "border-blue-500/70 bg-blue-50/70 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 shadow-md shadow-blue-500/20"
                    : "border-gray-300 dark:border-zinc-500 dark:text-white bg-white/40 dark:bg-zinc-800/40 hover:border-blue-400 hover:bg-blue-50/40 dark:hover:bg-zinc-700/40"
                }
                hover:scale-[1.03] active:scale-[0.97]
              `}>
              <span className="tracking-tight">{lang.label}</span>

              {/* Glow Ring on Active */}
              {isActive && (
                <span
                  className="
                    absolute inset-0 rounded-xl 
                    ring-2 ring-blue-400/40 dark:ring-blue-500/40
                    pointer-events-none
                  "
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSelector;
