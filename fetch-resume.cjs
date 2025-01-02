const fs = require("fs");

(async () => {
  const headers = new Headers();
  headers.append("Accept", "application/vnd.github.v3.raw");

  const pdf_request = await fetch(
    "https://api.github.com/repos/ryangroch/resume/contents/resume.pdf",
    {
      headers,
    },
  );

  const pdf = await pdf_request.bytes();
  fs.writeFileSync("./public/resume.pdf", pdf);
})();
