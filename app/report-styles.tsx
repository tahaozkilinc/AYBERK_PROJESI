import fs from "node:fs";
import path from "node:path";

const reportCss = fs.readFileSync(
  path.join(process.cwd(), "content", "report.css"),
  "utf8",
);

// Orijinal rapordaki .button sınıfı sadece <button> elemanları için
// yazılmıştı; admin/hesap sayfalarında <a>/<Link> üzerinde de kullanıyoruz.
const linkButtonFix = `
  a.button {
    display: inline-flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
  }
`;

export default function ReportStyles() {
  return <style dangerouslySetInnerHTML={{ __html: reportCss + linkButtonFix }} />;
}
