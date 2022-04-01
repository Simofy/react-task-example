export default function Description({ activeLanguage, languages }) {
  return (
    <div className="description">
      <h2>{languages[activeLanguage]["description.title"]}</h2>
      <div className="content">
        {languages[activeLanguage]["description.content"]}
      </div>
      <div className="buttons">
        <button>{languages[activeLanguage]["button.prev"]}</button>
        <button>{languages[activeLanguage]["button.next"]}</button>
      </div>
    </div>
  );
}
