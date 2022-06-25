export default function Footer() {
  return (
    <footer className="bg-saltt-400 text-black">
      <div className="box flex items-center justify-between py-4 flex-col md:flex-row gap-3">
        <div className="text-2xl flex gap-3  lg:order-2">
          <a href="#">
            <i className="fas fa-phone"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <span className="font-bold">
          &copy;2022 - Saltt Kitchen &apos;n Bar
        </span>
      </div>
    </footer>
  );
}
