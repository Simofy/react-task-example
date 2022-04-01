import { useCallback, useEffect, useState } from "react";
import { defaultLanguage, language } from "../../const";
import enLanguage from "../../lang/en.json";
import ltLanguage from "../../lang/lt.json";
import Description from "./components/Description";
import LanguageSelect from "./components/LanguageSelect";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  const [activeLanguage, setActiveLanguage] = useState(() => {
    const storedActiveLanguage = localStorage.getItem("active-language");
    return storedActiveLanguage || defaultLanguage;
  });

  const [languages, setLanguages] = useState(undefined);

  // Artificial loading time and setting language from file
  // Maybe language is fetched from API?
  useEffect(() => {
    const timeoutId = setTimeout(() => setLoading(false), 500);
    setLanguages({
      [language.en]: enLanguage,
      [language.lt]: ltLanguage,
    });
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // If fetch is used, loading logic should look something like this:
  // useEffect(() => {
  //   if (languages) {
  //     setLoading(false);
  //   }
  // }, [languages]);

  // Whenever language changes save it to local storage
  useEffect(() => {
    localStorage.setItem("active-language", activeLanguage);
  }, [activeLanguage]);

  // Maybe something like this can be used? :thinking-face:
  // function select(code) {
  //   try {
  //     return languages[activeLanguage][code];
  //   } catch (e) {
  //     console.error("code doesn't exist!");
  //     return "-";
  //   }
  // }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      {/* Header to change theme */}
      <LanguageSelect
        onChange={setActiveLanguage}
        activeLanguage={activeLanguage}
        languages={languages}
      />
      {/* About cats */}
      <Description activeLanguage={activeLanguage} languages={languages} />
    </div>
  );
}

export default App;
