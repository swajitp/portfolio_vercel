import { readFileSync } from "node:fs";
import path from "node:path";

interface WooqerMapEmbedProps {
  className?: string;
}

export function WooqerMapEmbed({ className }: WooqerMapEmbedProps) {
  const mapHtml = readFileSync(
    path.join(process.cwd(), "public", "wooqer-cs-ops-map.html"),
    "utf8",
  );

  return (
    <iframe
      title="Interactive CS Ops / Program Manager Org Map"
      srcDoc={mapHtml}
      className={className}
    />
  );
}
