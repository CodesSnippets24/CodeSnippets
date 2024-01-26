import { useEffect } from "react";

const YourComponent = () => {
  useEffect(() => {
    const handleClick = () => {
      const menuIcon = document.querySelector(".menu-icon");
      menuIcon.classList.toggle("active");

      menuIcon.querySelectorAll("div").forEach((line) => {
        line.classList.remove("no-animation");
      });
    };

    document.querySelector(".menu-icon").addEventListener("click", handleClick);

    return () => {
      document
        .querySelector(".menu-icon")
        .removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="frame">
      <div className="center">
        <div className="menu-icon">
          <div className="line-1 no-animation"></div>
          <div className="line-2 no-animation"></div>
          <div className="line-3 no-animation"></div>
        </div>
      </div>

      {/* Include jQuery using a script tag */}
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

      {/* Include your custom jQuery script */}
      <script>
        {`
          $(document).ready(function() {
            $('.menu-icon').on('click', function() {
              $(this).toggleClass('active');
              $(this).find('div').removeClass('no-animation');
            });
          });
        `}
      </script>
    </div>
  );
};

export default YourComponent;
