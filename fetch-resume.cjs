const fs = require("fs");

(async () => {
  const pdf_request = await fetch(
    "https://github.com/RyanGroch/Resume-Builder/releases/latest/download/resume.pdf",
  );

  const pdf = await pdf_request.bytes();
  fs.writeFileSync("./public/resume.pdf", pdf);
})();
