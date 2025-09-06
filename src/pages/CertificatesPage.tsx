import { Certificates, type TimelineEntry } from "@/data/certificates";
import CertificateCard from "@/secondaryComponents/CertificateCard";
import type { JSX } from "react";

export default function CertificatesPage(): JSX.Element {
  return (
    <div>
      {Certificates.map(
        (cert: Omit<TimelineEntry, "imageAlt">, index: number): JSX.Element => (
          <CertificateCard
            img={cert.imageUrl}
            certificateTitle={cert.certificateTitle}
            description={cert.description}
            key={index}
          />
        )
      )}
    </div>
  );
}
