// Import gambar logo devcode
import devcodeLogo from "../../assets/devcode-logo.png";
import "./style.css";

export const HelloWorld = () => {
  return (
    <div className="hello">
      {/* Menambahkan gambar logo devcode */}
      <img data-cy="devcode-logo" src={devcodeLogo} alt="devcode logo" />
      <div data-cy="devcode-title">
        {/* Menambahkan elemen heading 1 */}
        <h1>I'm ready for the next challenge!</h1>
      </div>
    </div>
  );
};
