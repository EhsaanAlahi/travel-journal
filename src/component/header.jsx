import globe from "../assets/globe.png"; // correct path + extension

export default function Header() {
  return (
    <header>
      <img src={globe} alt="Globe" width={50} height={50} />
      <h1>My Travel Journal</h1>
    </header>
  );
}

