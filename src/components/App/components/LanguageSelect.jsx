import { useMemo } from "react";
import { defaultLanguage } from "../../../const";

export default function LanguageSelect({
  onChange,
  activeLanguage,
  languages,
}) {
  const languageList = useMemo(
    () =>
      Object.keys(languages).map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      )),
    [languages]
  );
  return (
    <div className="language-select">
      <label htmlFor="select">
        {languages[activeLanguage]["language-select.label.name"]}
      </label>
      <select
      
        value={activeLanguage}
        id="select"
        onChange={(e) => {
          onChange(e?.target?.value || defaultLanguage);
        }}
      >
        {languageList}
      </select>
    </div>
  );
}
